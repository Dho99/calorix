import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../../auth";
import type { ACTIVITY_TYPE, ActivityType } from "@/app/utils/lib/types/user";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const reqType = searchParams.get("type");
  const session = await auth();

  let res;
  let total;

  if (reqType === "getAllUserActivities") {
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 12;

    res = await prisma.userActivites.findMany({
      skip: page - 1,
      take: limit,
      where: {
        userId: session?.user?.id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        foodLog: true,
        userHydration: true,
        sleepTracker: true,
        physicalActivityLog: {
          include: {
            activityType: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    total = await prisma.userActivites.count({
      where: {
        userId: session?.user?.id,
      },
    });
  }


  if (reqType === "filterActivities") {
    const findByName = searchParams.get("title");

    if (findByName) {
      res = await prisma.userActivites.findMany({
        where: {
          userId: session?.user?.id,
          title: {
            search: findByName,
          },
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
          foodLog: true,
          userHydration: true,
          sleepTracker: true,
          physicalActivityLog: {
            include: {
              activityType: true,
            },
          },
        },
      });
      total = res.length || 0;
    }

    const category = searchParams.get("category");
    if (
      category === "TODAY" ||
      category === "THIS_WEEK" ||
      category === "THIS_MONTH" ||
      category === "THIS_YEAR"
    ) {
      const day = new Date();
      switch (category) {
        case "TODAY":
          day.setHours(0, 0, 0, 0);
          break;
        case "THIS_WEEK":
          day.setDate(day.getDate() - day.getDay());
          day.setHours(0, 0, 0, 0);
          break;
        case "THIS_MONTH":
          day.setDate(1);
          day.setHours(0, 0, 0, 0);
          break;
        case "THIS_YEAR":
          day.setMonth(0);
          day.setDate(1);
          day.setHours(0, 0, 0, 0);
          break;
        default:
          return NextResponse.json({ success: false }, { status: 400 });
      }

      res = await prisma.userActivites.findMany({
        where: {
          userId: session?.user?.id,
          createdAt: {
            gte: day,
          },
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
          foodLog: true,
          userHydration: true,
          sleepTracker: true,
          physicalActivityLog: {
            include: {
              activityType: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      total = res.length || 0;
    } else {
      if (category) {
        res = await prisma.userActivites.findMany({
          where: {
            userId: session?.user?.id,
            category: category as ACTIVITY_TYPE,
          },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true,
              },
            },
            foodLog: true,
            userHydration: true,
            sleepTracker: true,
            physicalActivityLog: {
              include: {
                activityType: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        });
        total = res?.length || 0;
      }
    }
  }

  return NextResponse.json({
    success: true,
    data: total! > 0 ? res : null,
    total: total,
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const reqType = searchParams.get("type");
  const session = await auth();
  const body = await request.json();
  const data = JSON.parse(body.data);

  if (reqType === "create") {
    const category = searchParams.get("category");

    let childData;

    if (category === "SLEEP_TRACKER") {
      const sleepConvertToHour = parseInt(String(data?.duration));

      const sleepTracker = await prisma.sleepTracker.create({
        data: {
          userId: session?.user?.id as string,
          duration: sleepConvertToHour,
        },
      });

      childData = {
        sleepTrackerId: sleepTracker.id,
      };
    } else if (category === "FOOD_LOG") {
      const foodLog = await prisma.foodLog.create({
        data: {
          userId: session?.user?.id as string,
          foodName: data.foodName,
          calories: parseFloat(data.calories),
          mealType: data.mealType,
        },
      });

      childData = {
        foodLogId: foodLog.id,
      };
    } else if (category === "PHYSICAL_ACTIVITY") {
      const physicalActivityData = {
        caloriesBurned: 0,
        duration: 0,
        stepsCount: 0,
      };

      const userCharacteristics = await prisma.userCharacteristics.findFirst({
        where: {
          userId: session?.user?.id as string,
        },
        select: {
          id: true,
          currentWeight: true,
          height: true,
          age: true,
          gender: true,
        },
      });

      const calculateUserStepsLength = parseFloat(String(userCharacteristics?.height)) * (userCharacteristics?.gender === "male" ? 0.415 : 0.413);

      data?.activityData?.map((item: ActivityType) => {
        const duration = parseInt(String(item?.duration));
        const caloriesPerHour = parseFloat(
          String((item?.calories_per_hour as number) / 60)
        );

        if (item?.name.toLowerCase()?.includes("running")) {
          const speedMatch = item?.name?.match(/(\d+(\.\d+)?)\s*mph/);
          if (speedMatch) {
            const speed = speedMatch ? parseFloat(speedMatch[1]) : 0;
            const durationInHours = duration / 60; // Convert duration to hours
            const distance = speed * durationInHours;
            const countSteps = (distance * 160934) / calculateUserStepsLength;
            physicalActivityData.stepsCount += countSteps;
          }
        }

        if (item?.name.toLowerCase()?.includes("walking")) {
          const averageWalkingSpeed = 3; // Assuming average walking speed is 3 mph
          const durationInHours = duration / 60; // Convert duration to hours
          const distance = averageWalkingSpeed * durationInHours;
          const countSteps = (distance * 160934) / calculateUserStepsLength;
          physicalActivityData.stepsCount += countSteps;
        }

        physicalActivityData.caloriesBurned += caloriesPerHour * duration;
        physicalActivityData.duration += duration;
      });

      const calculateWithCalories = Number(((Number(String(userCharacteristics?.currentWeight)) * 7700) - Number(String(physicalActivityData?.caloriesBurned)))) / 7700;

      await prisma.userCharacteristics.update({
        where: {
          id: userCharacteristics?.id as string,
        },
        data: {
          currentWeight: calculateWithCalories.toString(),
        },
      });

      const physicalActivityLog = await prisma.physicalActivityLog.create({
        data: {
          userId: session?.user?.id as string,
          duration: physicalActivityData.duration,
          caloriesBurned: physicalActivityData.caloriesBurned,
          stepsCount: physicalActivityData.stepsCount,
        },
      });

      await prisma.activityType.createMany({
        data: data?.activityData?.map((item: ActivityType) => ({
          name: item?.name,
          metValue: parseFloat(String(item?.calories_per_hour / 60)),
          duration: parseInt(String(item?.duration)),
          physicalActivityId: physicalActivityLog.id,
        })),
      });


      childData = {
        physicalActivityLogId: physicalActivityLog.id,
      };
    } else if (category === "USER_HYDRATION") {
      const userHydration = await prisma.userHydration.create({
        data: {
          userId: session?.user?.id as string,
          waterIntake: data?.waterIntake as string,
        },
      });

      childData = {
        userHydrationId: userHydration.id,
      };
    }

    const res = await prisma.userActivites.create({
      data: {
        userId: session?.user?.id as string,
        category: category as ACTIVITY_TYPE,
        title: data.title as string,
        ...childData,
      },
      include: {
        user: true,
        foodLog: true,
        userHydration: true,
        sleepTracker: true,
        physicalActivityLog: true,
      },
    });
    return NextResponse.json({ success: true, data: res }, { status: 201 });
  }

  return NextResponse.json({ success: false }, { status: 400 });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const reqType = searchParams.get("type");

  if (reqType === "delete") {
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const res = await prisma.userActivites.delete({
      where: {
        id,
      },
    });

    if (res?.category === "PHYSICAL_ACTIVITY" && res.physicalActivityLogId) {
      await prisma.$transaction([
        prisma.activityType.deleteMany({
          where: {
            physicalActivityId: res.physicalActivityLogId,
          },
        }),
        prisma.physicalActivityLog.delete({
          where: {
            id: res.physicalActivityLogId,
          },
        }),
      ]);
    }

    if(res?.category === "SLEEP_TRACKER" && res.sleepTrackerId) {
      await prisma.sleepTracker.delete({
        where: {
          id: res.sleepTrackerId
        }
      })
    }
    if(res?.category === "FOOD_LOG" && res.foodLogId) {
      await prisma.foodLog.delete({
        where: {
          id: res.foodLogId
        }
      })
    }
    if(res?.category === "USER_HYDRATION" && res.userHydrationId) {
      await prisma.userHydration.delete({
        where: {
          id: res.userHydrationId
        }
      })
    }

    return NextResponse.json({ success: true, data: res }, { status: 200 });
  }

  return NextResponse.json({ success: false }, { status: 400 });
}

export async function PUT(request: NextRequest) {
  const session = await auth();
  const { searchParams } = new URL(request.url);
  // const category = searchParams.get("category");
  const activityId = searchParams.get("activityId");
  const body = await request.json();

  if (!activityId) {
    return NextResponse.json({
      success: false,
      status: 400,
      message: "Activity ID is required",
    });
  }

  try {
    const findActivity = await prisma.userActivites.findFirst({
      where: {
        id: activityId as string,
        userId: session?.user?.id as string,
      },
    });
    if (!findActivity) {
      return NextResponse.json({
        success: false,
        status: 404,
        message: "Activity not found",
      });
    }

    // let res;

    switch (findActivity.category) {
      case "SLEEP_TRACKER":
        const duration = parseFloat(String(body?.duration));

        await prisma.sleepTracker.update({
          where: {
            id: findActivity?.sleepTrackerId as string,
          },
          data: {
            duration: duration,
          },
        });
        break;

      case "FOOD_LOG":
        await prisma.foodLog.update({
          where: {
            id: findActivity?.foodLogId as string,
          },
          data: {
            foodName: body?.foodName,
            calories: parseFloat(body?.calories),
            mealType: body?.mealType,
          },
        });
        break;

      // case "PHYSICAL_ACTIVITY":
      //   const caloriesBurned = parseFloat(String(body?.calories_per_hour / 60)) * parseInt(String(body?.duration));
      //   await prisma.physicalActivityLog.update({
      //     where: {
      //       id: findActivity?.physicalActivityLogId as string
      //     },
      //     data: {
      //       duration: parseInt(String(body?.duration)),
      //       activityName: body?.activityName as string,
      //       metValue: parseFloat(String(body?.calories_per_hour / 60)),
      //       caloriesBurned: caloriesBurned
      //     }
      //   })
      //   break;
      case "USER_HYDRATION":
        await prisma.userHydration.update({
          where: {
            id: findActivity?.userHydrationId as string,
          },
          data: {
            waterIntake: body?.waterIntake as string,
          },
        });
        break;
      // case "STEP_TRACKER":
      //   await prisma.stepTracker.update({
      //     where: {
      //       id: findActivity?.stepTrackerId as string
      //     },
      //     data: {
      //       stepCount: parseInt(String(body?.stepCount)),
      //       distance: parseFloat(body?.distance),
      //       caloriesBurned: parseFloat(body?.caloriesBurned)
      //     }
      //   })
      //   break;
      default:
        return NextResponse.json({
          success: false,
          status: 400,
          message: "Invalid category",
        });
    }

    return NextResponse.json({
      success: true,
      status: 201,
      message: "Sleep Tracker updated successfully",
    });
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      return NextResponse.json({
        success: false,
        status: 500,
        message: err.message,
      });
    }
  }
}
