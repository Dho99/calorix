import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../auth";

// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url);
//   const session = await auth();

//   const methodType = searchParams.get("methodType");

//   if (methodType === "getUserSleepTime") {
//     const start = searchParams.get("start");
//     const end = searchParams.get("end");

//     const res = await prisma.sleepTracker.aggregate({
//     _sum: {
//         duration: true,
//       },
//       where: {
//         userId: session?.user?.id as string,
//         createdAt: {
//           gte: new Date(start as string),
//           lte: new Date(end as string),
//         },
//       },
//     });

//     const getUserSleepTime = await prisma.userCharacteristics.findFirst({
//       where: {
//         userId: session?.user?.id as string,
//       },
//       select: {
//         sleepHours: true,
//       },
//     });

//     const calculatedSleepTime = res._sum.duration || 0 + getUserSleepTime?.sleepHours!;


//     return NextResponse.json(
//       { success: true, data: parseInt(calculatedSleepTime as string)},
//       { status: 200 }
//     );
//   }
// }