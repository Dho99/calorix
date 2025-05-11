"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { SidebarHeader, SidebarContent } from "@/components/ui/sidebar";
import Link from "next/link";
import { navigContent } from "./navbar";
import {dashboardMenu} from "@/app/pages/user/(dashboard)/components/sidemenu";
import type { Preference } from "@/app/pages/user/(dashboard)/components/sidemenu";

export default function SidenavHead() {
  const { open, setOpen, setOpenMobile } = useSidebar();

  const navLinks: Preference[] = [
    ...dashboardMenu,
    ...navigContent,
  ]

  function handleCloseSidebar(){
    setOpen(false);
    setOpenMobile(false);
  }

  return (
    <>
      <SidebarHeader className="overflow-hidden">
        <div className="flex flex-row items-center gap-x-3 p-4">
          <p className="text-3xl font-bold">Calorix</p>
        </div>
      </SidebarHeader>
      <SidebarContent className={`flex flex-col gap-y-2 mt-7 ${open && "px-2"}`}>
        {navLinks.map((item, index) => {
          if (item.collapsible) {
            return (
                <div key={index} className="flex flex-col gap-y-2">
                <p className="text-lg font-bold">{item.title}</p>
                {Array.isArray(item.link) && item.link.map((child: {childLink: string, title: string}, index: number) => {
                  return (
                  <Link
                    key={index}
                    href={`${child.childLink}`}
                    className="w-full py-3 px-3 rounded-lg shadow-lg flex flex-row items-center gap-x-3 hover:bg-[#9EC8B9] hover:font-bold transition-all duration-200 ease-in-out"
                    onClick={handleCloseSidebar}
                  >
                    <div>{child.title}</div>
                  </Link>
                  );
                })}
                </div>
            );
          } else {
            
          return (
            <Link
              key={index}
              href={`${item.link}`}
              className="w-full py-3 px-3 rounded-lg shadow-lg flex flex-row items-center gap-x-3 hover:bg-[#9EC8B9] hover:font-bold transition-all duration-200 ease-in-out"
              onClick={handleCloseSidebar}
            >
              <div>
                <item.icon />
              </div>
              <div>{item.title}</div>
            </Link>
          );

        }
        })}
      </SidebarContent>
    </>
  );
}
