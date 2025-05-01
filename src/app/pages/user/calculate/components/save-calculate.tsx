import type { StepValues } from "../page"

export default function SaveCalculate({props}: { props: StepValues }) {
    const { tdee, bmi, bmr, userMETValue } = props;

    return (
        <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Save your calculation</h1>
        <p className="text-gray-500">Save your calculation to view or update it later.</p>

        <div className="bg-white/30 rounded-lg p-4 text-white shadow-lg w-full h-full flex justify-center">
            <div className="flex flex-col mb-2 text-start">
                <h1 className="text-2xl font-bold mb-3 text-center">Your Results</h1>
                <p className="text-white text-xl">BMI Anda: {parseFloat(bmi as string).toFixed(2)}</p>
                <p className="text-white text-xl">BMR Anda: {parseFloat(bmr as string).toFixed(2)}</p>
                <p className="text-white text-xl">TDEE Anda: {parseFloat(tdee as string).toFixed(2)}</p>
                <p className="text-white text-xl">Perhitungan MET Awal Anda: {parseFloat(userMETValue as string).toFixed(2)} Kalori</p>
            </div>
        </div>

        </div>
    )
}