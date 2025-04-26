import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../../auth";

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
    });

    return NextResponse.json({ success: true, data: res.length > 0 ? res : null }, { status: 200 });
  }

  return NextResponse.json({ success: true, data: null }, { status: 200 });
}
