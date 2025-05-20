import type { StepValues } from "../page"

export default function SaveCalculate({props}: { props: StepValues }) {
    const { tdee, bmi, bmr, userMETValue } = props;

    return (
        <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Save your calculation</h1>
        <p className="text-gray-500">Save your calculation to view or update it later.</p>

        <div className="bg-green-300/60 dark:bg-white/30 rounded-lg p-4 dark:text-white shadow-lg w-full h-full flex justify-center">
            <div className="flex flex-col mb-2 text-start">
                <h1 className="text-2xl font-bold mb-3 text-center">Your Results</h1>
                <p className="dark:text-white text-xl">BMI Anda: {Number(bmi).toFixed(2) ?? 0}</p>
                <p className="dark:text-white text-xl">BMR Anda: {Number(bmr).toFixed(2) ?? 0}</p>
                <p className="dark:text-white text-xl">TDEE Anda: {Number(tdee).toFixed(2) ?? 0}</p>
                <p className="dark:text-white text-xl"> Perhitungan Kalori dari Aktivitas Fisik (MET) Awal Anda: {Number(userMETValue).toFixed(2) ?? 0} Kalori</p>
            </div>
        </div>

        </div>
    )
}