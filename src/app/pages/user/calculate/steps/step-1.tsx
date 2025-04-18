import { MarsIcon, VenusIcon } from "lucide-react";

export default function Step1({updateStepState}: {updateStepState: (stepType: string, value: string | number | boolean) => void}) {
    type Step1Option = {
      gender: boolean;
      icon: typeof MarsIcon
    };
  
    const step1Option: Step1Option[] = [
      {
        gender: true,
        icon: MarsIcon
      },
      {
        gender: false,
        icon: VenusIcon
      },
    ];
  
    function step1StoreValue(value: boolean) {
      updateStepState("gender", value);
    }
  
    return (
      <>
        {step1Option?.map((gender, index) => {
          return (
            <button
            key={index}
              type="button"
              className=" hover:-mt-5 transition-all transition-duration-30 hover:cursor-pointer h-full bg-white p-30 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5"
              onClick={() => {step1StoreValue(gender?.gender);}}
            >
              <gender.icon className="m-auto w-14 h-14"/>
              <div>
              {gender?.gender ? "Laki-laki" : "Perempuan"}
              </div>
            </button>
          );
        })}
      </>
    );
  }
  