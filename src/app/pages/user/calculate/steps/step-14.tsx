import { Label } from "@/components/ui/label"


export default function Step14({updateStepState}: {updateStepState: (stepNumber: string, value: string | number | boolean) => void}) {
    return(
        <div className="w-full h-full flex flex-col gap-10 p-10 ring ring-black/30 shadow-xl/20 rounded-xl justify-center items-center">
            <Label htmlFor="email" className="text-3xl font-bold">Kapan Target anda ingin tercapai ?</Label>
            <input
                type="date"
                placeholder="Target Berat Badan (kg)"
                className="w-1/2 h-full bg-white p-4 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 "
                onChange={(e) => updateStepState("targetWeight", e.target.value)}
            />
        </div>
    )
}