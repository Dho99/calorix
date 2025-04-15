import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  number: number;
  label: string;
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
  return (
    <>
      <div
        className="flex flex-wrap items-center p-4 justify-center"
        ref={scrollAreaRef}
      >
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className="flex items-center">
              <div className="flex flex-col items-center justify-center">
                <div
                  onClick={() => onStepClick(step.number)}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold",
                    step.number === currentStep
                      ? "bg-white text-black"
                      : step.number < currentStep
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  )}
                >
                  {step.number < currentStep ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    step.number
                  )}
                </div>
                <div
                  className={cn(
                    "mt-2 text-xs text-center w-36 text-base",
                    step.number === currentStep
                      ? "text-white font-bold"
                      : step.number < currentStep
                      ? "text-white"
                      : "text-white"
                  )}
                >
                  {step.label}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-16 h-[2px] mb-5 -mx-8",
                    step.number <= currentStep ? "bg-white" : "bg-black"
                  )}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
