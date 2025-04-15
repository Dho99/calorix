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

type Step7Types = {
  name: string;
  value: number;
};

export default function Step7({
  updateStepState,
}: {
  updateStepState: (
    stepNumber: string,
    value: string | number | boolean
  ) => void;
}) {

    const selectLevel: Step7Types[] = [
       { name: "Jogging", value: 1 },
       { name: "Lari", value: 2 },
       { name: "Bersepeda", value: 3 },
       { name: "Renang", value: 4 },
       { name: "Angkat Beban", value: 5 },
       { name: "Yoga", value: 6 },
       { name: "Pilates", value: 7 },
       { name: "Aerobik", value: 8 },
       { name: "Zumba", value: 9 },
       { name: "Seni Bela Diri", value: 10 },
       { name: "Olahraga Tim", value: 11 },
       { name: "Olahraga Lainnya", value: 12 },
       { name: "Aktivitas Fisik Sehari-hari", value: 13 },
       { name: "Aktivitas Fisik Ringan", value: 14 },
       { name: "Aktivitas Fisik Sedang", value: 15 },
       { name: "Aktivitas Fisik Berat", value: 16 },
       { name: "Aktivitas Fisik Sangat Berat", value: 17 },
       { name: "Aktivitas Fisik Ekstra Berat", value: 18 },
       { name: "Aktivitas Fisik Lainnya", value: 19 },
       { name: "Aktivitas Fisik Tidak Teratur", value: 20 },
    ]

  return (
    <div className="w-full h-full flex flex-col gap-5 p-20 bg-white/50 rounded-xl justify-center items-center">
      <Label htmlFor="email" className="text-lg text-white">
        Apa Jenis Aktivitas Olahraga Fisik yang biasa Anda Lakukan ?
      </Label>
      <Select onValueChange={(value => updateStepState("sportType", value))}>
        <SelectTrigger className="w-1/2 p-7">
          <SelectValue placeholder="Jenis Aktivitas Olahraga Fisik" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Jenis Aktivitas Olahraga</SelectLabel>
            {
                selectLevel.map((level, key) => (
                    <SelectItem key={key} value={String(level.value)} >
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
