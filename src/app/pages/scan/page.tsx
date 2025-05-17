"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { BarcodeIcon } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type ScanResult = {
  name: string;
  calories: string;
  fat_total_g: number;
  fat_saturated_g: number;
  sodium_mg: number;
  cholesterol_mg: number;
  carbohydrates_total_g: number;
  sugar_g: number;
  fiber_g: number;
};

export default function Page() {
  const router = useRouter();
  const [isInputFilled, setIsInputFilled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const { data: session } = useSession();

  function setPreviewPicture(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const validImageTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
      if (!validImageTypes.includes(file.type)) {
        alert("Invalid file type. Please upload an image file (jpg, jpeg, png, webp).");
        e.target.value = ""; // Reset the input
        return;
      }
      setIsInputFilled(true);
      setScanResult(null);
      setDisabled(false);
      const reader = new FileReader();
      reader.onload = (event) => {
        const previewPicture = document.getElementById("previewPicture");
        if (previewPicture) {
          previewPicture.innerHTML = "";
          const img = document.createElement("img");
          img.src = event.target?.result as string;
          img.alt = "Preview";
          img.className = "w-full h-full object-cover rounded-lg";
          img.style.maxHeight = "300px";
          img.style.maxWidth = "300px";
          img.style.objectFit = "cover";
          img.style.objectPosition = "center";
          previewPicture.appendChild(img);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setScanResult(null);
    const input = document.getElementById("foodPicture") as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      axios
        .post("/api/handler/scan", formData)
        .then((response) => {
          setScanResult(response?.data?.data);
          setLoading(false);
          setDisabled(true);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  }

  function createFoodLog() {
    const mealType = Number(scanResult?.calories) < 500 ? "snacks" : "meal";
    const data = {
      foodName: scanResult?.name,
      calories: Number(scanResult?.calories).toFixed(2),
      mealType: mealType,
      title: `Konsumsi ${scanResult?.name}`,
    }
    const searchParams = new URLSearchParams();
    searchParams.append("type", "create");
    searchParams.append("category", "FOOD_LOG");

    console.log(data);

    axios.post(`/api/handler/activities/user?${searchParams.toString()}`, {data: JSON.stringify(data)}).then((response) => {
      if(confirm("Berhasil menambahkan food log, apakah anda ingin melihat food log?")) {
        router.push("/pages/user/activity");
      }
    }).catch((error) => {
      console.error("Error creating food log:", error);
    }
    );

  }


  return (
    <div className="w-full dark:text-white relative py-20 lg:px-15 px-5 gap-y-10 flex-col flex justify-center items-center">
      <div className="flex flex-col lg:w-3/4 md:w-3/4 w-full h-full gap-y-5 justify-center items-center bg:black/20 dark:bg-white/10 rounded-lg p-5 border border-black/20 dark:border-white/10 bg-black/10 shadow-lg">
        <div className="flex flex-col gap-y-2 text-center">
          <h1 className="text-2xl font-bold">Food Nutrition Scanner</h1>
          <p className="text-sm">
            Pindai makanan untuk mendapatkan informasi nutrisi
          </p>
        </div>
        <form
          className=" flex flex-col lg:max-w-1/2 w-full justify-center items-center gap-y-5"
          onSubmit={handleSubmit}
        >
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="foodPicture">Picture</Label>
            <div className="flex flex-row gap-x-2">
              <Input
                id="foodPicture"
                type="file"
                className="border-black/30 dark:border-white/40"
                capture="environment"
                accept="jpg,jpeg,png"
                onChange={(e) => {
                  setPreviewPicture(e);
                }}
              />
              {isInputFilled && (
                <Button
                  className="bg-red-500/80 text-white hover:bg-red-500/70"
                  variant={"default"}
                  onClick={() => {
                    setIsInputFilled(false);
                    setScanResult(null);
                    const input = document.getElementById(
                      "foodPicture"
                    ) as HTMLInputElement;
                    input.value = "";
                  }}
                >
                  <TrashIcon />
                </Button>
              )}
            </div>
          </div>
          {isInputFilled && (
            <div className="flex flex-col gap-y-2 w-full">
              <p className="text-center">Preview</p>
              <div className="justify-center items-center w-full flex">
                <div
                  className="h-auto w-fit overflow-auto border border-white/50 rounded-lg"
                  id="previewPicture"
                ></div>
              </div>
            </div>
          )}
          <Button
            variant={"default"}
            className=" text-white flex flex-row gap-x-2 items-center w-full justify-center bg-green-400/70 hover:bg-green-500/60"
            type="submit"
            disabled={disabled}
          >
            <BarcodeIcon />
            Scan
          </Button>
        </form>
        {loading ? (
          <div className="flex flex-col gap-y-2 w-full">
            <p className="text-center">Loading...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-y-2 w-full">
            <div className="justify-center items-center w-full flex">
              <div className="h-auto lg:w-1/2 w-full overflow-auto border border-black/40 dark:border-white/50 rounded-lg">
                {scanResult ? (
                  <Table className="w-full bg-black/10 dark:bg-white/10">
                    <TableHeader>
                      <TableRow>
                        <TableCell className="text-left font-bold text-lg">Nutrisi</TableCell>
                        <TableCell className="text-left font-bold text-lg">Jumlah</TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Nama Makanan</TableCell>
                        <TableCell>
                          {scanResult.name}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Calories</TableCell>
                        <TableCell>
                          {Number(scanResult.calories).toFixed(2)} Kalori
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fat Total</TableCell>
                        <TableCell>{scanResult.fat_total_g}g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fat Saturated</TableCell>
                        <TableCell>{scanResult.fat_saturated_g}g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Sodium</TableCell>
                        <TableCell>{scanResult.sodium_mg}mg</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cholesterol</TableCell>
                        <TableCell>{scanResult.cholesterol_mg}mg</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Carbohydrates Total</TableCell>
                        <TableCell>
                          {scanResult.carbohydrates_total_g}g
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Sugar</TableCell>
                        <TableCell>{scanResult.sugar_g}g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fiber</TableCell>
                        <TableCell>{scanResult.fiber_g}g</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                ) : (
                  <div className="flex flex-col gap-y-2 p-5">
                    <h1 className="text-xl font-bold">Scan Hasil</h1>
                    <p className="text-sm">Belum ada hasil scan</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="py-10 lg:w-1/2 w-full flex lg:flex-row md:flex-row flex-col gap-2 justify-between items-center">
          <Button className="lg:w-fit md:w-fit w-full bg-slate-800/70 dark:text-white px-5" onClick={() => {router.back()}}>Kembali</Button>
          {
            (session && scanResult) && (
              <Button className="lg:w-fit md:w-fit w-full bg-slate-800/70 dark:text-white" onClick={createFoodLog}>Masukkan ke FoodLog</Button>
            )
          }
        </div>
      </div>
     
    </div>
  );
}
