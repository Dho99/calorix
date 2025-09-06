import Link from "next/link";
import Image from "next/image";
import { MailIcon, GitBranchIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col bg-orange-500 py-5">
      <footer className="text-white py-15">
        <div className="flex flex-col lg:px-15 px-10 gap-5">
          <div className="flex lg:flex-row flex-col w-full justify-between gap-7">
            <div className="flex flex-row items-center gap-x-2">
              <Image
                src={"/assets/static/images/calorix-logo-white.png"}
                alt="Calorix Logo"
                height={45}
                width={45}
                quality={100}
              />
              <h1 className="text-3xl font-bold ">Calorix</h1>
            </div>
            <div className="flex flex-col lg:max-w-1/4 gap-2">
              <div className="flex flex-row items-center">
                {/* <CircleHelpIcon className="w-5 h-5 mr-2" /> */}
                <h2 className="text-xl font-bold">Cara Kerja</h2>
              </div>
              <p className="text-sm">
                Calorix Lacak asupan kalori harian Anda dan pantau kemajuan Anda
                untuk mencapai tujuan kesehatan dan kebugaran dengan mudah.
              </p>
            </div>
            <div className="flex flex-col lg:max-w-1/4 gap-2">
              <div className="flex flex-row items-center">
                {/* <BookMarkedIcon className="w-5 h-5 mr-2" /> */}
                <h2 className="text-xl font-bold">Panduan Penggunaan</h2>
              </div>
              <p className="text-sm">
                Temukan panduan lengkap untuk menggunakan aplikasi Calorix
                dengan mudah dan efektif.{" "}
                <Link
                  href={
                    "https://docs.google.com/document/d/1R3MkLB9-Hld7dHWPQ4LkYSMMhIU_qqsSpVq7hEs1xtI"
                  }
                  className="font-bold hover:underline decoration-solid"
                >
                  Baca Petunjuk Penggunaan
                </Link>
              </p>
            </div>
            <div className="flex flex-col lg:max-w-1/4 gap-4">
              <div className="flex flex-row items-center space-x-2">
                <MailIcon className="w-8 h-8 mr-2" />
                <p className="text-base">calorix@mail.com </p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <GitBranchIcon className="w-8 h-8 mr-2" />
                <Link
                  href={"/pages/home/contributors"}
                  className="font-bold hover:underline decoration-solid text-base"
                >
                  Kontributor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full py-5 flex items-center justify-center">
        <p className="text-sm text-center text-white/90">
          &copy; {new Date().getFullYear()} Calorix. All rights reserved.
        </p>
      </div>
    </div>
  );
}
