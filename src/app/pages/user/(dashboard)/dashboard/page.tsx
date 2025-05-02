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
    stepsData: number;
    tdeeData: number;
    hydrationNeeds: number;
    sleepTracker: number;
    foodLog: number;
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
    };
    activityData: PhysicalActivityLog["duration"][]
  } | null>(null);

  useEffect(() => {
    axios
      .get("/api/handler/dashboard")
      .then((response) => {
        const userCharacteristics = response.data.data.userCharacteristics;
        if (!userCharacteristics) {
          setDialog({
            open: true,
            title: "Perhitungan",
            message: "Silahkan lakukan perhitungan terlebih dahulu",
            buttons: (
              <>
                <Button
                  variant="outline"
                  className="bg-[#092635] text-white hover:bg-[#092635] border-none"
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
  }, []);

  const overviewData = {
      currentWeight: pageData?.userCharacteristics.currentWeight,
      targetWeight: pageData?.goal.targetWeight,
      bmi: pageData?.userCharacteristics.bmi,
      bodyFatPercentage: pageData?.userCharacteristics.bodyFatPercentage,
  };

  const activitiesData: ActivitiesProps[] = [
    {
      title: "Calories Burned",
      value: pageData?.caloriesBurned,
      target: parseFloat(String(pageData?.goal.deficitPerDay)).toFixed(2),
      parameter: "Kkal",
    },
    {
      title: "Steps",
      value: pageData?.stepsData,
      target: pageData?.goal.stepNeeds,
      parameter: "Langkah",
    },
    {
      title: "Hydration",
      value: pageData?.hydrationNeeds,
      target: pageData?.goal.hydrationNeeds,
      parameter: "Liter",
    },
    {
      title: "Sleep",
      value: pageData?.sleepTracker,
      target: 8,
      parameter: "Jam",
    },
  ];

  const statsData: StatsProps = {
    steps: {
      stepsCount: pageData?.stepsData,
      stepsGoal: pageData?.goal?.stepNeeds
    },
    activityData: pageData?.activityData
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
      <div className="w-full h-dvh lg:flex lg:flex-row grid grid-cols-1 gap-2 gap-y-10 py-15">
        <div className="w-full h-full flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-white mb-3">Overview</h1>
          <Overview pageData={overviewData}/>
          <Activities pageData={activitiesData}/>
        </div>

        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-row gap-x-2 w-full items-baseline">
            <h1 className="text-white text-4xl font-bold mb-3">Statistic</h1>
            <p className="text-white">This Month</p>
          </div>
          <Stats pageData={statsData}/>
        </div>
      </div>
    </Dialog>
  );
}
