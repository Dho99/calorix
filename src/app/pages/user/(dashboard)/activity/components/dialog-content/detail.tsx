"use client";

import type { UserActivites } from "@/app/utils/lib/types/user";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ActivityForm from "./form/activity";
import FoodForm from "./form/food";
import HydrationForm from "./form/hydration";
import SleepForm from "./form/sleep";
import axios from "axios";

export default function DetailActivity({
  activity,
  setDialogProps,
  fetchActivities,
}: {
  activity: UserActivites;
  setDialogProps: React.Dispatch<
    React.SetStateAction<{ content?: React.ReactNode } | null>
  >;
  fetchActivities: () => Promise<void>;
}) {
  const [pageState, setPageState] = useState<{
    edit: boolean;
    pageData: null | UserActivites;
  }>({
    edit: false,
    pageData: null,
  });

  const [activityInput, setActivityInput] = useState<{ //eslint-disable-line @typescript-eslint/no-unused-vars
    name: string;
    calories_per_hour: number;
  } | null>(null);


  function deleteActivity(id: string) {
    const urlParams = new URLSearchParams({
      type: "delete",
      id: id,
    });

    axios
      .delete(`/api/handler/activities/user?${urlParams.toString()}`)
      .then((res) => {
        if (res.data.success) {
          fetchActivities();
          setDialogProps(null);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function submitUpdateActivity(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const urlParams = new URLSearchParams({
      activityId: activity.id,
    });

    if(activityInput) {
      formData.append("activityName", activityInput.name);
      formData.append("calories_per_hour", activityInput?.calories_per_hour.toString());
    }
    
    const data = Object.fromEntries(formData.entries());
    

    axios
      .put(`/api/handler/activities/user?${urlParams.toString()}`, {
        ...data,
        ...activityInput,
      })
      .then((res) => {
        if (res.data.success) {
          fetchActivities();
          setDialogProps(null);
          setPageState({edit: false, pageData: null});
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <form className="flex flex-col gap-5 w-full overflow-auto" onSubmit={submitUpdateActivity}>
      <DialogHeader>
        <DialogTitle>Detail dan Catatan Aktivitas Anda</DialogTitle>
        <DialogDescription>
          Data aktivitas dan catatan yang disimpan di dalam sistem
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-5 p-5 m-0 border rounded-lg">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 ">
            <label htmlFor="activity-name" className="text-white">
              Pilih Kategori Aktivitas
            </label>
            <Select
              name="category"
              defaultValue={activity?.category}
              disabled={!!activity}
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder="Choose Categories"
                  className="text-white"
                />
              </SelectTrigger>
              <SelectContent className="bg-[#1E1E2F]/30 backdrop-blur text-white">
                <SelectItem value="SLEEP_TRACKER">Tidur</SelectItem>
                <SelectItem value="FOOD_LOG">Makan</SelectItem>
                <SelectItem value="USER_HYDRATION">Minum</SelectItem>
                <SelectItem value="PHYSICAL_ACTIVITY">Beraktivitas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-3">
            <Label className="text-base">Nama Aktivitas</Label>
            <Input readOnly={!pageState?.edit} defaultValue={activity?.title}></Input>
          </div>
          {activity?.category === "SLEEP_TRACKER" ? (
            <SleepForm data={activity} isEdit={pageState?.edit} />
          ) : activity?.category === "FOOD_LOG" ? (
            <FoodForm data={activity} isEdit={pageState?.edit} />
          ) : activity?.category === "USER_HYDRATION" ? (
            <HydrationForm data={activity} isEdit={pageState?.edit} />
          ) : activity?.category === "PHYSICAL_ACTIVITY" ? (
              <ActivityForm data={activity} isEdit={pageState?.edit}/>
          ) : (
            <></>
          )}
        </div>
      </div>
      <DialogFooter className="flex flex-row gap-2 justify-between">
        <Button
          variant="default"
          type="button"
          className="me-auto bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
          onClick={() => {
            deleteActivity(activity.id);
          }}
        >
          Hapus
        </Button>
        <Button
          variant="outline"
          type="button"
          className="bg-transparent"
          onClick={() => {
            setDialogProps(null);
          }}
        >
          Tutup
        </Button>
        {
          activity?.category !== "PHYSICAL_ACTIVITY" ? (
            <Button
            type={pageState.edit ? "submit" : "button"}
            variant={"outline"}
            className="bg-[#9EC8B9]/50 hover:bg-[#9EC8B9] hover:text-black"
            onClick={(e) => {
              if (!pageState.edit) {
                e.preventDefault(); // Prevent form submission
                setPageState((prev) => ({
                  ...prev,
                  edit: true,
                }));
              }
            }}
          >
            {pageState.edit ? "Simpan" : "Edit"}
          </Button>
          ) : (null)
        }
      
      </DialogFooter>
    </form>
  );
}
