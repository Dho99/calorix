"use client";

import { Step, StepValues } from "../page";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useRef } from "react";

export default function DualCheckbox({
  stepsData,
  stepsValue,
  setAlert,
  scrollToTop,
  setStepState,
}: {
  stepsData: Step;
  stepsValue: StepValues;
  setAlert: React.Dispatch<
    React.SetStateAction<{
      type: string;
      success: boolean;
      message: string;
    } | null>
  >;
  scrollToTop: (pageRef: React.RefObject<HTMLDivElement | null>) => void;
  setStepState: React.Dispatch<React.SetStateAction<StepValues | null>>;
}) {
  const [inputValue, setInputValue] = useState<
    | {
        value?: string;
        duration?: string;
        label?: string;
      }[]
    | null
  >(Array.isArray(stepsValue) ? stepsValue : []);

  const [isInputShown, setIsInputShown] = useState<{
    open?: boolean;
    value?: string;
    label?: string;
    duration?: string;
  } | null>(null);

  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-2 w-full" ref={componentRef}>
      <div className="flex lg:flex-row md:flex-row flex-col gap-3">
        <div className="flex flex-col gap-2 w-full p-10 border border-white rounded-lg shadow-lg bg-white/5 lg:order-1 md:order-1 order-2">
          {stepsData.opts?.map((opt, index) => (
            <div
              className="items-center flex space-x-5 text-black bg-white/70 py-3 px-5 rounded shadow-lg"
              key={index}
            >
              <Checkbox
                id={`terms${index}`}
                className={`bg-black/40 w-8 h-8`}
                checked={Array.isArray(inputValue) && inputValue?.some(
                  (item) => item.value === opt.value
                )}
                onClick={() => {
                  if (
                    isInputShown?.open &&
                    (!isInputShown?.duration || isInputShown?.duration === "")
                  ) {
                    setAlert({
                      type: "alert",
                      success: false,
                      message:
                        "Harap isi durasi untuk pilihan sebelumnya terlebih dahulu",
                    });
                    return;
                  }

                  setIsInputShown({ open: true, value: opt.value, label: opt.label });
                  setInputValue((prev) => {
                    if (prev?.some((item) => item.value === opt.value)) {
                      return prev.filter((item) => item.value !== opt.value);
                    } else {
                      return [
                        ...(prev || []),
                        {
                          value: opt.value,
                          duration: isInputShown?.duration,
                          label: opt.label,
                        },
                      ];
                    }
                  });
                }}
              />
              <div className="flex flex-row gap-1.5 w-full items-center">
                <label
                  htmlFor={`terms${index}`}
                  className="text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {opt.label}
                </label>
                {opt.icon && (
                  <Image
                    src={`/assets/static/svg/${opt.icon}`}
                    alt={opt.label}
                    width={100}
                    height={100}
                    quality={100}
                    className="ms-auto"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col gap-y-3 items-center h-full p-5 w-full ${
            isInputShown?.open && "border shadow-lg  bg-white/5"
          } border-white rounded-lg relative lg:order-2 md:order-2 order-1`}
        >
          {isInputShown?.open && (
            <>
              <h1 className="text-xl">
                Masukkan Durasi Waktu Anda berolahraga{" "}
              </h1>
              <input
                autoFocus
                required
                id={stepsData.stateKey}
                type={"number"}
                placeholder={stepsData.placeholder as string}
                className="w-full h-full bg-white px-10 py-5 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5"
                defaultValue={
                  stepsValue?.[stepsData.stateKey as string] as string
                }
                onChange={(e) => {
                  setInputValue((prev) => {
                    const updatedValues = (prev || []).filter(
                      (item) => item.value !== isInputShown?.value
                    );
                    return [
                      ...updatedValues,
                      {
                        value: isInputShown?.value,
                        label: isInputShown?.label,
                        duration: e.target.value,
                      },
                    ];
                  });
                  setIsInputShown((prev) => ({
                    ...prev,
                    label: isInputShown?.label,
                    duration: e.target.value,
                  }));
                }}
              />
              <button
                className="bg-white/20 border border-white text-white px-4 py-2 rounded-lg hover:bg-transparent transition-all duration-300"
                onClick={() => {
                  scrollToTop(componentRef);
                  if (!isInputShown?.duration) {
                    setAlert({
                      type: "alert",
                      success: false,
                      message: "Durasi tidak boleh kosong",
                    });
                  } else {
                    setStepState((prev) => ({
                      ...prev,
                      [stepsData.stateKey as string]: inputValue,
                    }));
                    setAlert(null);
                    setIsInputShown({ open: false });
                  }
                }}
              >
                Simpan
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
