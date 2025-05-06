import { NextRequest, NextResponse } from "next/server";
import {auth} from "../auth";
import { prisma } from "@/app/utils/lib/prisma/prisma";


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const session = await auth();

  const methodType = searchParams.get("methodType");

  if(methodType === "getUserHydration") {
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    const res = await prisma.userHydration.findMany({
      select: {
        waterIntake: true,
      },
      where: {
        userId: session?.user?.id as string,
        createdAt: {
          gte: new Date(start as string),
          lte: new Date(end as string),
        },
      },
    });
    

    const sumHydration = res.reduce((acc, curr) => {
      return acc + parseFloat(curr.waterIntake);
    }, 0);

    const hydrationGoal = await prisma.userGoal.findFirst({
      where: {
        userId: session?.user?.id as string,
      },
      select: {
        hydrationNeeds: true,
      },
    });

    return NextResponse.json(
      { success: true, data: sumHydration + parseFloat(String(hydrationGoal?.hydrationNeeds)) },
      { status: 200 }
    );

  }

}
