"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { signOut } from "next-auth/react";

export default function AppNavbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white ">
      <SidebarTrigger className="text-white" />
      <div className="text-lg font-bold">My App</div>
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 bg-red-500 rounded"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
