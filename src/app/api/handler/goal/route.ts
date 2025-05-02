import { NextRequest, NextResponse } from "next/server";
import { auth } from "../auth";
import { prisma } from "@/app/utils/lib/prisma/prisma";

export async function GET(request: NextRequest, response: NextResponse) {
    try{
        const session = await auth();

        const goal = await prisma.userGoal.findFirst({
            where: {
                userId: session?.user?.id
            },
            select: {
                goal: true,
                deficitPerDay: true,
                targetTime: true,
                hydrationNeeds: true,
                targetWeight: true,
                stepNeeds: true,
            }
        });

        if(!goal){
            return NextResponse.json({
                status: 404,
                message: "Goal not found",
                success: false
            })
        }

        return NextResponse.json({
            status: 200,
            message: "Goal found",
            success: true,
            data: goal
        })

    }catch(err){
        if(err instanceof Error){
            return NextResponse.json({
                status: 500,
                message: err.message,
                success: false
            })
        }
    }
}