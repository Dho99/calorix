import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/app/pages/components/sidebar";
import AppNavbar from "./components/navbar";
import ChatBox from "./components/chatbox";
import { SessionProvider } from "next-auth/react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      {/* <AppSidebar /> */}
      {/* <SessionProvider> */}
      <div className="flex flex-col w-full h-full relative">
        <AppNavbar />
        <div className="w-full h-full relative">{children}</div>
        <ChatBox />
      </div>
      {/* </SessionProvider> */}

    </SidebarProvider>
  );
}
