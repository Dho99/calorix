import { prisma } from "@/app/utils/lib/prisma/prisma";
import { NextResponse} from "next/server";
import { auth } from "../auth";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({
      success: false,
      message: "Unauthorized",
      status: 401,
    });
  }

  const start = new Date(new Date().setHours(0, 0, 0, 0)).toISOString();
  const end = new Date().toISOString();
  const monthAgo = new Date();
  monthAgo.setMonth(monthAgo.getMonth() - 1);
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  if (!start || !end) {
    return NextResponse.json({
      success: false,
      message: "Start and end dates are required",
      status: 400,
    });
  }

  try {
    const userId = session.user.id;

    // Fetch all required data in parallel

    const startOfMonth = new Date(new Date(new Date().setDate(1)).setHours(0,0,0,0)).toISOString();

    const [
      caloriesBurnedData,
      stepsGoal,
      stepsData,
      tdeeData,
      hydrationNeeds,
      sleepTracker,
      foodLog,
      userCharacteristics,
      activitiesData
    ] = await Promise.all([
      prisma.physicalActivityLog.aggregate({
        _sum: { caloriesBurned: true },
        where: {
          userId,
          createdAt: {
            gte: start,
          },
        },
      }),
      prisma.userGoal.findFirst({
        where: { userId },
        select: {
          stepNeeds: true,
          hydrationNeeds: true,
          goal: true,
          deficitPerDay: true,
          targetTime: true,
          targetWeight: true,
          maxDailyCalories: true,
        },
      }),
      prisma.physicalActivityLog.aggregate({
        _sum: { stepsCount: true },
        where: { userId },
      }),
      prisma.userCharacteristics.findFirst({
        where: { userId },
        select: { tdee: true, sleepHours: true },
      }),
      prisma.userHydration.findMany({
        select: { waterIntake: true },
        where: {
          userId,
          createdAt: {
            gte: start
          },
        },
      }),
      prisma.sleepTracker.aggregate({
        _sum: { duration: true },
        where: {
          userId,
          createdAt: {
            gte: start
          }
        },
      }),
      prisma.foodLog.aggregate({
        _sum: { calories: true },
        where: {
          userId,
          createdAt: {
            gte: start,
          },
        },
      }),
      prisma.userCharacteristics.findFirst({
        where: { userId, isDeleted: false },
        omit: {
            userId: true,
        }
      }),
      prisma.physicalActivityLog.findMany({
        where: {
          userId,
          createdAt: {
            gte: weekAgo.toISOString(),
          },
        },
      }),
    ]);

    const caloriesBurnedByMonth = await prisma.physicalActivityLog.aggregate({
      _sum: { caloriesBurned: true },
      where: {
        userId: session?.user?.id,
        createdAt: {
          gte: startOfMonth
        }
      }
    });

    const stepsCountByMonth = await prisma.physicalActivityLog.findMany({
      where: {
        userId: session?.user?.id,
        createdAt: {
          gte: startOfMonth
        }
      },
      select: {
        stepsCount: true,
        createdAt: true
      }
    });
    

    const sumHydration = hydrationNeeds.reduce(
      (acc: number, curr: {waterIntake: string}) => acc + parseFloat(curr.waterIntake),
      0
    );
    const calculateWeightDiffPercent = () => {
      const current = parseFloat(String(userCharacteristics?.currentWeight));
      const registered = parseFloat(String(userCharacteristics?.registeredWeight));
    
      if (!current || !registered) return 0;
  
    
      if (stepsGoal?.goal === "deficit") {
        // progress positif jika berat badan menurun
        return ((registered - current) / registered) * 100;
      } else if (stepsGoal?.goal === "surplus") {
        // progress positif jika berat badan meningkat
        return ((current - registered) / registered) * 100;
      } else {
        // goal maintain → progress berdasarkan seberapa dekat dengan target
        const diff = Math.abs(current - registered);
        return (diff / registered) * 100;
      }
    };

    let totalActivityTime = 0

    const groupedActivitiesByWeek = Object.entries(
      activitiesData.reduce((acc: Record<string, number>, activity) => {
        const activityDate = new Date(activity.createdAt);
        const startOfMonth = new Date(activityDate.getFullYear(), activityDate.getMonth(), 1);
        const weekNumber = Math.ceil((activityDate.getDate() + startOfMonth.getDay()) / 7);
        const key = `Week ${weekNumber}`;
        if (!acc[key]) {
          acc[key] = 0;
        }
        acc[key] += activity.caloriesBurned;
        totalActivityTime += activity.duration;
        return acc;
      }, {})
    ).map(([date, data]) => ({ date, data }));

    const groupedStepsByMonth = Object.entries(
      stepsCountByMonth.reduce((acc: Record<string, number>, curr) => {
      const activityDate = new Date(curr.createdAt);
      const startOfMonth = new Date(activityDate.getFullYear(), activityDate.getMonth(), 1);
      const weekNumber = `Week ${Math.ceil((activityDate.getDate() + startOfMonth.getDay()) / 7)}`;
      if (!acc[weekNumber]) {
        acc[weekNumber] = 0;
      }
      acc[weekNumber] += parseFloat(String(curr.stepsCount));
      return acc;
      }, {})

    ).map(([date, data]) => ({ date, data }));

    const getUserCtdAt = await prisma?.user?.findFirst({
      where: {
        id: session?.user?.id,
      },
      select: {
        createdAt: true,
      },
    });

    const calculateDaysSinceCreated = (createdAt: Date): number => {
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - createdAt.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    const cntUsrCtdAt = calculateDaysSinceCreated(new Date(getUserCtdAt?.createdAt as Date));

    const sumSleepDur = sleepTracker?._sum.duration && (parseFloat(String(sleepTracker._sum.duration)) / 60).toFixed(2) || 0;

    const responseData = {
      caloriesBurned: caloriesBurnedData._sum.caloriesBurned && caloriesBurnedData._sum.caloriesBurned || 0,
      stepsGoal: stepsGoal?.stepNeeds || 0,
      stepsCount: parseFloat(String(stepsData._sum.stepsCount)).toFixed(2) || 0,
      tdee: tdeeData?.tdee || 0,
      hydrationNeeds: sumHydration,
      sleepTracker: sumSleepDur,
      caloriesConsumed: Number(foodLog._sum.calories) || 0,
      goal: stepsGoal,
      userCharacteristics: userCharacteristics,
      activityData: activitiesData,
      caloriesBurnedByMonth: caloriesBurnedByMonth._sum.caloriesBurned || 0,
      weightDiffPercent: calculateWeightDiffPercent(),
      groupedActivities: groupedActivitiesByWeek,
      groupedSteps: groupedStepsByMonth,
      totalActivityTime: totalActivityTime / activitiesData.length || 0,
      avgSleep: Number(sumSleepDur) / cntUsrCtdAt || 0,
      avgHydration: (sumHydration / cntUsrCtdAt) / 1000 || 0,
      avgCaloriesEaten: Number(foodLog._sum.calories) / cntUsrCtdAt || 0,
    };

    return NextResponse.json({
      success: true,
      data: responseData,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json({
        success: false,
        message: error.message,
        status: 500,
      });
    }
  }
}
