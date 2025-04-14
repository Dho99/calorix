"use client";

import { useSession } from "next-auth/react";
import { User, UserRound } from "lucide-react";

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
    <div className="flex items-center w-full py-3 px-10 bg-[#092635] text-white justify-between">
      <div className="text-2xl font-bold">Calorix</div>
      <div className="w-auto flex flex-row items-center">
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
      </div>
      <ProtectedNav />
    </div>
  );
}

const ProtectedNav = () => {
  const session = useSession();

  const userSession = session?.data?.user;

  if (!userSession)
    return (
      <Link
        href={"/auth/signin"}
        className="border border-[#9EC8B9] text-[#9EC8B9] py-2 px-3 rounded-lg transition-all transition-duration-300 hover:bg-[#9EC8B9] hover:text-white"
      >
        Sign In
      </Link>
    );

  return (
    // <div className="flex items-center space-x-4">
    //   <button
    //     className="px-4 py-2 bg-red-500 rounded"
    //     onClick={() => {
    //       signOut({ redirectTo: "/pages/home" });
    //     }}
    //   >
    //     Sign Out
    //   </button>
    // </div>
    <Link
      href={`/profile/user/${userSession?.id}`}
      className="flex flex-row items-center gap-3"
    >
      <div className="border border-[#9EC8B9] text-[#9EC8B9] py-1 px-3 rounded">
        {userSession?.name}
      </div>
      <UserRound className="w-10 h-10 bg-[#9EC8B9] p-2 rounded-full" />
    </Link>
  );
};
