'use client';
import { Sidebar, SidebarFooter } from "@/components/ui/sidebar";
import SidenavContent from "./sidenav-content";

import { useSidebar } from "@/components/ui/sidebar";
import { useEffect } from "react";

export default function AppSidebar() {

  const { open, setOpen } = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, []); //eslint-disable-line  


  return (
    <Sidebar className={`${open ? 'block' : 'hidden'} z-10`}>
      <SidenavContent />
      <SidebarFooter />
    </Sidebar>
  );
}
