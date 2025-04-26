"use client";
import axios from "axios";
import { Dispatch, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import type { DashboardComponentPageProps } from "../page";

type OverviewProps = {
  currentWeight: string;
  targetWeight: string;
  bmi: string;
  bodyFatPercentage: string;
};

export default function Overview({
  setDialog,
}: {
  setDialog: Dispatch<DashboardComponentPageProps>;
}) {
  const router = useRouter();
  const { data } = useSession();
  const [characteristics, setCharacteristics] = useState<OverviewProps | null>(
    null
  );

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`/api/handler/characteristics/${data?.user.id}`)
        .then((response) => {
          if (response.data.status === 404) {
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

          if (response.data.status === 200) {
            setCharacteristics(response.data.data);
          }
        })
        .catch((error) => {
          console.log("Error fetching characteristics:", error);
        });
    };
    if (data) fetchData();
  }, [data]); //eslint-disable-line

  return (
    <div className="w-full h-auto flex flex-col gap-2">
      <div className="w-full h-auto bg-[#1B4242] text-white rounded-lg shadow-md p-4">
        <div className="flex flex-row w-full p-3 gap-5 items-center">
          <div className="bg-[#5C8374] h-28 w-28 rounded-full">
            <UserCircle className="w-full h-full text-white" />
          </div>
          <div className="flex flex-col">
            <p className="text-lg text-gray-300">{data?.user?.username}</p>
            <h1 className="text-4xl font-bold text-white mb-3">
              {data?.user?.name}
            </h1>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-2">
          <div className="w-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">Weight</h2>
            <p>{characteristics?.currentWeight} Kg</p>
          </div>
          <div className="w-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">Goal</h2>
            <p>{characteristics?.targetWeight} Kg</p>
          </div>
          <div className="w-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">BMI</h2>
            <p>
              {characteristics?.bmi &&
                parseFloat(String(characteristics?.bmi)).toFixed(2)}
            </p>
          </div>
          <div className="w-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">Body Fat</h2>
            <p>
              {characteristics?.bodyFatPercentage &&
                parseFloat(String(characteristics?.bodyFatPercentage)).toFixed(
                  2
                )}{" "}
              %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
