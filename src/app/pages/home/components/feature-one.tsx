export default function FeatureOne(){
    return (
        <div className="w-full h-[dvh] flex flex-col bg-[#092635] text-white relative py-25 px-20 items-center">
            <p className="text-4xl font-bold">Beberapa Fitur Menarik yang Bisa Anda Coba </p>
          <div className="flex flex-row justify-evenly items-center w-full py-20">
                <div className="bg-slate-300 h-72 w-72 rounded-lg p-3 shadow-lg"></div>
                <div className="bg-slate-300 h-72 w-72 rounded-lg p-3 shadow-lg"></div>
                <div className="bg-slate-300 h-72 w-72 rounded-lg p-3 shadow-lg"></div>
          </div>
        </div>
    )
}