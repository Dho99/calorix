import Link from "next/link"
import Image from "next/image";
import HeroImage from "../../../../../public/assets/static/hero-image.png"

export default function Hero() {

  return (
    <div className="w-full min-h-dvh h-auto flex flex-row bg-[#092635] text-white relative items-center py-20 px-20">
      <div className="max-w-xl flex-col">
        <h1 className="text-5xl font-bold">Solusi dalam Merencanakan diet</h1>
        <p className="text-lg mt-3">
          Kami siap membantu anda dengan bantuan AI dan juga para ahli di
          bidangnya
        </p>
        <div className="flex flex-row gap-x-3 mt-15">
      <button className="bg-[#5C8374] py-3 px-10 text-white font-bold rounded-lg  text-xl shadow-xl">Get Started</button>
      <button className="bg-[#5C8374] py-3 px-10 text-white font-bold rounded-lg text-xl shadow-xl">See FAQ</button>

        </div>
      </div>
      <div className="w-max flex ms-auto rounded-lg overflow-hidden">
        <Image src={HeroImage} alt={"Hero Image"} width={500} height={500}/>
        </div>
    </div>
  );
}
