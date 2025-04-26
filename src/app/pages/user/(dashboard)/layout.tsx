import SideMenu from "./components/sidemenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-dvh overflow-auto bg-[#092635] lg:flex lg:flex-row pt-8">
      <div className="max-w-1/6 w-full overflow-hidden h-full flex justify-center py-15 relative relative lg:block hidden">
        <SideMenu />
      </div>
      <div className="w-full px-5 ">{children}</div>
    </div>
  );
}
