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

type Step5Types = {
  name: string;
  value: number; //moderate (2) | light (1) | heavy (3) | extra (4)
};

export default function Step5({
  updateStepState,
}: {
  updateStepState: (
    stepNumber: string,
    value: string | number | boolean
  ) => void;
}) {

    const selectLevel: Step5Types[] = [
        { name: "Sedentary ", value: 1 },
        { name: "Lightly Active", value: 2 },
        { name: "Moderately Active", value: 3 },
        { name: "Very Active ", value: 4 },
        { name: "Extra Active", value: 5 },
    ];

  return (
    <div className="w-full h-full flex flex-col gap-5 p-20 bg-white/50 rounded-xl justify-center items-center">
      <Label htmlFor="email" className="text-lg text-white">
        Pilih Skala Aktivitas Harian Anda
      </Label>
      <Select onValueChange={(value => updateStepState("activityLevel", value))}>
        <SelectTrigger className="w-1/2 p-7">
          <SelectValue placeholder="Select Activity Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Level</SelectLabel>
            {
                selectLevel.map((level, key) => (
                    <SelectItem key={key} value={String(level.value)}>
                        <div>{level.name}</div>
                    </SelectItem>
                ))
            }
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
