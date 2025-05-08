"use client";

export type ActivitiesProps = {
  title?: string | number;
  value?: number | string;
  target?: number | string;
  parameter?: string | number;
  unit?: string;
};

export default function Activities({
  pageData,
}: {
  pageData: ActivitiesProps[];
}) {

  return (
    <div className="grid grid-cols-2 gap-2">
      {
        pageData.map((item, index) => (
          <div
          key={index}
          className="w-full h-full bg-[#1B4242] text-white rounded-lg shadow-md p-4 flex flex-col"
          >
            <h2 className="text-lg font-bold">{item.title}</h2>
            <div className="flex flex-wrap gap-2 items-baseline">
            <p className="text-3xl font-bold">{item.value || 0} {item?.unit} / <span className="text-2xl">{item?.target || 0}</span></p> 
            <p className="text-xl"> {item.parameter}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
