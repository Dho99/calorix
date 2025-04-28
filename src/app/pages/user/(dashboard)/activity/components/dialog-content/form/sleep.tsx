import { Input } from "@/components/ui/input";
import type { UserActivites } from "@/app/utils/lib/types/user";

export default function SleepForm({data}: {data: UserActivites|undefined}) {
    return (
        <div className="flex flex-col gap-3 ">
        <label htmlFor="activity-name" className="text-white">
          Masukkan Durasi (Menit)
        </label>
        <Input
          name="duration"
          type="number"
          readOnly={!!data}
          placeholder="Insert Duration"
          defaultValue={data?.sleepTracker?.duration}
        ></Input>
      </div>
    )
}