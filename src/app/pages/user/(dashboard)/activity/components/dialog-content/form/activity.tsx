"use client";

import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { UserActivites } from "@/app/utils/lib/types/user";

export default function ActivityForm({onSelect, data, isEdit}: {onSelect?: (option: { name: string; calories_per_hour: number }) => void, data?: UserActivites, isEdit: boolean}) {
  const [query, setQuery] = useState(data?.physicalActivityLog?.activityName || "");
  const [isOpen, setIsOpen] = useState(false);
  const [activityData, setActivityData] = useState<
    { id: number; name: string; calories_per_hour: number }[] | null
  >(null);

  useEffect(() => {
    initActivityData();
    setIsOpen(false);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSelect(option: { name: string; calories_per_hour: number }) {
    onSelect && onSelect(option); //eslint-disable-line @typescript-eslint/no-unused-expressions
    setQuery(option.name);
    setIsOpen(false);
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
    if(query === "") return initActivityData();

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
                (item: any, index: number) => ({ //eslint-disable-line @typescript-eslint/no-explicit-any
                  ...item,
                  id: currentMaxId + index + 1,
                })
              );
              return [...newDataWithIds];
            });
          } else {
            setActivityData(null);
          }
        })
        .catch((err) => {
          console.log(err);
          setActivityData(null);
        });
    }, 1000); // 300ms debounce delay
  }

  return (
    <div className="relative w-full max-w-md flex flex-col gap-5">
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
      <div className="flex flex-col gap-3">
      <Label className="text-base">Masukkan Durasi Aktivitas Anda (Menit)</Label>
      <Input className="w-full" name="duration" readOnly={!isEdit} placeholder="Masukkan Durasi (menit)" type="number" defaultValue={data?.physicalActivityLog?.duration}></Input>
      </div>
    </div>
  );
}
