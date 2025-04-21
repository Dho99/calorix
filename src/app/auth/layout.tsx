import AppNavbar from "../pages/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
    <div
      className={
        "h-full flex items-center justify-center bg-[#092635] text-black overflow-auto lg:p-0 py-20 px-5 m-auto"
      }
    >
      <AppNavbar />
      <div className=" rounded-lg my-auto text-white">
        {children}
      </div>
    </div>
    </SidebarProvider>
  );
}
