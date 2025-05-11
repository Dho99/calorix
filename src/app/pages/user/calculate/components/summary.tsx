"use client";
import type { StepValues, Step } from "../page";
import { steps as stepsJson } from "./steps.json";
import Image from "next/image";

export default function SummaryCalculate({
  props,
}: {
  props: StepValues | null;
}) {
  const steps = props;
  const stepsTemplate: Step[] = stepsJson;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full dark:text-white">
      <div className="flex flex-col max-w-2xl text-center mb-5">
        <h1 className="text-2xl font-bold">Rangkuman Pendataan Diri Anda</h1>
        <p className="mt-2 text-lg dark:text-white/60">
          Data ini akan disimpan di database dan akan menjadi acuan untuk target
          anda selanjutnya. Anda bisa mengakses “Riwayat” dan menghapus
          preferensi akun anda
        </p>
      </div>

      <div className="mt-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        {stepsTemplate.map((step, index) => {
          const value = steps?.[step.stateKey as keyof StepValues];

          return (
            <div key={index} className="w-full flex flex-col gap-y-1">
              <h3 className="text-xl font-bold">{step.question}</h3>

              {step.type === "number" ? (
                <div className="w-full h-full flex flex-row items-center gap-x-3 px-5 bg-slate-200/70 dark:bg-white/70 rounded-lg">
                  <input
                    id={step.stateKey}
                    type="number"
                    placeholder={step.placeholder as string}
                    className="w-full h-full px-10 py-5 text-black rounded-lg text-2xl font-bold bg-transparent"  
                    defaultValue={value as string}
                    readOnly
                  />
                  <label
                    htmlFor={step.stateKey}
                    className="text-black text-2xl font-bold"
                  >
                    {step.indicator}
                  </label>
                </div>
              ) : step.type === "radio" ? (
                <div className="w-full h-full">
                  {step.opts
                    ?.filter((opt) => opt.value === value)
                    .map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        className="transition-all w-full h-full p-4 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 bg-slate-200/80  "
                        disabled
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
                        <div>{opt.label}</div>
                      </button>
                    ))}
                </div>
              ) : Array.isArray(value) ? (
                <div className={`grid lg:grid-cols-2 grid-cols-1 gap-2 w-full h-full`}>
                  {value.map((opt: any, i: number) => ( //eslint-disable-line
                    <div
                      key={i}
                      className="transition-all w-full h-full p-4 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 bg-slate-200/80"
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
                      <div>{opt.label}</div>
                    </div>
                  ))}
                </div>
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
