"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Markdown from "react-markdown";
import { BotIcon } from "lucide-react";

type ChatProps = {
  id: number;
  userQuery: string | null;
  response: string | null;
};

export default function Page() {
  const session = useSession();

  const [chatState, setChatState] = useState<ChatProps[]>([
    {
      id: 1,
      response: `Hello, how can I assist you today?`,
      userQuery: "",
    },
  ]);

  const sendQuestion = (userQuery: string) => {
    const id = chatState.length + 1;
    axios
      .post("/api/handler/consultation", {
        userQuery: userQuery,
      })
      .then((getRes) => {
        setChatState((prev) => [
          ...prev,
          {
            id: id,
            response: getRes.data?.message,
            userQuery: userQuery,
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
              response: `Hello, ${session?.data?.user?.name} how can I assist you today?`,
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
  }, []); //eslint-disable-line

  return (
    <div className="h-dvh w-full relative w-full relative ">
      {session?.data?.user ? (
        <div className="absolute bottom-0 left-0 pb-5 w-full text-white h-full">
          <div className="w-full flex flex-col gap-y-2 mb-7 h-full overflow-auto pt-15 pb-5 px-30">

            <div className="flex w-full py-2 my-5 bg-white/10 gap-x-4 items-center justify-center shaodow-lg">
              <div className="max-w-3/4 flex flex-row justify-start items-center gap-x-4">
                <BotIcon className="text-white w-8 h-8" />
                <h1 className="text-xl font-semibold text-white">
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
                  {chat.response && (
                    <div className="text-gray-700 bg-blue-100 p-3 max-w-[60%] w-fit shadow-lg rounded-md">
                      <Markdown>{chat.response}</Markdown>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex flex-row gap-x-1 mt-4">
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
