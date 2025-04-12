export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "w-full h-full flex items-center justify-center bg-slate-300 text-black overflow-auto p-10"
      }
    >
      <div className=" bg-white p-7 border rounded-lg shadow-md my-auto">
        {children}
      </div>
    </div>
  );
}
