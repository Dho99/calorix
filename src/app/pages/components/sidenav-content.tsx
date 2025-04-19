"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { SidebarHeader, SidebarContent } from "@/components/ui/sidebar";
import Link from "next/link";
import { dropdownLinks, navigContent } from "./navbar";


export default function SidenavHead() {
  const { open } = useSidebar();

  const navLinks = [
    ...dropdownLinks,
    ...navigContent,
  ]

  return (
    <>
      <SidebarHeader className="overflow-hidden">
        <div className="flex flex-row items-center gap-x-3 p-4">
          <p className="text-3xl font-bold">Calorix</p>
        </div>
      </SidebarHeader>
      <SidebarContent className={`flex flex-col gap-y-2 mt-7 ${open && "px-2"}`}>
        {navLinks.map((item, index) => {
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
