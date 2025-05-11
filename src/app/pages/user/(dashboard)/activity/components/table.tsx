"use client";

import type { UserActivites } from "@/app/utils/lib/types/user";
import {
  SearchIcon,
  BedIcon,
  FunnelIcon,
  UtensilsCrossedIcon,
  BeerIcon,
  BicepsFlexedIcon,
} from "lucide-react";
import { formatDate } from "@/app/utils/api/date";
import DetailActivity from "./dialog-content/detail";
import { DialogTrigger } from "@/components/ui/dialog";

export const dropdownMenuItems = [
  {
    title: "Activity",
    group: "ACTIVITY",
    icon: <BicepsFlexedIcon />,
    child: [
      {
        title: "Food Log",
        icon: <SearchIcon />,
        category: "FOOD_LOG",
      },
      {
        title: "Water Intake",
        icon: <SearchIcon />,
        category: "USER_HYDRATION",
      },
      {
        title: "Physical Activity",
        icon: <SearchIcon />,
        category: "PHYSICAL_ACTIVITY",
      },
      {
        title: "Sleep Log",
        icon: <SearchIcon />,
        category: "SLEEP_TRACKER",
      },
    ],
  },
  {
    title: "Filter By Range",
    group: "FILTER",
    icon: <FunnelIcon />,
    child: [
      {
        title: "Today",
        icon: <SearchIcon />,
        category: "TODAY",
      },
      {
        title: "This Week",
        icon: <SearchIcon />,
        category: "THIS_WEEK",
      },
      {
        title: "This Month",
        icon: <SearchIcon />,
        category: "THIS_MONTH",
      },
      {
        title: "This Year",
        icon: <SearchIcon />,
        category: "THIS_YEAR",
      },
    ],
  }
];

export default function ActivityTable({
  activitiesProps,
  setDialogProps,
  fetchActivities,
}: {
  activitiesProps: UserActivites[] | null;
  setDialogProps: React.Dispatch<
    React.SetStateAction<{
      content?: React.ReactNode;
    } | null>
  >;
  fetchActivities: () => Promise<void>;
}) {
  return (
    <div className="flex flex-col gap-3">
      {Array.isArray(activitiesProps) ?
        activitiesProps.map((activity, key) => (
          <DialogTrigger asChild key={key}>
            <div
              className="w-full flex flex-row gap-2 border border-black dark:border-white bg-white/2 rounded-lg py-2 px-4 dark:text-white py-4 hover:bg-[#9EC8B9]/50 hover:cursor-pointer transition-all duration-200 ease-in-out justify-between items-center"
              onClick={() =>
                setDialogProps({
                  content: (
                    <DetailActivity
                      activity={activity}
                      setDialogProps={setDialogProps}
                      fetchActivities={fetchActivities}
                    />
                  ),
                })
              }
            >
              <div>
                {activity.category === "FOOD_LOG" ? (
                  <UtensilsCrossedIcon className="dark:text-white w-10 h-10" />
                ) : activity.category === "USER_HYDRATION" ? (
                  <BeerIcon className="dark:text-white w-10 h-10" />
                ) : activity.category === "SLEEP_TRACKER" ? (
                  <BedIcon className="dark:text-white w-10 h-10" />
                ) : (
                  <BicepsFlexedIcon className="dark:text-white w-10 h-10" />
                )}
              </div>
              <div>
                <h1 className="dark:text-white text-2xl font-semibold">
                  {activity?.title}
                </h1>
                <p className="text-black/50 dark:text-white/50 text-sm">
                  {formatDate(activity.createdAt)}
                </p>
              </div>
              <div className="lg:block md:block hidden">
                {activity.category === "FOOD_LOG"
                  ? `Menambah ${activity?.foodLog?.calories} Kalori `
                  : activity.category === "USER_HYDRATION"
                  ? `Meminum sebanyak ${activity?.userHydration?.waterIntake} ml`
                  : activity.category === "SLEEP_TRACKER"
                  ? `Menambah Jam tidur ${activity?.sleepTracker?.duration as number < 60 ? `${parseInt(String(activity?.sleepTracker?.duration))} Menit` : `${(parseFloat(String(activity?.sleepTracker?.duration)) / 60).toFixed(2)} Jam`} `
                  : `Membakar ${parseFloat(String(activity?.physicalActivityLog?.caloriesBurned)).toFixed(2)} Kalori`}
              </div>
            </div>
          </DialogTrigger>
        )) : (
          <div className="w-full flex flex-row gap-2 border border-white bg-white/2 rounded-lg py-2 px-4 dark:text-white py-4 hover:bg-[#9EC8B9]/50 hover:cursor-pointer transition-all duration-200 ease-in-out justify-between items-center">
            <p className="dark:text-white text-2xl font-semibold">Tidak ada data</p>
            <p className="dark:text-white/50 text-sm">Silahkan tambahkan data</p>  
          </div>
        )}
    </div>
  );
}
