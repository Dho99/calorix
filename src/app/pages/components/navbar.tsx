"use client";

import { useSession } from "next-auth/react";
import { UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function AppNavbar() {
  const {data} = useSession();
  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/signin";

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
      title: "Riwayat",
      link: "history",
    },
    {
      title: "Progress",
      link: "progress",
    }, 
    {
      title: "Kalkulasi",
      link: "calculate",
    },
    {
      title: "Konsultasi",
      link: "consultation",
    },
  ];

  return (
    <div className="flex items-center w-full py-3 px-20 bg-[#092635]/70 text-white justify-between fixed top-0 z-10 backdrop-blur-sm shadow-md">
      <Link href={"/pages/home"} className="text-2xl font-bold">Calorix</Link>
      <div className="w-auto flex flex-row items-center">
        {(!isLoginPage ? sidebarContent : []).map((item, index) => {
          return (
            <Link
              key={index}
              href={data ? `/pages/user/${item.link}` :`/auth/signin`}
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

  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/signin";

  if(isLoginPage) return null;

  if (!userSession)
    return (
      <Link
        href={"/auth/signin"}
        className="border border-[#9EC8B9] text-[#9EC8B9] py-2 px-3 rounded transition-all transition-duration-300 hover:bg-[#9EC8B9] hover:text-white"
      >
        Sign In
      </Link>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-row items-center gap-3">
          <div className="border border-[#9EC8B9] text-[#9EC8B9] py-1 px-3 rounded">
            {userSession?.name}
          </div>
          <UserRound className="w-10 h-10 bg-[#9EC8B9] p-2 rounded-full" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black text-white shadow-xl">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600 font-bold" onClick={() => signOut({redirectTo: '/auth/signin'})}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
