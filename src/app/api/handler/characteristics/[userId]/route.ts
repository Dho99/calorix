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

  if(session?.user?.id !== userId) {
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
      },
    });
    return NextResponse.json({
      status: 200,
      success: true,
      data: characteristics,
    });
  } catch (error) {
    console.error("Error fetching characteristics:", error);
    return NextResponse.json(
      { error: "Failed to fetch characteristics" },
      { status: 500 }
    );
  }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ userId: string }> }
  ) {
    const { data } = await request.json();
    const session = await auth();
  
    try {
      const { success, error } = characteristicsSchema.safeParse(data);

      if (!success && error) {
          return NextResponse.json(
            {
              status: 400,
              success: false,
              message: error.issues.map((issue) => issue.message).join(", "),
            },
          );
      }
  
      await prisma.userCharacteristics.update({
        where: {
          userId: session?.user?.id!,
        },
        data: {
          ...data,
        }
      });
  
      return NextResponse.json(
        {
          status: 200,
          success: true,
          message: "Data tersimpan dengan sukses",
        }
      );
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
