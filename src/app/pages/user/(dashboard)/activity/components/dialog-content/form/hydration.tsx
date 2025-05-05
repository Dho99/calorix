import { Input } from "@/components/ui/input";
import type { UserActivites } from "@/app/utils/lib/types/user";

export default function HydrationForm({data, isEdit}: {data?: UserActivites, isEdit?: boolean}) {
  return (
    <div className="flex flex-col gap-3 ">
      <label htmlFor="activity-name" className="text-white">
        Masukkan Jumlah (ml)
      </label>
      <Input
        name="waterIntake"
        type="number"
        placeholder="Insert Amount"
        defaultValue={data?.userHydration?.waterIntake}
        readOnly={isEdit}
      ></Input>
    </div>
  );
}