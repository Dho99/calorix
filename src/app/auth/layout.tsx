export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "w-full h-full flex items-center justify-center m-auto bg-slate-300 text-black overflow-auto"
      }
    >
      <div className=" bg-white p-7 border rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <h1 className={"text-2xl font-bold text-center"}>Calorix</h1>
          <h1 className="text-2xl text-black">Sign In</h1>
          <p className="text-sm text-gray-400 mb-8">
            Please sign in to continue
          </p>
          <div
            className={
              "flex flex-col gap-3 mt-5 flex justify-center items-center w-98"
            }
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
