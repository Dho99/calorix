"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AppNavbar() {
  type SidebarContent = {
    title: string;
    link: string;
  };

  const sidebarContent: SidebarContent[] = [
    {
      title: "Dashboard",
      link: "dashboard",
    },
    {
      title: "Kalkulasi",
      link: "calculate",
    },
    {
      title: "Konsultasi",
      link: "consultation",
    },
    {
      title: "Riwayat",
      link: "history",
    },
    {
      title: "Progress",
      link: "progress",
    },
  ];
  return (
    <div className="flex items-center w-full p-4 bg-gray-800 text-white ">
      {/* <SidebarTrigger className="text-white" /> */}
      <div className="text-lg font-bold">My App</div>
      <div className="w-auto flex flex-row items-center ms-auto">
        {sidebarContent.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/pages/${item.link}`}
              className="px-4 py-2 rounded hover:bg-gray-700"
            >
              {item.title}
            </Link>
          );
        })}
      <ProtectedNav />
      </div>
      {/* <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 bg-red-500 rounded"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      </div> */}
    </div>
  );
}

const ProtectedNav = () => {

  const session = useSession();

  const userSession = session?.data?.user;

  if(!userSession) return (
    <Link href={'/auth/signin'} className="bg-slate-500 py-2 px-3 rounded-lg text-white">Sign In</Link>
  );

  return (
    <Link
    href={`/profile/user/${userSession?.id}`}
    className="flex flex-row items-center"
  >
    <div className="w-14 h-14 rounded-lg bg-blue-400"></div>
  </Link> 
  )
}