export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"w-ful h-full flex items-center justify-center m-auto bg-slate-300"}>
      <div className=" bg-white p-3 border rounded-lg shadow-md">
        <h1 className={"text-2xl font-bold text-center"}>Calorix</h1>
        <div
          className={
            "flex flex-col gap-3 mt-5 flex justify-center items-center h-98 w-98"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
