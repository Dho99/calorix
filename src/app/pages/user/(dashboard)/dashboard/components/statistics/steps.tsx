

export default function Steps({stepData}: {stepData: {stepsCount?: number|string, stepsGoal?: number|string}}){
 

    return (
        <div className="w-full h-full  bg-green-200 dark:bg-[#1B4242] dark:text-white border border-white/50 rounded-lg shadow-md p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">Steps</h2>
        <div className="flex flex-row items-baseline w-full">
        <p className="font-bold text-4xl">{parseInt(String(stepData?.stepsCount)) || 0}</p>
        <p className="font-bold text-xl dark:text-white/60">/{parseInt(String(stepData?.stepsGoal)) || 0} Langkah</p>
        </div>
      </div>
    )
}