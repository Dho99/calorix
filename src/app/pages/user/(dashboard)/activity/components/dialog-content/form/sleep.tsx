import { Input } from "@/components/ui/input";

export default function SleepForm(){
    return (
        <div className="flex flex-col gap-3 ">
        <label htmlFor="activity-name" className="text-white">
          Masukkan Durasi (Menit)
        </label>
        <Input
          name="duration"
          type="number"
          placeholder="Insert Duration"
        ></Input>
      </div>
    )
}