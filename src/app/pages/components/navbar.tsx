"use client";

import { useSession } from "next-auth/react";
import { UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

export default function AppNavbar() {
  const { data } = useSession();
  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/signin";

  type SidebarContent = {
    title: string;
    link: string;
  };

  const sidebarContent: SidebarContent[] = [
    {
      title: "Tentang",
      link: "#about",
    },
    {
      title: "Fitur",
      link: "#features",
    },
    {
      title: "How It Works",
      link: "/how-it-works",
    },
    {
      title: "FAQ",
      link: "#faq",
    },
  ];

  return (
    <div className="flex items-center w-full py-3 lg:px-20 px-10 bg-[#092635]/70 text-white justify-between fixed top-0 z-2 backdrop-blur-xs shadow-md">
      <Link href={"/pages/home"} className="text-2xl font-bold">
        Calorix
      </Link>
      <div className="w-auto lg:flex flex-row hidden items-center">
        {sidebarContent.map((item, index) => {
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

  const dropdownLinks = [
    {
      title: "Manage",
      link: "/pages/user/manage",
    },
    {
      title: "Settings",
      link: "/pages/user/settings",
    },
  ];

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
        <DropdownMenuContent className="w-56 bg-black/20 backdrop-blur-xs text-white">
          <DropdownMenuGroup>
            {dropdownLinks.map((item, index) => {
              return (
                
                  <DropdownMenuItem key={index}>
                    <Link
                      href={item.link}
                      className="flex flex-row items-center hover:cursor-pointer hover:bg-[#9EC8B9]/20 w-full py-2 px-4 rounded"
                    >
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                
              );
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>

        {/* <Link href={'/pages/user/manage'} >
          </Link> */}
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
