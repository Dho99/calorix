import { prisma } from "@/app/utils/lib/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const { email } = params;

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  const userCharacteristics = await prisma.userCharacteristics.findMany({
    where: {
      userId: user?.id,
    },
    omit: {
      userId: true,
    },
    orderBy: {
      createdAt: "desc",
    }
  });

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "User not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "User found",
      user: user,
      characteristics: userCharacteristics,
    },
    {
      status: 200,
    }
  );
}

