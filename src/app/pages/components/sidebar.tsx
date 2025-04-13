import { Sidebar, SidebarFooter } from "@/components/ui/sidebar";
import SidenavContent from "./sidenav-content";

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidenavContent />
      <SidebarFooter />
    </Sidebar>
  );
}
