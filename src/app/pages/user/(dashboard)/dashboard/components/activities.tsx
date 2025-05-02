"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import type { DashboardComponentPageProps } from "../page";
import { Dispatch } from "react";
import type { UserGoal } from "@prisma/client";

type Activities = {
  caloriesConsumed?: number;
  caloriesBurned?: number;
  sleepTracking?: number;
  hydration?: number;
  goal?: UserGoal;
  TDEE?: number;
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
    {
      url: "/api/handler/characteristics",
      methodType: "getUserTDEE",
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
  const hydrationNeeds = results[2] ||0;
  const sleepTracking = results[3] ||0;
  const TDEE = results[4] ||0;
  return {
    caloriesBurned,
    caloriesConsumed,
    sleepTracking,
    hydrationNeeds,
    TDEE
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
      const userGoal = axios.get("/api/handler/goal").then((res) => {
        if (res.status === 200 && res.data.success) {
          return setPageData((prev) => ({
            ...prev,
            goal: res.data.data,
          }));
        }
      });
      setPageData(data);
    };

    fetchData();
  }, []);

  const fetchResult = () => [
    {
      title: "Calories Consumed",
      value: pageData?.caloriesConsumed || 0,
      parameter: "Kcal",
      target: parseFloat(String(pageData?.TDEE)).toFixed(2) || 0,
    },
    {
      title: "Calories Burned",
      value: pageData?.caloriesBurned || 0,
      parameter: "Kcal",
      target: parseFloat(String(pageData?.goal?.deficitPerDay)).toFixed(2) || 0,
    },
    {
      title: "Sleep Tracking",
      value: pageData?.sleepTracking || 0,
      parameter: "Jam",
      target: 8
    },
    {
      title: "Hydration",
      value: pageData?.hydration || 0,
      parameter: "L",
      target: pageData?.goal?.hydrationNeeds || 0,
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
            <p className="text-4xl font-bold">{item.value} / <span className="text-2xl">{item?.target}</span></p> 
            <p className="text-xl"> {item.parameter}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
