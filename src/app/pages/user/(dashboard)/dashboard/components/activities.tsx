"use client";

import { FlameIcon } from "lucide-react";

export type ActivitiesProps = {
  title?: string | number;
  value?: number | string;
  target?: number | string;
  parameter?: string | number;
  unit?: string;
  icon?: typeof FlameIcon;
};

export type CaloriesByMonthProps = {
  caloriesBurnedByMonth: number;
  targetBurnedCaloriesByMonth: number;
};

export default function Activities({
  pageData,
}: {
  pageData: ActivitiesProps[];
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {pageData.map((item, index) => (
        <div
          key={index}
          className={`w-full h-full bg-green-200 dark:bg-[#1B4242] dark:text-white rounded-lg shadow-md p-4 flex flex-col ${index === pageData.length - 1 ? 'col-span-2' : ''} border border-white/50`}
        >
          {
            item?.icon && (
              <div className="p-2 bg-green-300/60 dark:bg-white/10 rounded mb-2 w-fit">
              <item.icon className="w-12 h-12 dark:text-white mb-2" />
              </div>
            )
          }
          <h2 className="text-lg font-bold">{item.title}</h2>
          <div className="flex flex-wrap items-baseline gap-2">
            <p className="text-3xl font-bold">
              {item.value || 0} {item?.unit}{" "}
   
            </p>
            <p className="text-xl flex flex-wrap items-baseline">/ <span className="text-2xl me-1">{Number(item?.target) || 0}</span>{item.parameter}</p>
          </div>
          {/* <div className="flex flex-wrap gap-2 items-baseline">
       
          </div> */}
        </div>
      ))}
    </div>
  );
}
