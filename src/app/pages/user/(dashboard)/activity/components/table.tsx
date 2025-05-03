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
];

export default function ActivityTable({
  activitiesProps,
  setDialogProps,
  setActivities,
}: {
  activitiesProps: UserActivites[] | null;
  setDialogProps: React.Dispatch<
    React.SetStateAction<{
      content?: React.ReactNode;
    } | null>
  >;
  setActivities: React.Dispatch<React.SetStateAction<UserActivites[] | null>>;
}) {
  return (
    <div className="flex flex-col gap-3">
      {Array.isArray(activitiesProps) &&
        activitiesProps.map((activity, key) => (
          <DialogTrigger asChild key={key}>
            <div
              className="w-full flex flex-row gap-2 border  border-white bg-white/2 rounded-lg py-2 px-4 text-white py-4 hover:bg-[#9EC8B9]/50 hover:cursor-pointer transition-all duration-200 ease-in-out justify-between items-center"
              onClick={() =>
                setDialogProps({
                  content: (
                    <DetailActivity
                      activity={activity}
                      setDialogProps={setDialogProps}
                      setActivities={setActivities}
                    />
                  ),
                })
              }
            >
              <div>
                {activity.category === "FOOD_LOG" ? (
                  <UtensilsCrossedIcon className="text-white w-10 h-10" />
                ) : activity.category === "USER_HYDRATION" ? (
                  <BeerIcon className="text-white w-10 h-10" />
                ) : activity.category === "SLEEP_TRACKER" ? (
                  <BedIcon className="text-white w-10 h-10" />
                ) : (
                  <BicepsFlexedIcon className="text-white w-10 h-10" />
                )}
              </div>
              <div>
                <h1 className="text-white text-2xl font-semibold">
                  {activity.category === "FOOD_LOG"
                    ? "Makan"
                    : activity.category === "USER_HYDRATION"
                    ? "Minum"
                    : activity.category === "SLEEP_TRACKER"
                    ? "Tidur"
                    : "Aktivitas Fisik"}
                </h1>
                <p className="text-white/50 text-sm">
                  {formatDate(activity.createdAt)}
                </p>
              </div>
              <div>
                {activity.category === "FOOD_LOG"
                  ? `${activity?.foodLog?.calories} Kalori `
                  : activity.category === "USER_HYDRATION"
                  ? `${activity?.userHydration?.waterIntake} ml`
                  : activity.category === "SLEEP_TRACKER"
                  ? `${parseFloat(
                      String(activity?.sleepTracker?.duration)
                    ).toFixed(2)} Jam`
                  : `${activity?.physicalActivityLog?.duration} Jam`}
              </div>
            </div>
          </DialogTrigger>
        ))}
    </div>
  );
}
