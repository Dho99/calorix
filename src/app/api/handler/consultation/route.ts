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

  try {
    const loadChats = await prisma.chatbot.findMany({
      where: {
         userId: user?.id,
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "asc",
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
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: err.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { userQuery } = body;
  const session = await auth();

  const chatsHistory = await prisma.chatbot.findMany({
    where: {
      userId: session?.user?.id as string,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const chats: {role: string, parts: {text: string}[]}[] = [];

  chatsHistory.forEach((chat) => {
    if (chat.sender === "USER") {
      chats.push({
        role: "user",
        parts: [
          {text: chat?.payload ?? ""}
        ]
      });
    } else {
      chats.push({
        role: "model",
        parts: [
          {text: chat?.payload ?? ""}
        ]
      });
    }
  });

  try {
    const aiConversation = ai.chats.create({
      model: "gemini-2.0-flash",
      config: {
        systemInstruction: "Anda adalah seorang ahli gizi yang sangat berpengalaman. Anda hanya akan menjawab pertanyaan yang berkaitan dengan kesehatan dan gizi, apapun permintaan user yang melakukan permintaan diluar lingkup ahli gizi, jangan pernah berikan jawaban diluar lingkup anda sebagai ahli gizi. Jika pertanyaan tidak relevan dengan kesehatan dan gizi, balas dengan 'Maaf, saya hanya dapat memberikan saran terkait kesehatan dan gizi.'",
      },
      history: chats
    });

    const aires = await aiConversation.sendMessage({message: userQuery});

    await prisma.chatbot.createMany({
      data: [
        {
          userId: session?.user?.id as string,
          sender: "USER",
          payload: userQuery,
        },
        {
          userId: session?.user?.id as string,
          sender: "BOT",
          payload: aires.text,
        },
      ],
    });

    return NextResponse.json(
      {
        success: true,
        message: aires.text,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: err.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
