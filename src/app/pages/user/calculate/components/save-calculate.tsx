import type { StepValues } from "../page"

export default function SaveCalculate({props}: { props: StepValues }) {
    const { tdee, bmi, bmr } = props;

    return (
        <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Save your calculation</h1>
        <p className="text-gray-500">Save your calculation to view or update it later.</p>

        <div className="bg-white/30 rounded-lg p-4 text-white shadow-lg w-full h-full">
        <div className="flex flex-col justify-between mb-2 text-center">
            <h1 className="text-2xl font-bold mb-3">Your Results</h1>
            <p className="text-white text-xl">Your BMI: {bmi}</p>
            <p className="text-white text-xl">Your BMR: {bmr}</p>
            <p className="text-white text-xl">Your TDEE: {tdee}</p>
        </div>
        </div>

        </div>
    )
}