import AppNavbar from "../pages/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "w-full h-full flex items-center justify-center bg-[#092635] text-black overflow-auto p-10"
      }
    >
      <AppNavbar />
      <div className=" py-12 rounded-lg my-auto text-white">
        {children}
      </div>
    </div>
  );
}
