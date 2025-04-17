"use client";

import Stepper from "./components/stepper";
import { useState } from "react";
import Step1 from "./steps/step-1";
import Step2 from "./steps/step-2";
import Step3 from "./steps/step-3";
import Step4 from "./steps/step-4";
import Step5 from "./steps/step-5";
import Step6 from "./steps/step-6";
import Step7 from "./steps/step-7";
import Step8 from "./steps/step-8";
import Step9 from "./steps/step-9";
import Step10 from "./steps/step-10";
import Step12 from "./steps/step-12";
import Step13 from "./steps/step-13";
import Step14 from "./steps/step-14";
import Step15 from "./steps/step-15";

interface Step {
  number: number;
  label: string;
}

type StepValues = {
  [stepType: string]: string | number | boolean;
};

export default function Page() {
  const [stepState, setStepState] = useState<StepValues | null>(null);

  function updateStepState(
    stepType: string,
    value: string | number | boolean
  ) {
    setStepState((prevState) => ({
      ...prevState,
      [stepType]: value,
    }));
  }

  const steps: Step[] = [
    { number: 1, label: "Jenis Kelamin" },
    { number: 2, label: "Usia" },
    { number: 3, label: "Berat Badan (kg)" },
    { number: 4, label: "Tinggi Badan (cm)" },
    { number: 5, label: "Aktivitas Harian" },
    { number: 6, label: "Tujuan Diet" },
    { number: 7, label: "Jenis Aktivitas Fisik" },
    { number: 8, label: "Durasi Aktivitas" },
    { number: 9, label: "Target Berat Badan" },
    { number: 10, label: "Kapan Tujuan Tercapai" },
    { number: 11, label: "Pola Makan" },
    { number: 12, label: "Pola Tidur" },
    { number: 13, label: "Kondisi Kesehatan" },
    { number: 14, label: "Riwayat Penyakit" },
    { number: 15, label: "Riwayat Diet" },
    { number: 16, label: "Selesai" },
  ];

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
        <div className="h-full w-full flex flex-wrap py-5">
          {/* {JSON.stringify(stepState)} */}
          <div className="w-full h-full flex justify-center items-center">
            {(() => {
              switch (currentStep) {
                case 1:
                  return <Step1 updateStepState={updateStepState} />;
                case 2:
                  return <Step2 updateStepState={updateStepState} />;
                case 3:
                  return <Step3 updateStepState={updateStepState} />;
                case 4:
                  return <Step4 updateStepState={updateStepState} />;
                case 5:
                  return <Step5 updateStepState={updateStepState} />;
                case 6:
                  return <Step6 updateStepState={updateStepState} />;
                case 7:
                  return <Step7 updateStepState={updateStepState} />;
                case 8:
                  return <Step8 updateStepState={updateStepState} />;
                case 9:
                  return <Step9 updateStepState={updateStepState} />;
                case 10:
                  return <Step10 updateStepState={updateStepState} />;
                case 11:
                  return <Step1 updateStepState={updateStepState} />;
                case 12:
                  return <Step12 updateStepState={updateStepState} />;
                case 13:
                  return <Step13 updateStepState={updateStepState} />;
                case 14:
                  return <Step14 updateStepState={updateStepState} />;
                case 15:
                  return <Step15 updateStepState={updateStepState} />;
                default:
                  return null
              }
            })()}
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
