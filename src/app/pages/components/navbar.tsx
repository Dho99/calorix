"use client";

import { useSession } from "next-auth/react";
import { CogIcon, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  MenuIcon,
  XIcon,
  WrenchIcon,
  CircleHelpIcon,
  NotebookTabsIcon,
  InfoIcon,
  HomeIcon,
  BotIcon,
} from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

export const navigContent = [
  {
    title: "Tentang",
    link: "#about",
    icon: InfoIcon,
  },
  {
    title: "Fitur",
    link: "#features",
    icon: WrenchIcon,
  },
  {
    title: "Konsultasi",
    link: "/pages/user/consultation",
    icon: BotIcon,
  },
  {
    title: "How It Works",
    link: "/how-it-works",
    icon: NotebookTabsIcon,
  },
  {
    title: "FAQ",
    link: "#faq",
    icon: CircleHelpIcon,
  },
];

export const dropdownLinks = [
  {
    title: "Dashboard",
    link: "/pages/user/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Preferensi",
    link: "/pages/user/manage",
    icon: CogIcon,
  },
];

export default function AppNavbar() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/signin";

  return (
    <div className="flex items-center w-full py-3 lg:px-20 px-10 bg-[#092635]/70 text-white justify-between fixed top-0 z-2 backdrop-blur-xs shadow-md">
      <Link href={"/pages/home"} className="text-2xl font-bold">
        Calorix
      </Link>
      <div className="w-auto lg:flex flex-row hidden items-center">
        {isLoginPage
          ? null
          : navigContent.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={`/pages/home${item.link}`}
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
  const { open, toggleSidebar } = useSidebar();
  const session = useSession();

  const userSession = session?.data?.user;

  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/signin";

  if (isLoginPage) return null;

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
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex-row items-center gap-1 lg:flex hidden hover:cursor-pointer">
            <div className="border border-[#9EC8B9] text-[#9EC8B9] py-1 px-3 rounded">
              {userSession?.name}
            </div>
            <UserRound className="w-10 h-10 bg-[#9EC8B9] p-2 rounded-full" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 bg-black/20 backdrop-blur-xs text-white">
          {/* <DropdownMenuGroup> */}
          {dropdownLinks.map((item, index) => {
            return (
              <Link
                href={`${item.link}`}
                key={index}
                className="flex flex-row items-center hover:cursor-pointer hover:bg-[#9EC8B9]/20 w-full py-2 px-4 rounded"
              >
                {item.title}
              </Link>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
      <button
        className="bg-black/20 lg:hidden  py-2 px-4 rounded-lg shadow-lg"
        onClick={toggleSidebar}
      >
        {open ? (
          <XIcon className="w-10 h-10 text-white" />
        ) : (
          <MenuIcon className="w-10 h-10 text-white" />
        )}
      </button>
    </>
  );
};
