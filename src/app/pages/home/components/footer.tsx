import Link from "next/link"
import Image from "next/image"
import { CircleHelpIcon, MailIcon, BookMarkedIcon, GitBranchIcon } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#092635] text-white py-10">
            <div className="flex flex-col lg:px-15 px-10 gap-5">
                <div className="flex lg:flex-row flex-col w-full justify-between gap-7">
                    <div className="flex flex-row items-center gap-x-2">
                        <Image src={'/assets/static/images/calorix-logo.png'} alt="Calorix Logo" height={45} width={45} quality={100} />
                        <h1 className="text-3xl font-bold ">Calorix</h1>
                    </div>
                    <div className="flex flex-col lg:max-w-1/4 gap-2">
                        <div className="flex flex-row items-center">
                            <CircleHelpIcon className="w-5 h-5 mr-2" />
                            <h2 className="text-xl font-bold">Cara Kerja</h2>
                        </div>
                        <p className="text-sm">Calorix Lacak asupan kalori harian Anda dan pantau kemajuan Anda untuk mencapai tujuan kesehatan dan kebugaran dengan mudah.</p>
                    </div>
                    <div className="flex flex-col lg:max-w-1/4 gap-2">
                        <div className="flex flex-row items-center">
                            <BookMarkedIcon className="w-5 h-5 mr-2" />
                            <h2 className="text-xl font-bold">Panduan Pengguna</h2>
                        </div>
                        <p className="text-sm">Temukan panduan lengkap untuk menggunakan aplikasi Calorix dengan mudah dan efektif. <Link href={"https://docs.google.com/document/d/1R3MkLB9-Hld7dHWPQ4LkYSMMhIU_qqsSpVq7hEs1xtI"} className="font-bold hover:underline decoration-solid">Baca Petunjuk Penggunaan</Link></p>
                    </div>
                    <div className="flex flex-col lg:max-w-1/4 gap-2">
                        <div className="flex flex-row items-center">
                            <MailIcon className="w-5 h-5 mr-2" />
                            <h2 className="text-xl font-bold">Kontak</h2>
                        </div>
                        <p className="text-sm">Email: calorix@mail.com </p>
                    </div>
                    <div className="flex flex-col lg:max-w-1/4 gap-2">
                        <div className="flex flex-row items-center">
                            <GitBranchIcon className="w-5 h-5 mr-2" />
                            <h2 className="text-xl font-bold">Kontributor</h2>
                        </div>
                        <Link href={"/pages/home/contributors"} className="font-bold hover:underline decoration-solid text-sm">Lihat Kontributor</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}