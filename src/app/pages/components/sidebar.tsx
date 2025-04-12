import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { HomeIcon } from "lucide-react";
import Link from "next/link";
import SidenavHead from "./sidenav-head";

type SidebarContent = {
  title: string;
  link: string;
  icon: typeof HomeIcon;
};

export function AppSidebar() {

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
  ]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="overflow-hidden">
        <SidenavHead />
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-y-4">
        {sidebarContent.map((item, index) => {
          return (
            <Link key={index} href={`/pages/${item.link}`} className="w-full py-3 px-3 rounded-lg shadow-lg flex flex-row items-center gap-x-3">
              <div><item.icon/></div>
              <div>

              {item.title}
              </div>
              </Link>
          )
        })}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
