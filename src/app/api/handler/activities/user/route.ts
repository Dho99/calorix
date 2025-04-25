import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../../auth";


export async function GET(request: NextRequest) {
  const session = await auth();
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
