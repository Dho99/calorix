import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth";
import { prisma } from "@/app/utils/lib/prisma/prisma";

export async function GET(request: NextRequest) {
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
}                           