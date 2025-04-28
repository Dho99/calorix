"use client";

import type { UserActivites } from "@/app/utils/lib/types/user";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ActivityTable({
  activitiesProps,
}: {
  activitiesProps: UserActivites | null;
}) {
  const [activities, setActivities] = useState<UserActivites | null>(
    activitiesProps
  );

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
    <div className="bg-white/2 border rounded-lg shadow-lg p-5 w-full h-auto flex flex-col gap-5">
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
            <Button variant="outline" className="bg-white/3 text-white">
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
      <Table className="text-white">
        <TableCaption>A list of your activities.</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="text-white text-center">Kategori</TableHead>
            <TableHead className="text-white text-center">Durasi</TableHead>
            <TableHead className="text-white text-center">
              Perubahan pada Tubuh
            </TableHead>
            <TableHead className="text-white text-center">Log Date</TableHead>
            <TableHead className="text-white text-center">Detail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities ? (
            Array.isArray(activities) &&
            activities.map((activity, key) => (
              <TableRow key={key}>
                <TableCell className="font-medium">
                  {activity.invoice}
                </TableCell>
                <TableCell>{activity.paymentStatus}</TableCell>
                <TableCell>{activity.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {activity.totalAmount}
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
          {/* {activities?.map((activity, key) => (
            <TableRow key={key}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
}
