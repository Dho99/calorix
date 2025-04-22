import { NextRequest, NextResponse } from "next/server";
import { characteristicsSchema } from "@/app/utils/lib/validation/characteristics";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../auth";

export async function POST(
    request: NextRequest
  ) {
    const { data } = await request.json();
    const session = await auth();
    
    console.log(data);
    const payload = {
      ...data,
      userId: session?.user?.id as string,
    }
  
    try {
      const { success, error } = characteristicsSchema.safeParse(data);
      if (!success && error) {
        console.log("error", error);
          // return NextResponse.json(
          //   {
          //     status: 400,
          //     success: false,
          //     message: error.issues.map((issue) => issue.message).join(", "),
          //   },
          // );
      }


  
      await prisma.userCharacteristics.create({
          data: payload
      });

      console.log("created");
  
      // return NextResponse.json(
      //   {
      //     status: 200,
      //     success: true,
      //     message: "Data tersimpan dengan sukses",
      //   }
      // );
    } catch (err) {
      console.log(err);
      // if (err instanceof Error) {
      //   return NextResponse.json(
      //     {
      //       message: err.message,
      //     },
      //     {
      //       status: 500,
      //     }
      //   );
      // }
    }
  }
  