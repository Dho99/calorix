"use client";

import { useSession } from "next-auth/react";
import { Dialog } from "@/components/ui/dialog";
import { DashboardDialog } from "./components/dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Overview from "./components/overview";
import Activities from "./components/activities";
import Stats from "./components/stats";

export type DashboardComponentPageProps = {
    open: boolean;
    title: string;
    message: string;
    buttons?: React.ReactNode;
} | null


export default function Page() {

  const [dialog, setDialog] = useState<DashboardComponentPageProps | null>(null);

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
          <Overview setDialog={setDialog}/>
          <Activities setDialog={setDialog}/>
        </div>

        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-row gap-x-2 w-full items-baseline">
            <h1 className="text-white text-4xl font-bold mb-3">Statistic</h1>
            <p className="text-white">This Month</p>
          </div>
          <Stats setDialog={setDialog}/>
        </div>
      </div>
    </Dialog>
  );
}
