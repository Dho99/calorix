"use client"

import { ScanSearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ScanButton(){
    const pathname = usePathname();

    const isConsultationPage = pathname === "/pages/user/consultation";
    const isScanPage = pathname === "/pages/scan";
    const router = useRouter();

    if(isConsultationPage || isScanPage) return;

    return (
        <div className="fixed bottom-5 right-5 z-20">
            <button className="p-4 bg-green-500 dark:bg-green-500 text-white rounded-full shadow-lg flex flex-row gap-x-2 items-center justify-center hover:cursor-pointer hover:bg-green-400/80 active:bg-green-400/70 transition-all duration-200 ease-in-out" onClick={() => {router.push('/pages/scan')}}>
            <ScanSearchIcon className="w-6 h-6" />
            <p className="text-center" >Food Scan</p>
            </button>
      </div>
    )
}