import { NextResponse } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../../auth";

export async function GET() {
  
  try{
    const session = await auth();

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
