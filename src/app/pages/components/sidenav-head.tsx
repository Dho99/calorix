"use client"
import { useSidebar } from "@/components/ui/sidebar"

export default function SidenavHead(){
    const { open } = useSidebar()
    return (
        <div className="flex flex-row items-center gap-x-3">
            <img src="/logo.svg" className="w-10 h-10" alt="Logo" />
            <div className="text-2xl font-bold">{JSON.stringify(open)}</div>
        </div>
    )
}