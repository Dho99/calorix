"use client";

import { CircleX,BotMessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-0 bottom-0 m-5 shadow-lg rounded-lg">
      {isOpen ? (
        <ChatBoxDialog toggleChat={toggleChat} />
      ) : (
        <button
          className="bg-blue-400 rounded-lg shadow-lg p-3 text-white font-bold flex flex-row items-center gap-x-2"
          onClick={toggleChat}
        >
          <div>Calorix Assist</div>
          <div>
            <BotMessageSquare className="w-5 h-5" />
          </div>
        </button>
      )}
    </div>
  );
}

export function ChatBoxDialog({ toggleChat }: { toggleChat: () => void }) {
  const session = useSession();

  const [chatState, setChatState] = useState([
    {
      id: 1,
      response: `Hello ${session?.data?.user?.name}, how can I assist you today?`,
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
          setChatState((prev) => [
            ...prev,
            ...chats.map((chat: any, key: number) => ({ //eslint-disable-line
              id: key + 1,
              response: chat.response,
              userQuery: chat.userQuery,
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
  }, []);

  return (
    <div className="min-h-24 h-full w-[40vw] ">
      <div className="bg-white rounded-lg">
        <div className="flex items-center justify-between bg-blue-400 p-3 rounded-t-lg">
          <h2 className="text-lg font-bold text-white">Calorix Assist</h2>
          <button
            className="text-white hover:text-gray-700 hover:bg-blue-200 transition-all transition-duration-400 p-2 rounded-full"
            onClick={toggleChat}
          >
            <CircleX className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 rounded-lg">
          {session?.data?.user ? (
            <div>
              <div className="w-full flex flex-col gap-y-2 mb-7 max-h-[60vh] overflow-y-auto">
                {chatState.map((chat, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-y-2">
                      {chat.userQuery !== "" && (
                        <div className="text-gray-700 bg-gray-100 p-3 max-w-[49%] w-full shadow-lg rounded-md ms-auto">
                          {chat.userQuery}
                        </div>
                      )}
                      <div className="text-gray-700 bg-blue-100 p-3 max-w-[49%] w-full shadow-lg rounded-md">
                        {chat.response}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row gap-x-2 mt-4">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const userQuery = (e.target as HTMLInputElement).value;
                      sendQuestion(userQuery);
                      (e.target as HTMLInputElement).value = "";
                    }
                  }}
                />
                <button
                  className="bg-blue-400 text-white p-2 rounded-lg"
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
          ) : (
            <p className="text-gray-700">
              You must signin to use this feature. Please sign in.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
