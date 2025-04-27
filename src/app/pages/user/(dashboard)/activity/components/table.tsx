import type { UserActivites } from "@/app/utils/lib/types/user"


export default function Table({activities}: {activities: UserActivites|null}){
    return (
        <div className="flex flex-col gap-5 w-full h-full py-15">
            <div className="flex flex-col gap-3">
                <h1 className="text-white text-2xl font-semibold">Aktivitas</h1>
                <p className="text-white text-base">Berikut adalah aktivitas yang telah anda lakukan</p>
            </div>
        </div>
    )
}