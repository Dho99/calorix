"use client";

import { useSession } from "next-auth/react";
import { UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  WrenchIcon,
  CircleHelpIcon,
  NotebookTabsIcon,
  InfoIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import { signOut } from "next-auth/react";

import Link from "next/link";
import { useState, useEffect } from "react";

export const navigContent = [
  {
    title: "Tentang",
    link: "/home#about",
    icon: InfoIcon,
  },
  {
    title: "Fitur",
    link: "/home#features",
    icon: WrenchIcon,
  },
  {
    title: "User Guide",
    link: "#",
    icon: NotebookTabsIcon,
  },
  {
    title: "FAQ",
    link: "/home#faq",
    icon: CircleHelpIcon,
  }
];

export const dropdownLinks = [
  {
    title: "Dashboard",
    link: "/pages/user/dashboard",
    icon: HomeIcon,
  },
  
];

export default function AppNavbar() {
  const pathname = usePathname();
  const { setOpen, setOpenMobile } = useSidebar();
  const { theme, setTheme } = useTheme();
  const isLoginPage = pathname === "/auth/signin";
  const [hasShadow, setHasShadow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const {data: session} = useSession();

  // Fix hydration mismatch by ensuring component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 60);
    };

    const handleResize = () => {
      if (window.innerWidth > 640) {
        setOpenMobile(false);
      }
      if (window.innerWidth > 1000) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpen, setOpenMobile]);

  // Prevent hydration mismatch by not rendering theme-dependent content server-side
  if (!mounted) {
    return (
      <div className="flex items-center w-full py-3 lg:px-20 px-10 justify-between fixed top-0 z-2 backdrop-blur">
        <Link href={"/pages/home"} className="text-2xl font-bold">
          Calorix
        </Link>
        {/* <div className="opacity-0">Loading...</div> */}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center w-full py-3 lg:px-20 px-5 dark:text-white justify-between fixed top-0 z-2 backdrop-blur transition-all duration-300 ${
        hasShadow ? "shadow-md bg-[#092635]/10 dark:bg-black/30" : ""
      }`}
    >
      <div className="flex flex-row items-center">
        <Image src={'/assets/static/images/calorix-logo.png'} width={35} height={35} quality={100} alt="Calorix Logo"></Image>
      <Link href={"/pages/home"} className="text-2xl font-bold">
        Calorix
      </Link>
      </div>
      <div className="w-auto lg:flex flex-row hidden items-center">
        {isLoginPage
          ? null
          : navigContent.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={`/pages${item.link}`}
                  className="px-4 py-2 rounded dark:hover:bg-green-300/60 hover:bg-green-500/60"
                >
                  {item.title}
                </Link>
              );
             
            })}
        {session?.user?.id && (
            <Link
              href={`/pages/user/consultation`}
              className="px-4 py-2 rounded dark:hover:bg-green-300/60 hover:bg-green-500/60"
            >
              Konsultasi
            </Link>
        )}
        <button
          className="px-4 py-2 rounded dark:hover:bg-green-300/60 hover:bg-green-500/60"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
      <ProtectedNav />
    </div>
  );
}

const ProtectedNav = () => {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false); //eslint-disable-line
  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/signin";
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (isLoginPage) return null;

  const userSession = session?.user;

  return (
    <>
      <DropdownMenu>
        {userSession ? (
          <DropdownMenuTrigger asChild>
            <div className="flex-row items-center gap-1 lg:flex hidden hover:cursor-pointer">
              <div className="border dark:border-[#9EC8B9] dark:text-[#9EC8B9] py-1 px-3 rounded">
                {userSession?.name}
              </div>
              <UserRound className="w-10 h-10 dark:bg-[#9EC8B9] p-2 border dark:border-0 rounded-full" />
            </div>
          </DropdownMenuTrigger>
        ) : (
          <Link
            href={"/auth/signin"}
            className="border border-black hover:bg-black hover:text-white hover:border-black dark:border-white dark:text-white py-2 px-3 rounded transition-all duration-300 dark:hover:bg-white dark:hover:text-black lg:flex hidden "
          >
            Sign In
          </Link>
        )}
        <DropdownMenuContent className="w-40 bg-black/20 backdrop-blur-xs text-white">
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
          {/* <button
            className="flex flex-row items-center hover:cursor-pointer hover:bg-[#9EC8B9]/20 w-full py-2 px-4 rounded justify-between"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}{" "}
            {theme === "dark" ? "Dark" : "Light"} Mode
          </button> */}
          <button
            className="flex flex-row items-center hover:cursor-pointer hover:bg-[#9EC8B9]/20 w-full py-2 px-4 rounded"
            onClick={() => {
              signOut({redirectTo: "/pages/home"});
            }}
          >Sign Out</button>
        </DropdownMenuContent>
      </DropdownMenu>
      <SidebarTrigger className="lg:hidden flex dark:bg-black/10 border w-auto h-auto rounded-lg p-1" />
    </>
  );
};