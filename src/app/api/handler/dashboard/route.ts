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
        },
      }),
      prisma.userActivites.aggregate({
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
            userId: true
        }
      }),
      prisma.physicalActivityLog.findMany({
        where: {
          userId,
          createdAt: {
            gte: monthAgo.toISOString(),
          },
        },
        select: {
            duration: true
        }
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


    // Calculate hydration sum
    const sumHydration = hydrationNeeds.reduce(
      (acc: number, curr: {waterIntake: string}) => acc + parseFloat(curr.waterIntake),
      0
    );
    // Calculate sleep time
    

    // Prepare response data
    const responseData = {
      caloriesBurned: caloriesBurnedData._sum.caloriesBurned && caloriesBurnedData._sum.caloriesBurned || 0,
      stepsGoal: stepsGoal?.stepNeeds || 0,
      stepsCount: stepsData._sum.stepsCount || 0,
      tdee: tdeeData?.tdee || 0,
      hydrationNeeds: sumHydration,
      sleepTracker: sleepTracker?._sum.duration && (parseFloat(String(sleepTracker._sum.duration)) / 60).toFixed(2) || 0,
      caloriesConsumed: foodLog._sum.calories || 0,
      goal: stepsGoal,
      userCharacteristics: userCharacteristics,
      activitiesData: activitiesData,
      caloriesBurnedByMonth: caloriesBurnedByMonth._sum.caloriesBurned || 0
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
