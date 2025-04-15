import { Label } from "@/components/ui/label"


export default function Step2({updateStepState}: {updateStepState: (stepNumber: string, value: string | number | boolean) => void}) {
    return(
        <div className="w-full h-full flex flex-col gap-5 p-20 bg-white/50 rounded-xl justify-center items-center">
            <Label htmlFor="email" className="text-lg">Masukkan Usia Anda</Label>
            <input
                type="number"
                placeholder="Usia"
                className="w-1/2 h-full bg-white px-10 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 "
                onChange={(e) => updateStepState("age", e.target.value)}
            />
        </div>
    )
}