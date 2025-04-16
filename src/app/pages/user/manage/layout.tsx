import SideMenu from "./components/sidemenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-dvh overflow-auto bg-[#092635] flex flex-row pt-8">
      <div className="w-1/4 h-full flex justify-center py-20">
        <SideMenu />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
