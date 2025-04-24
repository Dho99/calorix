"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";
import { Dialog } from "@/components/ui/dialog";
import { DashboardDialog } from "./components/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Overview from "./components/overview";
import Activities from "./components/activities";
import { Dispatch } from "react";

export type DashboardComponentPageProps = {
  setDialog: Dispatch<{
    open: boolean;
    title: string;
    message: string;
    buttons?: React.ReactNode;
  } | null>;
}


export default function Page() {
  const { data } = useSession();

  const router = useRouter();

  const [dialog, setDialog] = useState<{
    open: boolean;
    title: string;
    message: string;
    buttons?: React.ReactNode;
  } | null>(null);

  return (
    <Dialog open={dialog?.open}>
      {dialog && (
        <DashboardDialog
          title={dialog.title}
          message={dialog.message}
          buttons={dialog.buttons}
        />
      )}
      <div className="w-full h-dvh flex flex-row gap-2 my-20 px-20">
        <div className="w-full h-full flex flex-col gap-2">

          <h1 className="text-4xl font-bold text-white mb-3">Overview</h1>
          <Overview setDialog={setDialog}/>


          <Activities setDialog={setDialog}/>
        </div>

        <div className="w-full h-full flex flex-col gap-2">
          <h1 className="text-white text-4xl font-bold mb-3">Stats</h1>
          <div className="grid grid-cols-2 h-full w-full gap-2">
            <div className="w-full h-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold">Statistik</h2>
              <p>Statistik pengguna dan data lainnya.</p>
            </div>
            <div className="w-full h-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold">Pengaturan</h2>
              <p>Pengaturan akun dan preferensi.</p>
            </div>
            <div className="w-full h-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold">Statistik</h2>
              <p>Statistik pengguna dan data lainnya.</p>
            </div>
            <div className="w-full h-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold">Pengaturan</h2>
              <p>Pengaturan akun dan preferensi.</p>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
