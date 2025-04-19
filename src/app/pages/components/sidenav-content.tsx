"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { SidebarHeader, SidebarContent } from "@/components/ui/sidebar";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function SidenavHead() {
  const { open } = useSidebar();

  type SidebarContent = {
    title: string;
    link: string;
    icon: typeof HomeIcon;
  };
  const sidebarContent: SidebarContent[] = [
    {
      title: "Dashboard",
      link: "dashboard",
      icon: HomeIcon,
    },
    {
      title: "Kalkulasi",
      link: "calculate",
      icon: HomeIcon,
    },
    {
      title: "Konsultasi",
      link: "consultation",
      icon: HomeIcon,
    },
    {
      title: "Riwayat",
      link: "history",
      icon: HomeIcon,
    },
    {
      title: "Progress",
      link: "progress",
      icon: HomeIcon,
    },
  ];

  return (
    <>
      <SidebarHeader className="overflow-hidden">
        <div className="flex flex-row items-center gap-x-3 p-4">
          {/* <img src="/logo.svg" className="w-10 h-10" alt="Logo" /> */}
          <p className="text-3xl font-bold">Calorix</p>
        </div>
      </SidebarHeader>
      <SidebarContent className={`flex flex-col gap-y-2 ${open && "px-2"}`}>
        {sidebarContent.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/pages/${item.link}`}
              className="w-full py-3 px-3 rounded-lg shadow-lg flex flex-row items-center gap-x-3 hover:bg-[#9EC8B9] hover:font-bold transition-all duration-200 ease-in-out"
            >
              <div>
                <item.icon />
              </div>
              <div>{item.title}</div>
            </Link>
          );
        })}
      </SidebarContent>
    </>
  );
}
