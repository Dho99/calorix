import Calories from "./statistics/calories";
import Steps from "./statistics/steps";
import Training from "./statistics/training";
import DueTarget from "./statistics/due-target"
import type { PhysicalActivityLog } from "@/app/utils/lib/types/user";

export type StatsProps = {
  steps: {
    stepsCount?: string | number,
    stepsGoal?: string|number,
  }
  activityData?: PhysicalActivityLog[],
  groupedActivity: {date: string, data: number}[],
  targetTime?: number | string,
  groupedSteps: {date: string, data: number}[],
  totalActivityTime?: number,
  totalActivityCount?: number,
}

export default function Stats({
  pageData,
}: {
  pageData: StatsProps;
}) {


  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 h-full w-full gap-2">
      <Calories pageData={pageData?.groupedActivity}/>
      <Steps stepData={pageData?.groupedSteps}/>
      <DueTarget targetTime={pageData?.targetTime}/>
      <Training activityTime={pageData?.totalActivityTime} activityCount={pageData?.totalActivityCount}/>
    </div>
  );
}
