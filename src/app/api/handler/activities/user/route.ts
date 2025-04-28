import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../../auth";
import type { ACTIVITY_TYPE } from "@/app/utils/lib/types/user";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const reqType = searchParams.get("type");
  const session = await auth();
  
  if (reqType === "getAllUserActivities") {
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 12;

    const res = await prisma.userActivites.findMany({
      skip: (page - 1),
      take: limit,
      where: {
        userId: session?.user?.id,
      },
      include: {
        user: true,
        foodLog: true,
        userHydration: true,
        sleepTracker: true,
        physicalActivityLog: true,
      },
      orderBy: {
        createdAt: "desc",
      }
    });

    return NextResponse.json({ success: true, data: res.length > 0 ? res : null }, { status: 200 });
  }

  return NextResponse.json({ success: true, data: null }, { status: 200 });
}


export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const reqType = searchParams.get("type");
  const session = await auth();

  if (reqType === "create") {
    const body = await request.json();
    const data = JSON.parse(body.data);
    const category = searchParams.get("category");

    let childData;

    if (category === "SLEEP_TRACKER") {

      const sleepTracker = await prisma.sleepTracker.create({
        data: {
          userId: session?.user?.id as string,
          duration: parseFloat(data.duration),
        }
      });

      childData = {
        sleepTrackerId: sleepTracker.id,
      }

    } else if (category === "FOOD_LOG") {
      const foodLog = await prisma.foodLog.create({
        data: {
          userId: session?.user?.id as string,
          foodName: data.foodName,
          calories: parseFloat(data.calories),
          mealType: data.mealType,
        }
      });

      childData = {
        foodLogId: foodLog.id,
      }

    }

    const res = await prisma.userActivites.create({
      data: {
        userId: session?.user?.id as string,
        category: category as ACTIVITY_TYPE,
        ...childData,
      },
    });
    return NextResponse.json({ success: true, data: res }, { status: 201 });
    
  }

  return NextResponse.json({ success: false }, { status: 400 });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const reqType = searchParams.get("type");
  const session = await auth();

  if (reqType === "delete") {
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const res = await prisma.userActivites.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ success: true, data: res }, { status: 200 });
  }

  return NextResponse.json({ success: false }, { status: 400 });
}