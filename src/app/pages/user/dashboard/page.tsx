"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";
import { Dialog } from "@/components/ui/dialog";
import { DashboardDialog } from "./components/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const { data } = useSession();

  const router = useRouter();

  const [dialog, setDialog] = useState<{
    open: boolean;
    title: string;
    message: string;
    buttons: React.ReactNode;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/handler/characteristics/${data?.user.id}`
        );
        console.log(response.data);
        if (!response.data.data) {
          setDialog({
            open: true,
            title: "Perhitungan",
            message: "Silahkan lakukan perhitungan terlebih dahulu",
            buttons: (
              <>
                <Button
                  variant="outline"
                  className="bg-[#092635] text-white hover:bg-[#092635] border-none"
                  onClick={() => {
                    router.push("/pages/user/calculate");
                  }}
                >
                  Hitung
                </Button>
              </>
            ),
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (data?.user?.id) fetchData();
  }, []); //eslint-disable-line

  const session = useSession();
  return (
    <Dialog open={dialog?.open}>
      {dialog && (
        <DashboardDialog
          title={dialog.title}
          message={dialog.message}
          buttons={dialog.buttons}
        />
      )}
      <div className="w-full h-dvh flex flex-row gap-2 p-20">
        <div className="w-full h-full flex flex-col gap-2">
          <div className="w-full h-full flex flex-col gap-2">
            <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
              <h1 className="text-xl font-bold">Dashboard</h1>
              <p>Selamat datang di dashboard kami!</p>
              <div className="w-full grid grid-cols-4 gap-2">
                <div className="w-full bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg font-bold">Statistik</h2>
                  <p>Statistik pengguna dan data lainnya.</p>
                </div>
                <div className="w-full bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg font-bold">Pengaturan</h2>
                  <p>Pengaturan akun dan preferensi.</p>
                </div>
                <div className="w-full bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg font-bold">Statistik</h2>
                  <p>Statistik pengguna dan data lainnya.</p>
                </div>
                <div className="w-full bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg font-bold">Pengaturan</h2>
                  <p>Pengaturan akun dan preferensi.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold">Statistik</h2>
              <p>Statistik pengguna dan data lainnya.</p>
            </div>
            <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold">Pengaturan</h2>
              <p>Pengaturan akun dan preferensi.</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full grid grid-cols-2 gap-2">
          <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">Statistik</h2>
            <p>Statistik pengguna dan data lainnya.</p>
          </div>
          <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">Pengaturan</h2>
            <p>Pengaturan akun dan preferensi.</p>
          </div>
          <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">Statistik</h2>
            <p>Statistik pengguna dan data lainnya.</p>
          </div>
          <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">Pengaturan</h2>
            <p>Pengaturan akun dan preferensi.</p>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
