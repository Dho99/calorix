import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "@/app/api/handler/auth";


export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url);  
  const session = await auth();

  const methodType = searchParams.get("methodType");

  if(methodType === "getCaloriesConsumed"){
    const start = searchParams.get("start");
    const end = searchParams.get("end");

  
    const res = await prisma.foodLog.aggregate({
      _sum: {
        calories: true,
      },
      where: {
        userId: session?.user?.id as string,
        createdAt: {
          gte: new Date(start as string),
          lte: new Date(end as string),
        },
      },
    });

    const sumCaloriesConsumed = res._sum.calories || 0;

    return NextResponse.json(
      { success: true, data: sumCaloriesConsumed },
      { status: 200 }
    );

  }


}