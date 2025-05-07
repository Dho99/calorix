import Calories from "./statistics/calories";
import Steps from "./statistics/steps";
import Training from "./statistics/training";
import HeartRate from "./statistics/heart-rate";
import type { PhysicalActivityLog } from "@/app/utils/lib/types/user";

export type StatsProps = {
  steps: {
    stepsCount?: string | number,
    stepsGoal?: string|number,
  }
  activityData?: PhysicalActivityLog["duration"][]
}

export default function Stats({
  pageData,
}: {
  pageData: StatsProps;
}) {


  return (
    <div className="grid grid-cols-2 h-full w-full gap-2">
      <Calories />
      <HeartRate />
      <Steps stepData={pageData?.steps}/>
      <Training actData={pageData?.activityData}/>
    </div>
  );
}
