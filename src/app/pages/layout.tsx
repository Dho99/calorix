import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/pages/components/sidebar";
import AppNavbar from "./components/navbar";
import ChatBox from "./components/chatbox";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full h-full">
        <AppNavbar />
        <div className="m-5">{children}</div>
        <ChatBox />
      </div>

    </SidebarProvider>
  );
}
