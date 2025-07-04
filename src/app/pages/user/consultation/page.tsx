"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Markdown from "react-markdown";
import { BotIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type ChatProps = {
  id: number;
  userQuery: string | null;
  response: string | null;
};

export default function Page() {
  const {data: session} = useSession();
  const [loadingConv, setLoadingConv] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [chatState, setChatState] = useState<ChatProps[]>([
    {
      id: 1,
      response: `Hello, how can I assist you today?`,
      userQuery: "",
    },
  ]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState]);

  const sendQuestion = (userQuery: string) => {
    if (!userQuery) return;
    const id = chatState.length + 1;
    setLoadingConv(true);
    setChatState((prev) => [
      ...prev,
      {
        id: id,
        userQuery: userQuery,
        response: null
        
      },
    ]);
    axios
      .post("/api/handler/consultation", {
        userQuery: userQuery,
      })
      .then((getRes) => {
        setChatState((prev) => [
          ...prev,
          {
            id: id,
            userQuery: null,
            response: getRes.data?.message,
            setLoadingConv: false,
          },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching response:", error);
      });
  };

  const initFetchChats = async () => {
    axios
      .get("/api/handler/consultation")
      .then((getRes) => {
        if (getRes.data?.success) {
          const chats = getRes.data?.message;
          setChatState(() => [
            {
              id: 1,
              response: `Hello, ${session?.user?.name} how can I assist you today?`,
              userQuery: "",
            },
            ...chats.map((chat: any, key: number) => ({ //eslint-disable-line
              id: chatState.length + key + 1,
              userQuery: chat.sender === "USER" ? chat.payload : null,
              response: chat.sender !== "USER" ? chat.payload : null,
            })),
          ]);
        }
      })
      .catch((error) => {
        console.error("Error fetching chats:", error);
      });
  };

  useEffect(() => {
    initFetchChats();
  }, [session]); //eslint-disable-line

  return (
    <div className="h-dvh overflow-auto w-full relative ">
      {session?.user ? (
        <div className="absolute bottom-0 left-0 w-full dark:text-white h-full">
          <div className="w-full flex flex-col gap-y-2 mb-7 h-full overflow-auto pt-15 pb-5 lg:px-30 md:px-15 px-5 relative">

            <div className="flex w-full py-2 my-5 bg-black/20 dark:bg-white/10 gap-x-4 items-center justify-center shadow-lg">
              <div className=" w-full flex lg:flex-row md:flex-row flex-col justify-center items-center gap-x-4">
                <BotIcon className="dark:text-white w-8 h-8" />
                <h1 className="text-xl font-semibold dark:text-white text-center">
                  Anda sedang Berkonsultasi dengan AI
                </h1>
              </div>
            </div>

            {chatState.map((chat, index) => {
              return (
                <div key={index} className="flex flex-col gap-y-2">
                  {chat.userQuery && (
                    <div className="text-gray-700 bg-gray-100 p-3 max-w-[60%] w-fit shadow-lg rounded-md ms-auto">
                      {chat.userQuery}
                    </div>
                  )}
                  {loadingConv && chat.id === chatState.length && (
                    <div className="text-gray-700 bg-gray-100 p-3 max-w-[60%] w-fit shadow-lg rounded-md">
                      <Skeleton className="h-4 w-40 bg-gray-300 rounded-md" />
                    </div>
                  )}
                  {chat.response && chat.id !== chatState.length && (
                    <div className="text-gray-700 bg-green-200/70 p-3 max-w-[60%] w-fit shadow-lg rounded-md">
                      <Markdown>{chat.response}</Markdown>
                    </div>
                  )}
                </div>
              );
            })}
            <div ref={chatEndRef} />

            <div className="flex lg:flex-row md:flex-row flex-col gap-1 mt-4 sticky bottom-0 bg-black/50 backdrop-blur-md p-3 rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="border border-gray-300 p-2 px-4 rounded-lg w-full bg-[#D9D9D9] text-black"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const userQuery = (e.target as HTMLInputElement).value;
                    sendQuestion(userQuery);
                    (e.target as HTMLInputElement).value = "";
                  }
                }}
              />
              <button
                className="bg-blue-400 text-white p-2 px-6 rounded-lg"
                onClick={() => {
                  const input = document.querySelector(
                    "input[type='text']"
                  ) as HTMLInputElement;
                  const userQuery = input.value;
                  sendQuestion(userQuery);
                  input.value = "";
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-700">
          You must signin to use this feature. Please sign in.
        </p>
      )}
    </div>
  );
}
