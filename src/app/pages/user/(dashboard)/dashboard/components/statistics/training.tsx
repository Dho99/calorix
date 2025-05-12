import type { PhysicalActivityLog } from "@/app/utils/lib/types/user";

export default function Training({
  actData,
}: {
  actData?: PhysicalActivityLog["duration"][];
}) {
  const totalDuration =
    Array.isArray(actData) && actData?.reduce((acc, curr) => acc + curr);

  return (
    <div className="w-full h-full bg-green-200 dark:bg-[#1B4242] dark:text-white  border border-white/50 rounded-lg shadow-md p-4 flex flex-col gap-4">
      <div>
        <h2 className="text-lg font-bold">Activities</h2>
        <div className="flex flex-row items-baseline w-full">
          <p className="font-bold text-3xl">{actData?.length || 0} Kali </p>
          <p className="font-bold text-xl dark:text-white/60">
            /{totalDuration || 0} Menit
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold">Rata - Rata</h2>
        <div className="flex flex-row items-baseline w-full">
          <p className="font-bold text-3xl dark:text-white/60">
            {(totalDuration || 0) / (Array.isArray(actData) && actData?.length ? actData.length : 1)} Menit
          </p>
        </div>
      </div>
    </div>
  );
}
