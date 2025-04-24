import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../../auth";
import type { FoodLog } from "@/app/utils/lib/types/user";

export async function GET(request: NextRequest) {
  const session = await auth();
  const {searchParams} = new URL(request.url);  

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


  const res = await prisma.userActivites.findMany({
    where: {
      userId: session?.user?.id,
    },
  });

  if (!res) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: res }, { status: 200 });
}
