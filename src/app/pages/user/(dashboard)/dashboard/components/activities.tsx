"use client";

export type ActivitiesProps = {
  title?: string | number;
  value?: number | string;
  target?: number | string;
  parameter?: string | number;
  unit?: string;
};

export type CaloriesByMonthProps = {
  caloriesBurnedByMonth: number;
  targetBurnedCaloriesByMonth: number;
};

export default function Activities({
  pageData,
}: {
  pageData: ActivitiesProps[];
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {pageData.map((item, index) => (
        <div
          key={index}
          className="w-full h-full bg-[#1B4242]/70 text-white rounded-lg shadow-md p-4 flex flex-col border border-white/50"
        >
          <h2 className="text-lg font-bold">{item.title}</h2>
          <div className="flex flex-row items-baseline gap-2">
            <p className="text-3xl font-bold">
              {item.value || 0} {item?.unit}{" "}
   
            </p>
            <p className="text-xl flex flex-wrap items-baseline">/ <span className="text-2xl me-1">{item?.target || 0}</span>{item.parameter}</p>
          </div>
          {/* <div className="flex flex-wrap gap-2 items-baseline">
       
          </div> */}
        </div>
      ))}
    </div>
  );
}
