"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import type { DashboardComponentPageProps } from "../page";
import { Dispatch } from "react";

type Activities = {
  caloriesConsumed: number;
  caloriesBurned: number;
  sleepTracking: number;
  hydration: number;
};

export const filterToday = {
  start: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
  end: new Date().toISOString(),
};

export const getActivities = async (
  setDialog: Dispatch<DashboardComponentPageProps>
) => {
  const searchDatas = [
    {
      url: "/api/handler/activities/physical",
      methodType: "getCaloriesBurned",
    },
    {
      url: "/api/handler/foodlog",
      methodType: "getCaloriesConsumed",
    },
    {
      url: "/api/handler/hydration",
      methodType: "getUserHydration",
    },
    {
      url: "/api/handler/sleeptracker",
      methodType: "getUserSleepTime",
    },
  ];

  const promises = searchDatas.map(async (data) => {
    const searchparams = new URLSearchParams({
      methodType: data.methodType,
      ...filterToday,
    });

    try {
      const res = await axios.get(`${data.url}?${searchparams.toString()}`);
      if (res.status === 200 && res.data.success) {
        return res.data.data;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });

  const results = await Promise.all(promises);
  const caloriesBurned = results[0] || 0;
  const caloriesConsumed = results[1] || 0;
  const sleepTracking = results[2] ||0;
  const hydration = 0;
  return {
    caloriesBurned,
    caloriesConsumed,
    sleepTracking,
    hydration,
  };
};

export default function Activities({
  setDialog,
}: {
  setDialog: Dispatch<DashboardComponentPageProps>;
}) {
  const [pageData, setPageData] = useState<Activities | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getActivities(setDialog);
      setPageData(data);
    };

    fetchData();
  }, []);

  const fetchResult = () => [
    {
      title: "Calories Consumed",
      value: pageData?.caloriesConsumed || 0,
      parameter: "Kcal"
    },
    {
      title: "Calories Burned",
      value: pageData?.caloriesBurned || 0,
      parameter: "Kcal"
    },
    {
      title: "Sleep Tracking",
      value: pageData?.sleepTracking || 0,
      parameter: "Jam"
    },
    {
      title: "Hydration",
      value: pageData?.hydration || 0,
      parameter: "L"
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {
        fetchResult().map((item, index) => (
          <div
            key={index}
            className="w-full h-full bg-[#1B4242] text-white rounded-lg shadow-md p-4"
          >
            <h2 className="text-lg font-bold">{item.title}</h2>
            <div className="flex flex-row gap-2 items-baseline">
            <p className="text-4xl font-bold">{item.value}</p> 
            <p className="text-xl"> {item.parameter}</p>

            </div>
          </div>
        ))
      }
    </div>
  );
}
