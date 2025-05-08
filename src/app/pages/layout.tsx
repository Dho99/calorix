
import AppNavbar from "./components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/sidebar";

export const scrollToTop = (pageRef: React.RefObject<HTMLDivElement | null>) => {
  if (pageRef.current) {
    pageRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

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
        <div className="w-full h-full relative overflow-auto">{children}</div>
        {/* <ChatBox /> */}
      </div>
    </SidebarProvider>
  );
}
