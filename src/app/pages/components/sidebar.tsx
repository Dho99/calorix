import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { HomeIcon } from "lucide-react";
import Link from "next/link";

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
      <SidebarHeader />
      <SidebarContent className="flex flex-col gap-y-3">
        {sidebarContent.map((item, index) => {
          return (
            <Link key={index} href={`/pages/${item.link}`} className="w-full py-2 px-4 rounded-lg shadow-lg flex flex-row items-center">{item.title}</Link>
          )
        })}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
