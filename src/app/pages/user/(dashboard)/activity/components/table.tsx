"use client";

import type { UserActivites } from "@/app/utils/lib/types/user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SearchIcon,
  BedIcon,
  FunnelIcon,
  UtensilsCrossedIcon,
  BeerIcon,
  BicepsFlexedIcon
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/app/utils/api/date";
import DetailActivity from "./dialog-content/detail";
import { DialogTrigger } from "@/components/ui/dialog";

export default function ActivityTable({
  activitiesProps,
  setDialogProps,
  setActivities
}: {
  activitiesProps: UserActivites[] | null;
  setDialogProps: React.Dispatch<
    React.SetStateAction<{
      content?: React.ReactNode;
    } | null>
  >;
  setActivities: React.Dispatch<
    React.SetStateAction<UserActivites[] | null>
  >;
}) {
  const dropdownMenuItems = [
    {
      title: "Food Log",
      icon: <SearchIcon />,
      onClick: () => {
        console.log("Food Log");
      },
    },
    {
      title: "Water Intake",
      icon: <SearchIcon />,
      onClick: () => {
        console.log("Water Intake");
      },
    },
    {
      title: "Physical Activity",
      icon: <SearchIcon />,
      onClick: () => {
        console.log("Physical Activity");
      },
    },
    {
      title: "Sleep Log",
      icon: <SearchIcon />,
      onClick: () => {
        console.log("Sleep Log");
      },
    },
  ];

  return (
    <div className="bg-white/2 border border-white rounded-lg shadow-lg p-5 w-full h-auto flex flex-col gap-5">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex w-full items-center max-w-md">
          <Input type="email" placeholder="Email" className="rounded-e-none " />
          <Button
            type="submit"
            className="rounded-s-none bg-[#9EC8B9]/10 text-white hover:bg-[#9EC8B9]/50 flex flex-row gap-x-3 text-base w-24 border border-s-0"
          >
            <SearchIcon />
            Cari
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="bg-white/3 text-white space-x-2"
            >
              <FunnelIcon />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-w-56 bg-black/20 backdrop-blur-xs text-white">
            <DropdownMenuLabel>Filter By Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {dropdownMenuItems.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={item.onClick}
                  className="flex flex-row items-center gap-x-2 hover:bg-white/5 hover:cursor-pointer"
                >
                  {item.icon}
                  {item.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <button className="bg-white/5 text-white rounded-lg px-4 border py-1">Filter</button> */}
      </div>
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
                {activity.category === "FOOD_LOG" ? `${activity?.foodLog?.calories} Kalori `: activity.category === "USER_HYDRATION"
                  ? `${activity?.userHydration?.waterIntake} ml`
                  : activity.category === "SLEEP_TRACKER"
                  ? `${(activity?.sleepTracker?.duration)} Menit`
                  : `${activity?.physicalActivityLog?.duration} Jam`}
                
              </div>
            </div>
            </DialogTrigger>
          ))}
      </div>
      {/* <Table className="text-white">
        <TableCaption>A list of your activities.</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="text-white text-center">Kategori</TableHead>
            <TableHead className="text-white text-center">Durasi</TableHead>
            <TableHead className="text-white text-center">
              Perubahan pada Tubuh
            </TableHead>
            <TableHead className="text-white text-center">Log Date</TableHead>
            <TableHead className="text-white text-center">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activitiesProps ? (
            Array.isArray(activitiesProps) &&
            activitiesProps.map((activity, key) => (
              <TableRow key={key} className="text-center">
                <TableCell className="font-medium">
                  {activity.foodLogId
                    ? "Makan"
                    : activity.waterIntakeId
                    ? "Minum"
                    : activity.physicalActivityId
                    ? "Aktivitas Fisik"
                    : "Tidur"}
                </TableCell>
                <TableCell>
                  {(activity.sleepTrackerId
                    ? activity.sleepTracker.duration / 60
                    : activity.physicalActivityId &&
                      activity.physicalActivity.duration / 60
                  )}{" "}
                  Jam
                </TableCell>
                <TableCell>{formatDate(activity.createdAt)}</TableCell>
                <TableCell>{formatDate(activity.createdAt)}</TableCell>
                <TableCell className="flex justify-center">
                  <DialogTrigger asChild>
                  <Button
                    className="flex flex-row space-x-2 bg-black/20 hover:text-black hover:bg-[#9EC8B9]"
                    variant={"outline"}
                    onClick={() => setDialogProps({ content: <DetailActivity activity={activity} setDialogProps={setDialogProps} /> })}
                  >
                    <NotepadTextIcon className="text-center" />
                    Info
                  </Button>
                  </DialogTrigger>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center justify-center">
                <div className="flex flex-col gap-5 w-full h-auto py-10">
                  <h1 className="text-white text-2xl font-semibold items-center">
                    No Activities Found
                  </h1>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table> */}
    </div>
  );
}
