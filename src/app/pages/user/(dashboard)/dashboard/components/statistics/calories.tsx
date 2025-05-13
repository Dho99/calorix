"use client";

import { StatsProps } from "../stats";
import { FlameIcon } from "lucide-react";
import { ChartConfig } from "@/components/ui/chart";
import StatisticChart from "./components/chart";

export default function Calories({
  pageData,
}: {
  pageData: StatsProps["groupedActivity"];
}) {
  const chartData = pageData;
  const chartConfig = {
    data: {
      label: "Calories Burned",
      color: "oklch(80.7% 0.154 150.069)",
    },
  } satisfies ChartConfig;

  return (
    <div className="w-full h-full bg-green-200 dark:bg-[#1B4242] dark:text-white  border border-white/50 rounded-lg shadow-md p-4 flex flex-col gap-2">
      <div className="flex flex-row gap-5 items-center">
        <div className="bg-green-300 dark:bg-white/10 rounded p-2 w-fit ">
          <FlameIcon className="dark:text-white w-14 h-14" />
        </div>
        <h2 className="lg:text-xl text-3xl font-bold">Calories Burned</h2>
      </div>
      <div className="h-full w-full border py-2">
        <StatisticChart chartConfig={chartConfig} chartData={chartData} />
      </div>
    </div>
  );
}
