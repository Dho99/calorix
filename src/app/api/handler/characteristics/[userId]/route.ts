import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../../auth";
import { characteristicsSchema } from "@/app/utils/lib/validation/characteristics";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;
  const session = await auth();

  if (session?.user?.id !== userId) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: "You cannot access this data",
    });
  }

  try {
    const characteristics = await prisma.userCharacteristics.findFirst({
      where: {
        userId: userId as string,
        isDeleted: false,
      },
      select: {
        currentWeight: true,
        height: true,
        bmi: true,
        bodyFatPercentage: true,
        registeredWeight: true,
      },
    });

    const goal = await prisma.userGoal.findFirst({
      where: {
        userId: userId as string,
      },
      select: {
        targetWeight: true,
      },
    });

    const data = {
      ...characteristics,
      ...goal,
    };

    if (!characteristics) {
      return NextResponse.json({
        status: 404,
        success: false,
        message: "User characteristics not found",
      });
    }

    return NextResponse.json({
      status: 200,
      success: true,
      data: data,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const body = await request.json();
  const session = await auth();
  const { userId } = await params;

  if (session?.user?.id !== userId) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: "You cannot access this data",
    });
  }

  try {
    const { success, error } = characteristicsSchema.safeParse(body);

    if (!success && error) {
      return NextResponse.json({
        status: 400,
        success: false,
        message: error.issues.map((issue) => issue.message).join(", "),
      });
    }

    await prisma.userCharacteristics.updateMany({
      where: {
        userId: session?.user?.id as string,
      },
      data: body,
    });

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
