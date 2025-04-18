"use client";

import Stepper from "./components/stepper";
import { useState } from "react";
import { steps as stepsJson } from "./components/steps.json";
import { MarsIcon, VenusIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

type Step = {
  number: number;
  question: string;
  placeholder: string | null;
  stateKey: string;
  type: string;
  opts?: {
    value: string;
    label: string;
  }[];
};

type StepValues = {
  [stepType: string]: string | string[] | number | boolean;
};

export default function Page() {
  const [stepState, setStepState] = useState<StepValues | null>(null);

  function updateStepState(stepType: string, value: string | number | boolean) {
    setStepState((prevState) => ({
      ...prevState,
      [stepType]: value,
    }));
  }

  const steps: Step[] = stepsJson;

  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    if (currentStep < 16) {
      setCurrentStep((prev) => Math.min(prev + 1, 16));
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  const [values, setValues] = useState<string[]>([]);
  const handleRadioClick = (
    stepType: string,
    value: string | number | boolean
  ) => {
    
    setValues((prevValues) => {
      if (prevValues.includes(value as string)) {
        return prevValues.filter((v) => v !== (value as string));
      } else {
        return [...prevValues, value as string];
      }
    });

    setStepState((prevState) => ({
      ...prevState,
      [stepType]: values,
    }));
  };

  return (
    <div className="w-full h-dvh flex flex-col bg-[#092635] text-white relative px-20 py-20 items-center overflow-auto">
      <div className="w-full flex flex-col h-full px-30">
        <div className="flex justify-center items-center w-full py-10 ">
          <Stepper
            steps={steps}
            currentStep={currentStep}
            onStepClick={handleStepClick}
          />
        </div>

        <div className="h-max w-full flex flex-wrap py-5">
          {JSON.stringify(stepState)}
          <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="w-full h-max flex flex-col gap-10 p-10 ring ring-black/30 shadow-xl/20 rounded-xl justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <h1 className="text-4xl font-bold text-center">
                  {steps[currentStep - 1].question}
                </h1>
              </div>
              {steps[currentStep - 1].type === "radio" ? (
                <div className={`flex flex-row gap-10`}>
                  {steps[currentStep - 1].opts?.map((opt, index) => (
                    <button
                      key={index}
                      type="button"
                      className=" hover:-mt-5 transition-all transition-duration-30 hover:cursor-pointer h-full bg-white p-30 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 focus:bg-[#5C8374] focus:text-white"
                      onClick={() => {
                        updateStepState(
                          steps[currentStep - 1].stateKey,
                          opt.value
                        );
                      }}
                    >
                      {steps[currentStep - 1].stateKey === "gender" ? (
                        opt.value === "L" ? (
                          <MarsIcon className="m-auto w-14 h-14" />
                        ) : (
                          <VenusIcon className="m-auto w-14 h-14" />
                        )
                      ) : (
                        <></>
                      )}
                      <div>{opt.label}</div>
                    </button>
                  ))}
                </div>
              ) : steps[currentStep - 1].type === "checkbox" ? (
                <div className={`flex flex-col gap-10`}>
                  {steps[currentStep - 1].opts?.map((opt, index) => (
                    <div
                      className="items-top flex space-x-2 text-black bg-white py-3 px-5 rounded shadow-lg"
                      key={index}
                    >
                      <Checkbox id={`terms${index}`} className="bg-black/40" />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor={`terms${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          onClick={() => {
                            handleRadioClick(
                              steps[currentStep - 1].stateKey,
                              opt.value
                            );
                          }}
                        >
                          {opt.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={`flex flex-row gap-10`}>
                  <input
                    type={steps[currentStep - 1].type}
                    placeholder={steps[currentStep - 1].placeholder as string}
                    className="w-full h-full bg-white px-10 py-5 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 "
                    onChange={(e) =>
                      updateStepState(
                        `${steps[currentStep - 1].stateKey}`,
                        e.target.value
                      )
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full pt-10 pb-20 flex flex-row justify-between">
          {currentStep > 1 && (
            <button
              onClick={handlePrev}
              className="text-xl w-56 bg-[#5C8374] py-3 px-5 rounded-lg text-white font-bold"
            >
              Kembali
            </button>
          )}
          <button
            className="text-xl w-56 bg-[#5C8374] py-3 px-5 rounded-lg ms-auto text-white font-bold"
            onClick={handleNext}
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}
