import { Label } from "@/components/ui/label"


export default function Step4({updateStepState}: {updateStepState: (stepNumber: string, value: string | number | boolean) => void}) {

    return(
        <>
            <Label htmlFor="email" className="text-lg">Masukkan Tinggi Badan Anda</Label>
            <input
                type="number"
                placeholder="Berat Badan (kg)"
                className="w-1/2 h-full bg-white px-10 py-5 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 "
                onChange={(e) => updateStepState("weight", e.target.value)}
            />
        </>
    )
}