"use client";

import { useState } from "react";
import { PanelTopClose, CircleX } from "lucide-react";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute right-0 bottom-0 m-5 shadow-lg rounded-lg">
      {isOpen ? (
        <ChatBoxDialog toggleChat={toggleChat} />
      ) : (
        <button
          className="bg-blue-400 rounded-lg shadow-lg p-3 text-white font-bold flex flex-row items-center gap-x-2"
          onClick={toggleChat}
        >
          <div>Calorix Assist</div>
          <div>
            <PanelTopClose className="w-5 h-5" />
          </div>
        </button>
      )}
    </div>
  );
}

export function ChatBoxDialog({ toggleChat }: { toggleChat: () => void }) {
  return (
    <div className="min-h-24 h-full w-[30vw] p-5  ">
      <div className="bg-white rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Calorix Assist</h2>
          <button
            className="text-gray-500 hover:text-gray-700 hover:bg-blue-200 transition-all transition-duration-400 p-2 rounded-full"
            onClick={toggleChat}
          >
            <CircleX className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-4">
          <p>How can I assist you today?</p>
        </div>
      </div>
    </div>
  );
}
