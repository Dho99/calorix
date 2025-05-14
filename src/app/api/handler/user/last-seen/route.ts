import { NextResponse } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../../auth";

export async function POST() {
    const session = await auth();

    const showInfo = {
        show: false,
        msgInfo: "",
    }

    try {
        const findLastSeen = await prisma.physicalActivityLog.findFirst({
            where: {
                userId: session?.user?.id,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        
        const calculateDifferentDays = Math.floor((new Date().getTime() - new Date(findLastSeen?.createdAt as Date).getTime()) / (1000 * 60 * 60 * 24));

        if (calculateDifferentDays > 0 && findLastSeen?.createdAt) {
            const getUserGoal = await prisma.userGoal.findUnique({
                where: {
                    userId: session?.user?.id,
                },
                select: {
                    targetTime: true,
                }
            });

            await prisma.userGoal.update({
                where: {
                    userId: session?.user?.id,
                },
                data: {
                    targetTime: (getUserGoal?.targetTime ? getUserGoal?.targetTime + calculateDifferentDays : calculateDifferentDays).toString(),
                },
            });

            showInfo.show = true;
            showInfo.msgInfo = `You have been away for ${calculateDifferentDays} days. Your target time has been updated.`;

        }

        const yesterdayStart = new Date(new Date().setDate(new Date().getDate() - 1));
        yesterdayStart.setHours(0, 0, 0, 0);

        const yesterdayEnd = new Date(new Date().setDate(new Date().getDate() - 1));
        yesterdayEnd.setHours(23, 59, 59, 999);

        const getUserGoal = await prisma.userGoal.findUnique({
            where: {
                userId: session?.user?.id,
            },
            select: {
                targetTime: true,
                deficitPerDay: true,
            }
        });

        const getAggregateYesterday = await prisma.physicalActivityLog.aggregate({
            where: {
                userId: session?.user?.id,
                createdAt: {
                    gte: yesterdayStart,
                    lt: yesterdayEnd,
                },
            },
            _sum: {
                caloriesBurned: true,
            },
        });

        if (getAggregateYesterday._sum.caloriesBurned) {
            const caloriesBurnedYesterday = Number(getAggregateYesterday._sum.caloriesBurned);
            const targetPerDay = Number(getUserGoal?.deficitPerDay);
            const targetTime = Number(getUserGoal?.targetTime);
            
            const selisih = caloriesBurnedYesterday - targetPerDay;
            const adjustmentPerDay = selisih / (targetTime * 30);
            const newTargetPerDay = targetPerDay - adjustmentPerDay;

            await prisma.userGoal.update({
                where: {
                    userId: session?.user?.id,
                },
                data: {
                    deficitPerDay: newTargetPerDay.toString(),
                },
            });
        }
        
                



       return NextResponse.json({
            success: true,
            ...showInfo,
            message: "Last seen updated successfully",
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Error updating last seen",
            error: error,
        });
    }
}
