import { Label } from "@/components/ui/label"


export default function Step3({updateStepState}: {updateStepState: (stepNumber: string, value: string | number | boolean) => void}) {
    return(
        <>
            <input
                type="number"
                placeholder="Usia (tahun)"
                className="w-full h-full bg-white px-10 py-5 shadow-lg text-black rounded-lg text-2xl font-bold flex flex-col items-center justify-center gap-5 "
                onChange={(e) => updateStepState("age", e.target.value)}
            />
        </>
    )
}