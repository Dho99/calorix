import AppNavbar from "./components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/sidebar";


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
        <div className="w-full h-full relative">{children}</div>
        {/* <ChatBox /> */}
      </div>
    </SidebarProvider>
  );
}
