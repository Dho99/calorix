"use client";

import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { UserActivites } from "@/app/utils/lib/types/user";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ActivityForm({
  setActivityInput,
  data,
  activityInput,
  isEdit,
}: {
  setActivityInput?: React.Dispatch<
    React.SetStateAction<
      { name: string; duration: number; calories_per_hour: number }[]
    >
  >;
  data?: UserActivites;
  activityInput?: {
    name: string;
    duration: number;
    calories_per_hour: number;
  }[];
  isEdit: boolean;
}) {
  const [query, setQuery] = useState(
    data?.physicalActivityLog?.activityName || ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activityData, setActivityData] = useState<
    { id: number; name: string; calories_per_hour: number }[]
  >([]);
  const [inputDurationOpen, setInputDurationOpen] = useState<{
    open: boolean;
    inputId: string;
  }>({
    open: false,
    inputId: "",
  });

  useEffect(() => {
    initActivityData();
    setIsOpen(false);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSelect(option: { name: string; calories_per_hour: number }) {
    setQuery(option.name);
    setIsOpen(false);
    setInputDurationOpen({
      open: true,
      inputId: `input${activityInput?.length}${option.name}`,
    });
  }

  function handleInputDurationSubmit() {
    const input = document.getElementById(inputDurationOpen.inputId) as HTMLInputElement;
  
    if (input) {
      const duration = parseInt(input.value);
      if (isNaN(duration)) {
        alert("Please enter a valid number");
        return;
      }
  
      setActivityInput?.((prev) => {
        const isExist = prev.some((item) => item.name === query);
        const newItem = {
          name: query,
          duration,
          calories_per_hour:
            activityData?.find((item) => item.name === query)?.calories_per_hour || 0,
        };
  
        if (isExist) {
          return prev.map((item) =>
            item.name === query ? { ...item, ...newItem } : item
          );
        } else {
          return [...prev, newItem];
        }
      });
    }
  }

  function initActivityData() {
    setActivityData([
      { id: 1, name: "Running", calories_per_hour: 600 },
      { id: 2, name: "Cycling", calories_per_hour: 500 },
      { id: 3, name: "Swimming", calories_per_hour: 700 },
      { id: 4, name: "Walking", calories_per_hour: 300 },
      { id: 5, name: "Yoga", calories_per_hour: 200 },
      { id: 6, name: "Weightlifting", calories_per_hour: 400 },
      { id: 7, name: "Dancing", calories_per_hour: 350 },
      { id: 8, name: "Hiking", calories_per_hour: 450 },
      { id: 9, name: "Rowing", calories_per_hour: 550 },
      { id: 10, name: "Jumping Rope", calories_per_hour: 650 },
    ]);
  }

  let debounceTimeout: NodeJS.Timeout | null = null;

  function fetchNewActivities(query: string) {
    if (query === "") return initActivityData();

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      const checkActivityIsExist = activityData?.some((opt) =>
        opt.name.toLowerCase().includes(lowerQuery)
      );
      if (checkActivityIsExist) {
        const newFiltered = activityData?.filter((opt) =>
          opt.name.toLowerCase().includes(lowerQuery)
        );
        return setActivityData(newFiltered!);
      }

      axios
        .get(`https://api.api-ninjas.com/v1/caloriesburned?activity=${query}`, {
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_API_NINJAS_KEY,
          },
        })
        .then((res) => {
          console.log("called");
          if (res.data) {
            setActivityData((prev) => {
              const currentMaxId =
                prev?.reduce((maxId, item) => Math.max(maxId, item.id), 0) || 0;
              const newDataWithIds = res.data.map(
                (item: any, index: number) => ({     //eslint-disable-line
                  ...item,
                  id: currentMaxId + index + 1,
                })
              );
              return [...newDataWithIds];
            });
          } else {
            setActivityData([]);
          }
        })
        .catch((err) => {
          console.log(err);
          setActivityData([]);
        });
    }, 1000); // 300ms debounce delay
  }

  return (
    <div className="relative w-full flex flex-col gap-5 overflow-auto">
      {!data && (
        <>
          <div className="flex flex-col gap-3">
            <Label className="text-base">Masukkan Jenis Aktivitas Anda</Label>
            <Input
              type="text"
              value={query}
              placeholder={"Search activity..."}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
                fetchNewActivities(e.target.value);
              }}
              readOnly={!isEdit}
              // onFocus={() => !defaultValue && setIsOpen(true)}
              ref={inputRef}
            />

            {isOpen && (
              <div className="absolute z-10 mt-1 w-full max-h-64 overflow-auto rounded-md bg-[#1E1E2F]/70 backdrop-blur border shadow-lg">
                {activityData?.length === 0 ? (
                  <div className="p-2 text-sm text-gray-400">No results</div>
                ) : (
                  activityData?.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      className="p-2 hover:bg-white/10 cursor-pointer flex justify-between text-white"
                    >
                      <span>{item.name}</span>
                      <span className="text-xs opacity-70">
                        {(item.calories_per_hour / 60).toFixed(2)} KKal/min
                      </span>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {inputDurationOpen.open && (
            <div className="flex flex-col gap-3">
              <Label className="text-base">
                Masukkan Durasi Aktivitas Anda (Menit)
              </Label>
              <Input
                className="w-full"
                name="duration"
                readOnly={!isEdit}
                id={`${inputDurationOpen.inputId}`}
                placeholder="Masukkan Durasi (menit)"
                type="number"
              ></Input>
            </div>
          )}
          {inputDurationOpen.open && (
            <Button
              variant={"secondary"}
              type="button"
              onClick={handleInputDurationSubmit}
            >
              Tambah Jenis Aktivitas
            </Button>
          )}
        </>
      )}

      <div className="border p-2 border-white rounded-lg w-full">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableCell>Nama Aktivitas</TableCell>
              <TableCell>Durasi</TableCell>
              {data ? <TableCell>MET Value</TableCell> : null}
              {data ? (
                <TableCell>Kalori Terbakar</TableCell>
              ) : (
                <TableCell>MET / Jam</TableCell>
              )}
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-auto">
            {data
              ? data?.physicalActivityLog?.activityType.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item?.name || "Tidak ada"}</TableCell>
                    <TableCell>{item?.duration || "Tidak ada"} menit</TableCell>
                    <TableCell>
                      {parseFloat(String(item?.metValue)).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      {parseFloat(
                        parseFloat(String(item?.metValue)).toFixed(2)
                      ) * parseInt(String(item?.duration)) || "Tidak ada"}{" "}
                      KKal
                    </TableCell>
                  </TableRow>
                ))
              : activityInput?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.duration} Menit</TableCell>
                    <TableCell>{item.calories_per_hour} KKal</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
