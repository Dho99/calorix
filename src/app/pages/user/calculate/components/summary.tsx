"use client";
import type { StepValues, Step } from "../page";
import { useState } from "react";
import { steps as stepsJson } from "./steps.json";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

export default function SummaryCalculate({
  props,
}: {
  props: StepValues | null;
}) {
  const [steps, setStep] = useState<StepValues | null>(props);
  const stepsTemplate: Step[] = stepsJson;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-white">
      <div className="flex flex-col max-w-2xl text-center mb-5">
        <h1 className="text-2xl font-bold">Rangkuman Pendataan Diri Anda</h1>
        <p className="mt-2 text-lg text-white/60">
          Data ini akan disimpan di database dan akan menjadi acuan untuk target
          anda selanjutnya. Anda bisa mengakses “Riwayat” dan menghapus
          preferensi akun anda
        </p>
      </div>
      <div className="mt-4 grid lg:grid-cols-2 grid-cols-1 gap-5">
        {stepsTemplate.map((step, index) => {
          const stepValue = steps?.[step.stateKey as keyof StepValues];
          return (
            <div key={index} className="w-full flex flex-col gap-y-1">
              <h3 className="text-xl font-bold">
                {stepsTemplate[index].question}
              </h3>
              {stepsTemplate[index].type === "number"? (
                <div className=" w-full h-full flex flex-row items-center gap-x-3 px-5 bg-white/70 rounded-lg">
                  <input
                    id={stepsTemplate[index].stateKey}
                    type={stepsTemplate[index].type}
                    placeholder={stepsTemplate[index].placeholder as string}
                    className="w-full h-full px-10 py-5 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 "
                    defaultValue={
                      steps?.[stepsTemplate[index].stateKey]! as string
                    }
                    readOnly
                  />
                  <label
                    htmlFor={stepsTemplate[index].stateKey}
                    className="text-black text-2xl font-bold"
                  >
                    {stepsTemplate[index].indicator as string}
                  </label>
                </div>
              ) : stepsTemplate[index].type === "radio" ? (
                <>
                  <div className={`w-full h-full`}>
                    {stepsTemplate[index].opts
                      ?.filter(
                        (opt) =>
                          opt.value === steps?.[stepsTemplate[index].stateKey]
                      )
                      .map((opt, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`transition-all transition-duration-30 hover:cursor-pointer w-full h-full p-4 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 focus:bg-[#5C8374] focus:text-white bg-white/70`}
                          disabled={true}
                        >
                          {opt.icon && (
                            <Image
                              src={`/assets/static/svg/${opt.icon}`}
                              alt={opt.label}
                              width={100}
                              height={100}
                              quality={100}
                              className="m-auto"
                            />
                          )}
                          <div className="">{opt.label}</div>
                        </button>
                      ))}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
