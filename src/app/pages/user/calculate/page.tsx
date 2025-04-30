"use client";

import Stepper from "./components/stepper";
import { useState, useEffect, useRef } from "react";
import { steps as stepsJson } from "./components/steps.json";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useSession } from "next-auth/react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SummaryCalculate from "./components/summary";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { calculateUserData } from "@/app/utils/api/calculate";
import SaveCalculate from "./components/save-calculate";
import { scrollToTop } from "@/app/pages/layout";
import DualCheckbox from "./components/dualCheckbox";

export type Step = {
  number: number;
  question?: string;
  placeholder?: string;
  stateKey?: string;
  type?: string;
  indicator?: string;
  tips?: {
    title: string;
    description: string;
  };
  opts?: {
    value: string;
    label: string;
    icon?: string;
  }[];
  required?: boolean;
};

export type StepValues = {
  [stepType: string]: string | string[] | number | boolean | null;
};


export default function Page() {
  const pageRef = useRef<HTMLDivElement>(null);


  const router = useRouter();

  const [stepState, setStepState] = useState<StepValues | null>(null);

  const [isUpdatePage, setIsUpdatePage] = useState<boolean>(false);

  const [alert, setAlert] = useState<{
    title?: string;
    type: string;
    success: boolean;
    message: string;
    markdownComponent?: React.ReactNode
  } | null>(null);

  const { data } = useSession();

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(
        `/api/handler/characteristics/${data?.user?.id as string}`
      );

      if (res.data.data && res.data.status === 200) {
        setAlert({
          success: true,
          type: "dialog",
          message:
            "Anda telah memiliki data kalkulasi sebelumnya, apakah anda ingin memperbarui data tersebut?",
        });
      } else if (res.data.status === 400) {
        setAlert({
          success: false,
          type: "alert",
          message: res.data.message,
        });
      }
    };

    if (data?.user?.id) getUserData();
  }, [data?.user?.id]);

  function updateStepState(stepType: string, value: string | number | boolean) {
    setStepState((prevState) => ({
      ...prevState,
      [stepType]: value,
    }));
  }

  let steps: Step[] = stepsJson;

  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = async () => {
    scrollToTop(pageRef);
  
    if (
      (!stepState?.hasOwnProperty(steps[currentStep - 1].stateKey!) &&
      currentStep < steps.length - 2) && steps[currentStep - 1]?.required
    ) {
      setAlert({
        success: false,
        type: "alert",
        message: `Silahkan isi ${steps[currentStep - 1].stateKey}`,
      });
    } else {
      setAlert(null);

      const input = document.querySelector(
        `input#${steps[currentStep - 1].stateKey}`
      );

      if (input instanceof HTMLInputElement) {
        input.value = stepState?.[steps[currentStep]?.stateKey as string] as string
      }

      if (stepState?.[steps[5].stateKey!] !== undefined && currentStep === 6) {
        steps.splice(14, 1);
      }

      if (currentStep < steps.length) {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length));
      }

      if (currentStep < steps.length - 1) {
        const calculate = await calculateUserData(stepState!);

        setStepState((prevState) => ({
          ...prevState,
          ...calculate,
        }));
      }

      if (currentStep === steps.length) {
        console.log(stepState)
        axios({
          method: isUpdatePage ? "PUT" : "POST",
          url: `/api/handler/characteristics${isUpdatePage ? '/'+data?.user?.id : ''}`,
          data: stepState!,
        })
          .then((res) => {
            if (res.data.status === 400) {
              setAlert({
                success: false,
                type: "alert",
                message: res.data.message,
              });
            } else {
              setAlert({
                success: true,
                type: "dialog",
                message: "Data berhasil disimpan",
                markdownComponent: (handleAfterSubmitSuccess()),
              });
            }
            setCurrentStep(1);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const handleAfterSubmitSuccess = () => {
    return (
      <div className="w-full flex flex-row justify-between gap-5">
        <button
          type="button"
          className="bg-[#5C8374] text-white rounded-lg py-2 px-4 ms-auto"
          onClick={() => {
            router.push("/pages/user/dashboard");
          }}
        >
          Kembali ke Dashboard
        </button>
      </div>
    )
  }

  const handlePrev = () => {
    scrollToTop(pageRef);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      const input = document.querySelector(
        `input#${steps[currentStep - 1].stateKey}`
      );
      if (input instanceof HTMLInputElement) {
        input.value = stepState?.[steps[currentStep - 2].stateKey!] as string;
      }
    }
  };

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  const [values, setValues] = useState<string[]>([]);

  const handleOptionInput = (
    stepType: string,
    value: string | number | boolean
  ) => {
    setValues((prevValues) => {
      const updatedValues = prevValues.includes(value as string)
      ? prevValues.filter((v) => v !== (value as string))
      : [...prevValues, value as string];

      setStepState((prevState) => ({
      ...prevState,
      [stepType]: updatedValues,
      }));

      return updatedValues;
    });
  };

  return (
    <Dialog open={alert?.type === "dialog"}>
  
      <div
        className="w-full max-h-dvh h-full flex flex-col bg-[#092635] text-white relative py-20 items-center overflow-auto"
        ref={pageRef}
      >
        <div className="w-full flex flex-col h-full lg:px-30 px-5">
          <div className="flex justify-center items-center w-full py-10 ">
            <Stepper
              steps={steps}
              currentStep={currentStep}
              onStepClick={handleStepClick}
            />
          </div>
          {alert && alert.type === "alert" && (
            <Alert
              variant="default"
              className={`${
                alert?.success ? "bg-green-900" : "bg-red-900"
              } text-white border-none shadow-lg`}
              onClick={() => setAlert(null)}
            >
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>
                {alert.success ? "Success" : "Error Occured"}
              </AlertTitle>
              <AlertDescription className="text-white">
                {alert.message}
              </AlertDescription>
            </Alert>
          )}
          {/* {JSON.stringify(stepState)} */}
         
          {
            alert?.type === "dialog" && (
              <DialogContent className="sm:max-w-[425px] bg-[#092635] text-white border-none">
              <DialogHeader>
                <DialogTitle>{alert?.title ? alert?.title : "Calculate Alert"}</DialogTitle>
                <DialogDescription className="text-slate-400 text-base my-5">
                  {alert?.message}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex justify-between w-full">
                {alert?.markdownComponent ? (
                  alert?.markdownComponent
                ) : (
                  <>
                  <button
                    type="button"
                    className="border border-[#5C8374] rounded-lg py-2 px-4 text-white"
                    onClick={() => {
                      setIsUpdatePage(true);
                      setAlert(null);
                    }}
                  >
                    Perbarui
                  </button>
                  <button
                    type="submit"
                    className="bg-[#5C8374] text-white rounded-lg py-2 px-4"
                    onClick={() => {
                      router.push("/pages/user/dashboard");
                    }}
                  >
                    Kembali ke Dashboard
                  </button>
                  </>
                )}
             
              </DialogFooter>
            </DialogContent>
            )
          }
          {currentStep < steps.length - 1 ? (
            <>
              <div className="h-full w-full flex flex-wrap py-5">
                <div className="w-full h-full flex justify-center items-center flex-col">
                  <div className="w-full h-max flex flex-col gap-10 p-10 ring ring-black/30 shadow-xl/20 rounded-xl justify-center items-center">
                    <div className="w-full flex justify-center items-center">
                      <h1 className="text-4xl font-bold text-center">
                        {steps[currentStep - 1].question}
                      </h1>
                    </div>

                    {steps[currentStep - 1].type === "radio" ? (
                      <div
                        className={`grid 
                        
                        ${
                          steps[currentStep - 1].opts!.length < 3
                            ? "lg:grid-cols-2"
                            : "lg:grid-cols-3"
                        }
  
                        grid-cols-1 lg:gap-10 gap-3 lg:w-fit w-1/2`}
                      >
                        {steps[currentStep - 1].opts?.map((opt, index) => (
                          <button
                            key={index}
                            type="button"
                            className={`hover:-mt-5 transition-all transition-duration-30 hover:cursor-pointer h-full p-5 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 focus:bg-[#5C8374] focus:text-white ${
                              opt.value ===
                              stepState?.[steps[currentStep - 1].stateKey!]
                                ? "bg-[#5C8374] text-white"
                                : "bg-white"
                            }`}
                            onClick={() => {
                              updateStepState(
                                steps[currentStep - 1].stateKey!,
                                opt.value
                              );
                            }}
                          >
                            {opt.icon && (
                              <Image
                                src={`/assets/static/svg/${opt.icon}`}
                                alt={opt.label}
                                width={300}
                                height={300}
                                quality={100}
                                className="m-auto"
                              />
                            )}
                            <div>{opt.label}</div>
                          </button>
                        ))}
                      </div>
                    ) : steps[currentStep - 1].type === "checkbox" ? (
                      <div className={`grid grid-cols-3 gap-10`}>
                        {steps[currentStep - 1].opts?.map((opt, index) => (
                          <div
                            className="items-center flex space-x-5 text-black bg-white/70 py-3 px-5 rounded shadow-lg"
                            key={index}
                          >
                            <Checkbox
                              id={`terms${index}`}
                              className="bg-black/40 w-8 h-8"
                              checked={values.includes(opt.value)}
                            />
                            <div className="flex flex-row gap-1.5 w-full items-center">
                              <label
                                htmlFor={`terms${index}`}
                                className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                onClick={() => {
                                  handleOptionInput(
                                    steps[currentStep - 1].stateKey!,
                                    opt.value
                                  );
                                }}
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
                    ) : steps[currentStep - 1].type === "dualCheckbox" ? (
                      <DualCheckbox
                        onChange={(value) => {
                          updateStepState(
                            steps[currentStep - 1].stateKey!,
                            value
                          );
                        }}
                        handleOptionInput={handleOptionInput}
                        stepsValue={stepState?.[steps[currentStep - 1].stateKey!] as unknown as StepValues}
                        stepsData={steps[currentStep - 1] as Step}
                      />
                    ) : (
                      <div className={`flex flex-row gap-10`}>
                        <input
                          autoFocus
                          required
                          id={steps[currentStep - 1].stateKey}
                          type={steps[currentStep - 1].type}
                          placeholder={
                            steps[currentStep - 1].placeholder as string
                          }
                          className="w-full h-full bg-white px-10 py-5 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 "
                          defaultValue={
                            stepState?.[
                              steps[currentStep - 1].stateKey as string
                            ] as string
                          }
                          onChange={(e) =>
                            updateStepState(
                              `${steps[currentStep - 1].stateKey}`,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    )}
                    {steps[currentStep - 1].tips && (
                      <div className="w-full flex justify-center items-center bg-[#EBF5FF] rounded-lg">
                        <div className="w-full h-max flex flex-col gap-3 p-5 ring ring-black/30 shadow-xl/20 rounded-xl">
                          <h1 className="text-2xl font-bold text-start text-slate-600">
                            Tips :{" "}
                            {steps[currentStep - 1].tips?.title as string}
                          </h1>
                          <p className="text-lg text-start text-slate-600">
                            {steps[currentStep - 1].tips?.description as string}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : currentStep === steps.length ? (
            <SaveCalculate props={stepState!} />
          ) : (
            <SummaryCalculate props={stepState!} />
          )}
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
     </Dialog>
  );
}
