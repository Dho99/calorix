import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SleepForm from "./form/sleep";
import FoodForm from "./form/food";
import HydrationForm from "./form/hydration";
import ActivityForm from "./form/activity";
import type { UserActivites } from "@/app/utils/lib/types/user";
import { Input } from "@/components/ui/input";

export default function AddActivityContent({
  setDialogProps,
  setActivities,
}: {
  setDialogProps: React.Dispatch<
    React.SetStateAction<{
      content?: React.ReactNode;
    } | null>
  >;
  setActivities: React.Dispatch<React.SetStateAction<UserActivites[] | null>>;
}): React.ReactNode {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const category = formData.get("category");

    let data;

    if (category === "SLEEP_TRACKER") {
      data = {
        duration: formData.get("duration"),
        category: category,
      };
    } else if (category === "FOOD_LOG") {
      data = {
        foodName: formData.get("foodName"),
        calories: formData.get("calories"),
        mealType: formData.get("mealType"),
        category: category,
      };
    } else if (category === "PHYSICAL_ACTIVITY") {
      data = {
        activityName: activityInput?.name,
        calories_per_hour: activityInput?.calories_per_hour,
        duration: formData.get("duration"),
      };
    }

    data = { ...data, title: formData.get("title") };

    const urlParams = new URLSearchParams({
      category: category as string,
      type: "create",
    });
    axios
      .post(`/api/handler/activities/user?${urlParams.toString()}`, {
        data: JSON.stringify(data),
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.data);
          setDialogProps(null);
          setActivities((prev) => {
            if (category === "SLEEP_TRACKER") {
              return [
                {
                  ...res.data.data,
                  sleepTracker: {
                    duration: res.data.data.sleepTracker.duration,
                  },
                },
                ...(prev || []),
              ];
            } else if (category === "FOOD_LOG") {
              return [
                {
                  ...res.data.data,
                  foodLog: {
                    foodName: res.data.data.foodLog.foodName,
                    calories: res.data.data.foodLog.calories,
                    mealType: res.data.data.foodLog.mealType,
                  },
                  ...(prev || []),
                },
              ];
            }

            return prev || []; // Ensure a valid return value
          });
        } else {
          console.log("failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [categoryInput, setCategory] = useState<string | null>(null);
  const [activityInput, setActivityInput] = useState<{
    name: string;
    calories_per_hour: number;
  } | null>(null);

  function changeInputCategory(value: string) {
    console.log("value", value);
    if (value === "") {
      setCategory(null);
    }
    setCategory(value);
  }

  return (
    <form className="inline-flex flex-col gap-5" onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>Tambah Aktivitas</DialogTitle>
        <DialogDescription>
          Silahkan isi data aktivitas yang ingin anda tambahkan
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-5 p-5 m-0 border rounded-lg">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 ">
            <label htmlFor="activity-name" className="text-white">
              Pilih Kategori Aktivitas
            </label>
            <Select name="category" onValueChange={changeInputCategory}>
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

          <div className="flex flex-col gap-3 ">
            <label htmlFor="activity-name" className="text-white">
              Masukkan Nama Aktivitas
            </label>

            <Input
              name="title"
              type="text"
              required
              placeholder="Insert Title"
            ></Input>
          </div>

          {categoryInput === "SLEEP_TRACKER" ? (
            <SleepForm data={null} />
          ) : categoryInput === "FOOD_LOG" ? (
            <FoodForm data={null} />
          ) : categoryInput === "USER_HYDRATION" ? (
            <HydrationForm />
          ) : categoryInput === "PHYSICAL_ACTIVITY" ? (
            <ActivityForm onSelect={(activity) => setActivityInput(activity)} />
          ) : (
            <></>
          )}
        </div>
      </div>
      <DialogFooter>
        <Button
          variant="outline"
          type="button"
          className="bg-transparent"
          onClick={() => {
            setDialogProps(null);
          }}
        >
          Batal
        </Button>
        <Button
          type="submit"
          variant={"outline"}
          className="bg-[#9EC8B9]/50 hover:bg-[#9EC8B9] hover:text-black"
        >
          Simpan
        </Button>
      </DialogFooter>
    </form>
  );
}
