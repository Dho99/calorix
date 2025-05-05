import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../../auth";
import type { ACTIVITY_TYPE } from "@/app/utils/lib/types/user";

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
        physicalActivityLog: true,
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
            mode: "insensitive",
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
          physicalActivityLog: true,
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
      let day = new Date();
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
          physicalActivityLog: true,
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
            physicalActivityLog: true,
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

  if (reqType === "create") {
    const body = await request.json();
    const data = JSON.parse(body.data);
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
      const caloriesBurned =
        parseFloat(String(data?.calories_per_hour / 60)) *
        parseInt(String(data?.duration));

      const physicalActivityLog = await prisma.physicalActivityLog.create({
        data: {
          userId: session?.user?.id as string,
          duration: parseInt(String(data?.duration)),
          activityName: data?.activityName as string,
          metValue: parseFloat(String(data?.calories_per_hour / 60)),
          caloriesBurned: caloriesBurned,
        },
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
  const session = await auth();

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

    return NextResponse.json({ success: true, data: res }, { status: 200 });
  }

  return NextResponse.json({ success: false }, { status: 400 });
}
