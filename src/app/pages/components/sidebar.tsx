import { Sidebar, SidebarFooter } from "@/components/ui/sidebar";
import SidenavContent from "./sidenav-content";

export default function AppSidebar() {
  return (
    <Sidebar className="lg:hidden block z-10">
      <SidenavContent />
      <SidebarFooter />
    </Sidebar>
  );
}
