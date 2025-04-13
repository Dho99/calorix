import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { prisma } from "@/app/utils/lib/prisma/prisma";
import { auth } from "../auth";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const { user } = session;

  try{
    const loadChats = await prisma.chatbot.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: loadChats,
      },
      {
        status: 200,
      }
    );



  }catch(err){
    console.log(err)
    if(err instanceof Error){
      return NextResponse.json(
        {
          success: false,
          message: err.message
        },
        {
          status: 500
        }
      )
    }
  }

}

export async function POST(request: NextRequest){
  const body = await request.json();
  const {userQuery} = body;
  const session = await auth();

  try{
    const aires = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Anda adalah seorang ahli gizi yang sangat berpengalaman. Anda akan menjawab pertanyaan dari pengguna tentang kesehatan dan gizi. Pertanyaan: ${userQuery}`,
    });

    await prisma.chatbot.createMany({
      data: [
        {
          userId: session?.user?.id as string,
          sender: "USER",
          payload: userQuery
        },
        {
          userId: session?.user?.id as string,
          sender: "BOT",
          payload: aires.text
        }
      ]
    });

    return NextResponse.json(
        {
            success: true,
            message: aires.text
        },
        {
            status: 200
        }
    )
  }catch(err){
    if(err instanceof Error){
        return NextResponse.json(
            {
                success: false,
                message: err.message
            },
            {
                status: 500
            }
        )
    }
  }
}
