"use client";
import { useSession } from "next-auth/react";
import { UserCircle, TrendingUpIcon, TrendingDownIcon } from "lucide-react";

type OverviewProps = {
  currentWeight?: number;
  bmi?: number;
  bodyFatPercentage?: number;
  targetWeight?: number;
  weightDiffPercent?: number | string;
  goal?: string;
};

export default function Overview({ pageData }: { pageData: OverviewProps }) {
  const { data: session } = useSession();
  const user = session?.user;

  const bmiStatus = {
    category: "",
    color: "",
  };

  if (pageData?.bmi) {
    if (pageData.bmi < 18.5) {
      bmiStatus.category = "Underweight";
      bmiStatus.color = "bg-red-500/40";
    } else if (pageData.bmi >= 18.5 && pageData.bmi < 24.9) {
      bmiStatus.category = "Normal";
      bmiStatus.color = "bg-green-500/40";
    } else if (pageData.bmi >= 25 && pageData.bmi < 29.9) {
      bmiStatus.category = "Overweight";
      bmiStatus.color = "bg-yellow-500/40";
    } else if (pageData.bmi >= 30) {
      bmiStatus.category = "Obesity";
      bmiStatus.color = "bg-red-500/40";
    }
  }

  return (
    <div className="w-full h-full ">
      <div className="w-full h-auto bg-green-200 dark:bg-[#1B4242]/70 dark:text-white rounded-lg shadow-md border dark:border-white/50 p-4 flex flex-col gap-4">
        <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col w-full p-3 gap-5 items-center">
          <div className="bg-green-500/80 dark:bg-[#5C8374] h-28 w-28 rounded-full">
            <UserCircle className="w-full h-full dark:text-white" />
          </div>
          <div className="flex flex-col">
            <p className="text-lg text-slate-600 dark:text-gray-300">
              {user?.username}
            </p>
            <h1 className="text-4xl font-bold dark:text-white mb-3">
              {user?.name}
            </h1>
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-2">
          <div className="w-full bg-green-300/60 dark:bg-[#1B4242] dark:text-white rounded-lg shadow-md p-4 border border-white/50">
            <h2 className="text-lg font-bold">Weight</h2>
            <p>{parseFloat(String(pageData?.currentWeight)).toFixed(2)} Kg</p>
          </div>
          <div className="w-full  bg-green-300/60 dark:bg-[#1B4242] dark:text-white  rounded-lg shadow-md p-4 border border-white/50">
            <h2 className="text-lg font-bold">Goal</h2>
            <p>{pageData?.targetWeight} Kg</p>
          </div>
          <div className="w-full  bg-green-300/60 dark:bg-[#1B4242] dark:text-white rounded-lg shadow-md p-4 border border-white/50">
            <h2 className="text-lg font-bold">Body Fat</h2>
            <p>
              {pageData?.bodyFatPercentage &&
                parseFloat(String(pageData?.bodyFatPercentage)).toFixed(2)}{" "}
              %
            </p>
          </div>
          <div className="w-full h-full bg-green-300/60 dark:bg-[#1B4242] dark:text-white  rounded-lg border border-white/50 shadow-md p-4 flex flex-row gap-2 lg:col-span-2 items-center">
            <div className="flex flex-col h-fit">
              <h2 className="text-lg font-bold">BMI</h2>
              <div className="flex w-full h-full items-start justify-between flex lg:flex-row md:flex-row sm:flex-row flex-col gap-2">
                <p>
                  {pageData?.bmi &&
                    parseFloat(String(pageData?.bmi)).toFixed(2)}
                </p>
                <div
                  className={`text-xs w-fit h-fit p-1 rounded-lg font-bold ${bmiStatus?.color}`}
                >
                  <p className="text-center px-3">{bmiStatus?.category}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-green-300/60 dark:bg-[#1B4242] dark:text-white rounded-lg shadow-md p-4 border border-white/50 lg:col-span-1 col-span-2">
            <div className="flex flex-row gap-4">
              {pageData?.goal === "surplus" ? (
                <TrendingUpIcon className="w-6 h-6 dark:text-white" />
              ) : (
                <TrendingDownIcon className="w-6 h-6 dark:text-white " />
              )}
              {pageData?.goal === "surplus" ? (
                <p className="text-lg font-bold">Surplus</p>
              ) : (
                <p className="text-lg font-bold">Deficit</p>
              )}
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">Progress</h2>
              <p>{pageData?.weightDiffPercent}% </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
