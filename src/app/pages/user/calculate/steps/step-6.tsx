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

type Step6Types = {
  name: string;
  value: number; 
};

export default function Step6({
  updateStepState,
}: {
  updateStepState: (
    stepNumber: string,
    value: string | number | boolean
  ) => void;
}) {

    const selectLevel: Step6Types[] = [
        { name: "Menurunkan Berat Badan", value: 1 },
        { name: "Menaikkan Berat Badan", value: 2 },
        { name: "Menjaga Berat Badan", value: 3 },
        { name: "Meningkatkan Massa Otot", value: 4 },
        { name: "Menurunkan Lemak Tubuh", value: 5 },
        { name: "Menjaga Kesehatan", value: 6 },
        { name: "Meningkatkan Kesehatan", value: 7 },
        { name: "Meningkatkan Kekuatan", value: 8 },
        { name: "Meningkatkan Daya Tahan", value: 9 },
        { name: "Meningkatkan Kebugaran", value: 10 },
    ]

  return (
    <>
      <Label htmlFor="email" className="text-lg text-white">
        Apa Tujuan Diet Anda?
      </Label>
      <Select onValueChange={(value => updateStepState("dietPurpose", value))}>
        <SelectTrigger className="w-1/2 p-7">
          <SelectValue placeholder="Select Your Diet Purpose" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Diet Purpose</SelectLabel>
            {
                selectLevel.map((level, key) => (
                    <SelectItem key={key} value={String(level.value)} onClick={() => updateStepState("activityLevel", level.value)}>
                        {level.name}
                    </SelectItem>
                ))
            }
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
