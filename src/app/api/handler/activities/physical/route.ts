import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../../auth";

export async function GET(request: NextRequest) {
  const session = await auth();

  const { searchParams } = new URL(request.url);
  const methodType = searchParams.get("methodType");
  try{
    
  if (methodType === "getCaloriesBurned") {
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    const res = await prisma.physicalActivityLog.aggregate({
      _sum: {
        caloriesBurned: true,
      },
      where: {
        userId: session?.user?.id as string,
        createdAt: {
          gte: new Date(start as string),
          lte: new Date(end as string),
        },
      },
    });

    const sumCaloriesBurned = res._sum.caloriesBurned || 0;

    return NextResponse.json(
      { success: true, data: sumCaloriesBurned },
      { status: 200 }
    );
  }


    const physicalActivities = await prisma.physicalActivityLog.findMany({
      where: {
        userId: session?.user?.id,
      },
    });
    if (!physicalActivities) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, data: physicalActivities },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching data" },
      { status: 500 }
    );
  }
  
}
