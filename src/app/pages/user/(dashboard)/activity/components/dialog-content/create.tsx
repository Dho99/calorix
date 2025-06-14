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
import { Input } from "@/components/ui/input";

export default function AddActivityContent({
  setDialogProps,
  fetchActivities,
}: {
  setDialogProps: React.Dispatch<
    React.SetStateAction<{
      content?: React.ReactNode;
    } | null>
  >;
  fetchActivities: () => Promise<void>;
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
        activityData: activityInput,
      };
    } else if (category === "USER_HYDRATION") {
      data = {
        waterIntake: formData.get("waterIntake"),
      }
    }

    data = { ...data, title: formData.get("title") };

    const urlParams = new URLSearchParams({
      category: category as string,
      type: "create",
    });
    setDialogProps(null);
    axios
      .post(`/api/handler/activities/user?${urlParams.toString()}`, {
        data: JSON.stringify(data),
      })
      .then((res) => {
        if (res.data.success) {
          fetchActivities();
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
        duration: number;
      }[]
  >([]);


  function changeInputCategory(value: string) {
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
            <SleepForm isEdit={true} />
          ) : categoryInput === "FOOD_LOG" ? (
            <FoodForm isEdit={true} />
          ) : categoryInput === "USER_HYDRATION" ? (
            <HydrationForm isEdit={true} />
          ) : categoryInput === "PHYSICAL_ACTIVITY" ? (
            <ActivityForm setActivityInput={setActivityInput} isEdit={true} activityInput={activityInput} />
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
