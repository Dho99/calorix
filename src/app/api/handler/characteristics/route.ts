import { NextRequest, NextResponse } from "next/server";
import { characteristicsSchema } from "@/app/utils/lib/validation/characteristics";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../auth";


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
      manualCalorieAdjustment,
      bmi,
      tdee,
      bmr,
      bodyFatPercentage,
      userId,
      goal,
      sleepHours,
      deficitPerDay,
      targetTime,
      targetWeight,
      hydrationNeeds,
      workoutsPerWeek,
      totalDeficit,
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
