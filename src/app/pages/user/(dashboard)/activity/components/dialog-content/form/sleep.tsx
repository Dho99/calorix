import { Input } from "@/components/ui/input";
import type { UserActivites } from "@/app/utils/lib/types/user";

export default function SleepForm({data, isEdit}: {data?: UserActivites, isEdit: boolean}) {
    return (
        <div className="flex flex-col gap-3 ">
        <label htmlFor="activity-name" className="text-white">
          Masukkan Durasi (Menit)
        </label>
        <Input
          name="duration"
          type="number"
          readOnly={!isEdit}
          placeholder="Insert Duration"
          defaultValue={data?.sleepTracker?.duration}
        ></Input>
        
      </div>
    )
}