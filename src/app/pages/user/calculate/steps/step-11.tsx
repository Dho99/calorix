import { Label } from "@/components/ui/label"


export default function Step11({updateStepState}: {updateStepState: (stepNumber: string, value: string | number | boolean) => void}) {
    return(
        <>
            <Label htmlFor="email" className="text-lg">Kapan Target anda ingin tercapai ?</Label>
            <input
                type="date"
                placeholder="Target Berat Badan (kg)"
                className="w-1/2 h-full bg-white px-10 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 "
                onChange={(e) => updateStepState("targetWeight", e.target.value)}
            />
        </>
    )
}