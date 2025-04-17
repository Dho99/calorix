"use server";

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { findUser } from "@/app/utils/api/user";
import { hashPassword } from "@/app/utils/hasher";
import { registerSchema } from "@/app/utils/lib/validation/user";
import type { Register } from "@/app/utils/lib/types/user";


export async function POST(request: NextRequest) {
  const body = await request.json();

  const rawUserData = {
    email: body.email,
    name: body.name,
    password: body.password,
    username: body.name.replace(" ", "").toLowerCase(),
  };

  const result = registerSchema.safeParse(rawUserData);

  if(!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: result.error.issues[0].message,
      },
      {
        status: 400,
      }
    );
  }

  const user = await findUser(body.email);
   
  if (user.success)
    return NextResponse.json(
      {
        success: true,
        message: "User found, Login instead",
      },
      {
        status: 200,
      }
    );



  const hashedPassword = await hashPassword(body.password);


  const userData: Register = {
    ...rawUserData,
    password: hashedPassword,
    username: rawUserData.username.replace(" ", "_").toLowerCase(),
  }

  try {
    await prisma.user.create({
      data: userData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({
        status: 500,
        success: false,
        message: err.message,
      });
    }
  }
}

export async function PUT(req: NextRequest){
  const body = await req.json();
  const { ...data } = body;

 
  const result = registerSchema.safeParse(data);

  
  if(!result.success) {
    console.log(result.error.issues);
    return NextResponse.json(
      {
        success: false,
        message: result.error.issues[0].message,
      },
      {
        status: 200,
      }
    );
  }

  data.password = await hashPassword(data.password);

  console.log("data", data);

  try {
    const user = await prisma.user.update({
      where: {
        email: data?.email!,
      },
      data: data,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User updated successfully",
        user: user,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      return NextResponse.json({
        status: 500,
        success: false,
        message: err.message,
      });
    }
  }
  return NextResponse.json(
    {
      success: false,
      message: "User not found",
    },
    {
      status: 404,  
    }
  )
}