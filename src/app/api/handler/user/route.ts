"use server"

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/app/utils/lib/prisma";

export async function POST(request: NextRequest) {

    const body = await request.json();

    console.log(body);

  return NextResponse.json({
    status: 200,
    success: true,
    message: "nigga",
  });
}
