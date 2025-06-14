"use server"

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { validatePassword } from "@/app/utils/hasher";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { email, password } = body;

    const findUser = await prisma.user.findFirst({
        where: {
            email: email
        }
    });

    const comparePass = await validatePassword(findUser?.password as string, password);

    if(!comparePass) return NextResponse.json({status: 401, message: "Invalid credentials"});

    if(!findUser) return NextResponse.json({status: 404, message: "User not found"});



  return NextResponse.json({
    status: 200,
    success: true,
    data: findUser
  });
}
