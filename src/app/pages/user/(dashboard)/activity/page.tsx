"use client";

import React, { useEffect, useState } from "react";
import type { UserActivites } from "@/app/utils/lib/types/user";
import axios from "axios";
import ActivityTable from "./components/table";
import { CopyPlusIcon, Scroll } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ActivityDialog from "./components/dialog";
import AddActivityContent from "./components/dialog-content/create";
import { ScrollArea } from "@/components/ui/scroll-area"


export type DialogProps = {
  content?: React.ReactNode;
};

export default function Page() {
  const [activities, setActivities] = useState<UserActivites | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      await axios
        .get(
          "/api/handler/activities/user?type=getAllUserActivities&page=1&limit=10",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            setActivities(res.data.data);
          } else {
            setActivities(null);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchActivities();
  }, []);

  const [dialogProps, setDialogProps] = useState<DialogProps | null>(null);

  return (
    <Dialog>
      {dialogProps && (
        <DialogContent className="bg-black/50 border backdrop-blur-sm max-h-[90vh] text-white overflow-auto">
          <ActivityDialog dialogProps={dialogProps!} />
        </DialogContent>
      )}

      <div className="flex flex-col gap-5 w-full h-auto py-15">
        <div className="flex-row flex w-full items-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-2xl font-semibold">Aktivitas</h1>
            <p className="text-white">
              Berikut adalah aktivitas yang telah anda lakukan
            </p>
          </div>
          <DialogTrigger asChild>
            <button
              type="button"
              className="bg-[#9EC8B9]/10 hover:bg-[#9EC8B9]/50 transition-all transition-duration-400 py-2 px-4 border rounded-lg text-white shadow-lg ms-auto flex flex-row gap-4"
              onClick={() => {
                setDialogProps({
                  content: <AddActivityContent />,
                });
              }}
            >
              <CopyPlusIcon className="text-white" />
              Tambah Data
            </button>
          </DialogTrigger>
        </div>
        <ActivityTable activitiesProps={activities} />
      </div>
    </Dialog>
  );
}
