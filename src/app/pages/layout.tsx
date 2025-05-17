
import AppNavbar from "./components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/sidebar";
import ScanButton from "./user/components/scan-button";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <SidebarProvider>
      <div className="flex flex-col w-full h-full relative">
        <AppSidebar />
        <AppNavbar />
        <div className="w-full h-full relative overflow-auto">
          <ScanButton />

          {children}
        </div>
        {/* <ChatBox /> */}
      </div>
    </SidebarProvider>
  );
}
