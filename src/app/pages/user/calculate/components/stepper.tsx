import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  number: number;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepNumber: number) => void;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
}) => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const scrollToCurrentStep = (stepIndex: number) => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea && scrollArea.children.length) {
      const stepElement = scrollArea.children[stepIndex] as HTMLElement;

      if (stepElement) {
        stepElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  };

  React.useEffect(() => {
    scrollToCurrentStep(currentStep - 1);
  }, [currentStep]);

  const progressPercentage =
    ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <>
      <div className="relative w-full">

        <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 transform -translate-y-1/2 rounded-full flex flex-row items-center bg-slate-600">
          <div
            className="h-2 bg-white rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%`, maxWidth: "100%" }}
          />
          <div className="bg-white p-1 w-16 h-10 text-black rounded-full items-center flex justify-center -ms-2">
            <p className="">{currentStep} / {steps.length}</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Stepper;
