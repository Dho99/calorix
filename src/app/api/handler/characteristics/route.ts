import { NextRequest, NextResponse } from "next/server";
import { characteristicsSchema } from "@/app/utils/lib/validation/characteristics";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../auth";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const session = await auth();
  const userId = session?.user?.id;
  const methodType = searchParams.get("methodType");

  if(methodType === "getUserTDEE") {
    const tdee = await prisma.userCharacteristics.findFirst({
      where: {
        userId: userId as string,
      },
      select: {
        tdee: true,
      }
    });

    if (!tdee) {
      return NextResponse.json({
        status: 404,
        success: false,
        message: "User characteristics not found",
      });
    }

    return NextResponse.json({
      status: 200,
      success: true,
      data: tdee?.tdee,
    });
  }

}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const session = await auth();

  const payload = {
    ...data,
    userId: session?.user?.id as string,
  };

  try {
    const { success, error } = characteristicsSchema.safeParse(data);
    if (!success && error) {
      console.log("error", error);
      return NextResponse.json({
        status: 400,
        success: false,
        message: error.issues.map((issue) => issue.message).join(", "),
      });
    }

    const {
      gender,
      age,
      height,
      currentWeight,
      activityFactor,
      mealsPerDay,
      sleepHours,
      manualCalorieAdjustment,
      bmi,
      tdee,
      bmr,
      bodyFatPercentage,
      userId,
      goal,
      deficitPerDay,
      targetTime,
      targetWeight,
      hydrationNeeds,
      workoutsPerWeek,
      totalDeficit,
      maxDailyCalories,
      stepNeeds
    } = payload;

    await prisma.$transaction([
      prisma.userCharacteristics.create({
        data: {
          gender: gender,
          age: age,
          height: height,
          currentWeight: currentWeight,
          activityFactor: activityFactor,
          mealsPerDay: mealsPerDay,
          sleepHours: sleepHours,
          workoutsPerWeek: workoutsPerWeek,
          manualCalorieAdjustment: manualCalorieAdjustment,
          bmi: bmi,
          tdee: tdee,
          bmr: bmr,
          bodyFatPercentage: bodyFatPercentage,
          userId: userId,
        },
      }),
      prisma.userGoal.create({
        data: {
          userId: userId,
          goal: goal,
          deficitPerDay: deficitPerDay,
          targetTime: targetTime,
          targetWeight: targetWeight,
          hydrationNeeds: hydrationNeeds,
          totalDeficit: totalDeficit,
          maxDailyCalories: maxDailyCalories,
          stepNeeds: stepNeeds,
        },
      }),
      
    ]);

    console.log("created");

    return NextResponse.json({
      status: 200,
      success: true,
      message: "Data tersimpan dengan sukses",
    });
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      return NextResponse.json(
        {
          message: err.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
