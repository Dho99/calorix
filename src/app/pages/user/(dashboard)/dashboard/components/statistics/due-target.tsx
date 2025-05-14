import { ClockIcon } from "lucide-react";

export default function DueTarget({
  targetTime,
}: {
  targetTime?: number | string;
}) {
  return (
    <div className="w-full h-full bg-green-200 dark:bg-[#1B4242] dark:text-white  border border-white/50 rounded-lg shadow-md p-4 flex flex-col gap-2">
      <div className="flex lg:flex-row flex-col gap-5 items-center h-full w-full">
        <div className="bg-green-300 dark:bg-white/10 rounded p-2 w-fit me-auto">
          <ClockIcon className="dark:text-white w-14 h-14" />
        </div>
        <div className="flex flex-col items-baseline w-full gap-y-2">
        <h2 className="text-lg font-bold">Hari Menuju Target</h2>
          <p className="font-bold text-2xl">
            {Number(targetTime ?? 0) * 30} Hari
          </p>
        </div>
      </div>
    </div>
  );
}
