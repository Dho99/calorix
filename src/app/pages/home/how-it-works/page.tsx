export default function Page(){
    return (   
        <div className="w-full h-[dvh] flex flex-col bg-[#092635] text-white relative py-15 px-20 items-center">
            <p className="text-4xl font-bold text-center">
                Cara Kerja Calorix
            </p>
            <div className="flex lg:flex-row flex-col gap-y-5 justify-evenly items-center w-full py-20">
                <img src="/assets/how-it-works.png" alt="How It Works" className="lg:w-1/2 w-full h-auto" />
            </div>
        </div>
    )
}