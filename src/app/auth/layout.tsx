import AppNavbar from "../pages/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
    <div
      className={
        "h-full flex items-center justify-center dark:text-white overflow-auto lg:p-0 py-20 px-5 m-auto"
      }
    >
      <AppNavbar />
      <div className=" rounded-lg my-auto dark:text-white">
        {children}
      </div>
    </div>
    </SidebarProvider>
  );
}
