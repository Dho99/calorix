"use client";

import type { UserActivites } from "@/app/utils/lib/types/user";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DetailActivity({
  activity,
  setDialogProps,
}: {
  activity: UserActivites;
  setDialogProps: React.Dispatch<
    React.SetStateAction<{ content?: React.ReactNode } | null>
  >;
}) {
  const [pageState, setPageState] = useState<{
    edit: boolean;
    pageData: null | UserActivites;
  }>({
    edit: false,
    pageData: null,
  });

  return (
    <form className="inline-flex flex-col gap-5">
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
            <Select name="category" defaultValue={activity.category}>
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
              Masukkan Durasi
            </label>
            <Input
              name="duration"
              type="number"
              placeholder="Insert Duration"
            ></Input>
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" type="button" className="bg-transparent" onClick={() => {setDialogProps(null)}}>
          Batal
        </Button>
        <Button
          type={pageState.edit ? "button" : "submit"}
          variant={"outline"}
          className="bg-[#9EC8B9]/50 hover:bg-[#9EC8B9] hover:text-black"
          onClick={() => {
            if (pageState.edit) {
              setPageState((prev) => ({
                ...prev,
                edit: false,
              }));
            }
          }}
        >
          Simpan
        </Button>
      </DialogFooter>
    </form>
  );
}
