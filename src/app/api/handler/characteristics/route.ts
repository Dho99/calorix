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
      stepNeeds,
      maxDailyCalories
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
          registeredWeight: currentWeight,
        },
      }),
      prisma.userGoal.create({
        data: {
          userId: userId,
          goal: goal,
          deficitPerDay: deficitPerDay,
          targetTime: (targetTime * 30).toString(),
          targetWeight: targetWeight,
          hydrationNeeds: hydrationNeeds.toString(),
          totalDeficit: totalDeficit,
          stepNeeds: stepNeeds,
          maxDailyCalories: maxDailyCalories,
        },
      }),
      
    ]);


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

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const characteristicsId = searchParams.get("characteristicsId");
  const session = await auth();
  try{

    const findCharacteristics = await prisma.userCharacteristics.findUnique({
      where: {
        id: characteristicsId as string,
        userId: session?.user?.id as string,
      },
    });
    if (!findCharacteristics) {
      return NextResponse.json({
        status: 400,
        success: false,
        message: "Data tidak ditemukan",
      });
    }
    await prisma.userCharacteristics.update({
      where: {
        id: characteristicsId as string,
      },
      data: {
        isDeleted: true,
      },
    });

    await prisma.$transaction([
      prisma.userGoal.delete({
        where: {
          userId: session?.user?.id as string,
        }
      }),
      prisma.foodLog.deleteMany({
        where: {
          userId: session?.user?.id as string,
        }
      }),
      prisma.userHydration.deleteMany({
        where: {
          userId: session?.user?.id as string,
        }
      }),
      prisma.physicalActivityLog.deleteMany({
        where: {
          userId: session?.user?.id as string,
        }
      }),
      prisma.sleepTracker.deleteMany({
        where: {
          userId: session?.user?.id as string,
        }
      }),
    ]);

    return NextResponse.json({
      status: 200,
      success: true,
      message: "Data berhasil dihapus",
    });
    
  }catch(err){
    if(err instanceof Error){
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
