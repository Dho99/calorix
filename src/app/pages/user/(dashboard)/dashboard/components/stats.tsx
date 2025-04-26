import type { DashboardComponentPageProps } from "../page";
import Calories from "./statisctics/calories";
import Steps from "./statisctics/steps";
import Training from "./statisctics/training";
import HeartRate from "./statisctics/heart-rate";

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
