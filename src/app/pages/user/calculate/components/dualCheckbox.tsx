import { Step, StepValues } from "../page";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

export default function DualCheckbox({
  handleOptionInput,
  onChange,
  stepsData,
  stepsValue,
}: {
  handleOptionInput: (key: string, value: string) => void;
  onChange: (value: string) => void;
  stepsData: Step;
  stepsValue: StepValues;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row gap-3">
        <div className="flex flex-col gap-2 w-full p-10 border border-white rounded-lg shadow-lg bg-white/5">
          {stepsData.opts?.map((opt, index) => (
            <div
              className="items-center flex space-x-5 text-black bg-white/70 py-3 px-5 rounded shadow-lg"
              key={index}
              onClick={() => {
                handleOptionInput(stepsData?.stateKey as string, opt!.value);
              }}
            >
              <Checkbox
                id={`terms${index}`}
                className="bg-black/40 w-8 h-8"
                checked={
                  Array.isArray(stepsValue) && stepsValue.includes(opt!.value)
                }
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

        <div className="flex flex-col gap-y-3 items-center h-full p-5 w-full border border-white rounded-lg shadow-lg bg-white/5 relative">
          <h1 className="text-xl">Masukkan Durasi Waktu Anda berolahraga </h1>
          <input
            autoFocus
            required
            id={stepsData.stateKey}
            type={stepsData.type}
            placeholder={stepsData.placeholder as string}
            className="w-full h-full bg-white px-10 py-5 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5"
            defaultValue={stepsValue?.[stepsData.stateKey as string] as string}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
