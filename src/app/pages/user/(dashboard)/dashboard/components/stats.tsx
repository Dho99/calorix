import type { DashboardComponentPageProps } from "../page";
import Calories from "./statistics/calories";
import Steps from "./statistics/steps";
import Training from "./statistics/training";
import HeartRate from "./statistics/heart-rate";

export default function Stats({
  setDialog,
}: {
  setDialog: (dialog: DashboardComponentPageProps) => void;
}) {
  return (
    <div className="grid grid-cols-2 h-full w-full gap-2">
      <Calories />
      <HeartRate />
      <Steps />
      <Training />
    </div>
  );
}
