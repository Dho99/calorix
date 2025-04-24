"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { DashboardComponentPageProps } from "../page";

type Activities = {
  caloriesConsumed: number;
  caloriesBurned: number;
  sleepTracking: number;
  hydration: number;
}

export const getFoodLog = () => {
  try {
    axios.get('/api/handler/activities').then((res) => {
      if(res.data.success){
        return res.data.data;
      }
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default function Activities(setDialog: DashboardComponentPageProps) {
  const [pageData, setPageData] = useState<Activities|null>(null);

  useEffect(() => {
    
  },[])



    return (
        <div className="grid grid-cols-2 gap-2">
            <div className="w-full h-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold">Calories Consumed</h2>
              <p>Statistik pengguna dan data lainnya.</p>
            </div>
            <div className="w-full h-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold">Calories Burned</h2>
              <p>Pengaturan akun dan preferensi.</p>
            </div>
            <div className="w-full h-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold">Sleep Tracking</h2>
              <p>Pengaturan akun dan preferensi.</p>
            </div>
            <div className="w-full h-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold">Hydration</h2>
              <p>Pengaturan akun dan preferensi.</p>
            </div>
          </div>
    )
}