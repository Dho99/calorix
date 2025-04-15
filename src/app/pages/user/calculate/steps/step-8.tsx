import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Step8Types = {
  name: string;
  value: number;
};

export default function Step8({
  updateStepState,
}: {
  updateStepState: (
    stepNumber: string,
    value: string | number | boolean
  ) => void;
}) {

    const selectLevel: Step8Types[] = [
      { name: "Kurang dari 30 menit", value: 1 },
      { name: "30 menit - 1 jam", value: 2 },
      { name: "1 jam - 2 jam", value: 3 },
      { name: "2 jam - 3 jam", value: 4 },
      { name: "Lebih dari 3 jam", value: 5 },
      { name: "Tidak pernah", value: 6 },
    ]

  return (
    <div className="w-full h-full flex flex-col gap-5 p-20 bg-white/50 rounded-xl justify-center items-center">
      <Label htmlFor="email" className="text-lg text-white">
       Berapa Lama Anda Biasa Melakukan Aktivitas Olahraga Fisik?
      </Label>
      <Select onValueChange={(value => updateStepState("activityDuration", value))}>
        <SelectTrigger className="w-1/2 p-7">
          <SelectValue placeholder="Durasi Olahraga / Aktivitas" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Durasi Aktivitas / Olahraga</SelectLabel>
            {
                selectLevel.map((level, key) => (
                    <SelectItem key={key} value={String(level.value)}>
                        {level.name}
                    </SelectItem>
                ))
            }
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
