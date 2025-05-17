"use client";

import { Dialog } from "@/components/ui/dialog";
import { DashboardDialog } from "./components/dialog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Overview from "./components/overview";
import Activities from "./components/activities";
import Stats from "./components/stats";
import axios from "axios";
import { Button } from "@/components/ui/button";
import type { ActivitiesProps } from "./components/activities";
import type { StatsProps } from "./components/stats";
import type { PhysicalActivityLog } from "@/app/utils/lib/types/user";
import { FlameIcon, FootprintsIcon, BeerIcon, BedIcon, BeefIcon } from "lucide-react";
import Tips from "./components/tips";

export type DashboardComponentPageProps = {
  open: boolean;
  title: string;
  message: string;
  buttons?: React.ReactNode;
} | null;

export default function Page() {
  const router = useRouter();
  const [dialog, setDialog] = useState<DashboardComponentPageProps | null>(
    null
  );
  const [pageData, setPageData] = useState<{
    caloriesBurned: number;
    stepsGoal: number;
    stepsCount: number;
    tdeeData: number;
    hydrationNeeds: number;
    sleepTracker: number;
    caloriesConsumed: number;
    userCharacteristics: {
      currentWeight?: number;
      bmi?: number;
      bodyFatPercentage?: number;
    };
    goal: {
      stepNeeds: number;
      hydrationNeeds: number;
      goal: string;
      deficitPerDay: number;
      targetTime: number;
      targetWeight: number;
      maxDailyCalories: number;
    };
    activityData: PhysicalActivityLog[]
    weightDiffPercent: number;
    groupedActivities: StatsProps["groupedActivity"];
    groupedSteps: StatsProps["groupedSteps"];
    totalActivityTime: number;
    totalActivityCount: number;
    avgSleep: number;
    avgHydration: number;
    avgCaloriesEaten: number;
  } | null>(null);

  useEffect(() => {
    axios
      .get("/api/handler/dashboard")
      .then((response) => {
        const userCharacteristics = response.data.data.userCharacteristics;
        if (!userCharacteristics || userCharacteristics?.isDeleted) {
          setDialog({
            open: true,
            title: "Perhitungan",
            message: "Silahkan lakukan perhitungan terlebih dahulu",
            buttons: (
              <>
                <Button
                  variant="ghost"
                  className="bg-green-200/70 text-white border-none"
                  onClick={() => {
                    router.push("/pages/user/calculate");
                  }}
                >
                  Hitung
                </Button>
              </>
            ),
          });
          return;
        } else {
          setPageData(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setDialog({
          open: true,
          title: "Error",
          message: "Failed to fetch data",
          buttons: null,
        });
      });
    // }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const overviewData = {
      currentWeight: pageData?.userCharacteristics.currentWeight,
      targetWeight: pageData?.goal.targetWeight,
      bmi: pageData?.userCharacteristics.bmi,
      bodyFatPercentage: pageData?.userCharacteristics.bodyFatPercentage,
      weightDiffPercent: parseFloat(String(pageData?.weightDiffPercent)).toFixed(2),
      goal: pageData?.goal.goal,
  };

  const activitiesData: ActivitiesProps[] = [
    {
      title: "Kalori Terbakar Harian",
      value: parseFloat(String(pageData?.caloriesBurned)).toFixed(2),
      target: parseFloat(String(pageData?.goal.deficitPerDay)).toFixed(2),
      parameter: "Kkal",
      icon: FlameIcon,
    },
    {
      title: "Daily Steps",
      value: Number(pageData?.stepsCount).toFixed(0),
      target: pageData?.goal.stepNeeds,
      parameter: "Langkah",
      icon: FootprintsIcon
    },
    {
      title: "Kebutuhan Cairan Harian",
      value: pageData?.hydrationNeeds,
      target: parseFloat(String(pageData?.goal.hydrationNeeds)).toFixed(2),
      parameter: "Liter",
      unit: "ml",
      icon: BeerIcon,
      avg: pageData?.avgHydration,
    },
    {
      title: "Waktu Tidur Harian",
      value: pageData?.sleepTracker,
      target: 8,
      parameter: "Jam",
      icon: BedIcon,
      avg: pageData?.avgSleep,
    },
    {
      title: "Kalori Masuk Harian",
      value: pageData?.caloriesConsumed,
      target: Number(pageData?.goal?.maxDailyCalories).toFixed(2),
      parameter: "Kalori",
      icon: BeefIcon,
      avg: pageData?.avgCaloriesEaten,
    },
  ];

  const statsData: StatsProps = {
    steps: {
      stepsCount: pageData?.stepsCount,
      stepsGoal: pageData?.goal?.stepNeeds
    },
    activityData: pageData?.activityData,
    groupedActivity: pageData?.groupedActivities || [],
    targetTime: pageData?.goal?.targetTime,
    groupedSteps: pageData?.groupedSteps || [],
    totalActivityTime: pageData?.totalActivityTime,
    totalActivityCount: pageData?.activityData.length || 0,
  } 

  return (
    <Dialog open={dialog?.open}>
      {dialog && (
        <DashboardDialog
          title={dialog.title}
          message={dialog.message}
          buttons={dialog.buttons}
        />
      )}
      <div className="w-full lg:flex lg:flex-row grid grid-cols-1 gap-2 gap-y-10 pb-5 dark:text-white">
        <div className="w-full h-full flex flex-col gap-2">
          <h1 className="text-4xl font-bold dark:text-white mb-3">Overview</h1>
          <Overview pageData={overviewData}/>
          <Activities pageData={activitiesData}/>
        </div>

        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex lg:flex-row md:flex-row flex-col gap-x-2 w-full items-baseline mb-3">
            <h1 className="dark:text-white text-4xl font-bold">Statistic</h1>
            <p className="dark:text-white">This Month</p>
          </div>
          <Stats pageData={statsData}/>
          <Tips />
        </div>
      </div>
    </Dialog>
  );``
}
