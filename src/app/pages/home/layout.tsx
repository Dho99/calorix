import AppSidebar from "@/app/pages/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppSidebar />
      {children}
    </>
  );
}
