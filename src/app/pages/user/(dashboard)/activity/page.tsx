"use client"

import { useEffect, useState } from "react"
import type { UserActivites } from "@/app/utils/lib/types/user"
import axios from "axios"

export default function Page(){
    const [activities, setActivities] = useState<UserActivites|null>(null)

    useEffect(() => {
        const fetchActivities = async () => {
            await axios.get('/api/handler/activities/user?type=getAllUserActivities&page=1&limit=10',{
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => {
                console.log(res)
                if(res.data.success){
                    setActivities(res.data.data)
                }else{
                    setActivities(null)
                }
            }).catch((err) => {
                console.log(err)
            }
            )
        }
        fetchActivities()
    },[])

    return (
        <div className="flex flex-col gap-5 w-full h-full py-15">
            <div className="flex flex-col gap-3">
                <h1 className="text-white text-2xl font-semibold">Aktivitas</h1>
                <p className="text-white text-base">Berikut adalah aktivitas yang telah anda lakukan</p>
            </div>
        </div>
    )
}