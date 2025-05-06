"use client";
import { useSession } from "next-auth/react";
import { UserCircle } from "lucide-react";

type OverviewProps = {
  currentWeight?: number;
  bmi?: number;
  bodyFatPercentage?: number;
  targetWeight?: number;
};

export default function Overview({
  pageData,
}: {
  pageData: OverviewProps;

}) {

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="w-full h-auto flex flex-col gap-2">
      <div className="w-full h-auto bg-[#1B4242] text-white rounded-lg shadow-md p-4">
        <div className="flex flex-row w-full p-3 gap-5 items-center">
          <div className="bg-[#5C8374] h-28 w-28 rounded-full">
            <UserCircle className="w-full h-full text-white" />
          </div>
          <div className="flex flex-col">
            <p className="text-lg text-gray-300">{user?.username}</p>
            <h1 className="text-4xl font-bold text-white mb-3">
              {user?.name}
            </h1>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-2">
          <div className="w-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">Weight</h2>
            <p>{pageData?.currentWeight} Kg</p>
          </div>
          <div className="w-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">Goal</h2>
            <p>{pageData?.targetWeight} Kg</p>
          </div>
          <div className="w-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">BMI</h2>
            <p>
              {pageData?.bmi &&
                parseFloat(String(pageData?.bmi)).toFixed(2)}
            </p>
          </div>
          <div className="w-full bg-[#1B4242] text-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">Body Fat</h2>
            <p>
              {pageData?.bodyFatPercentage &&
                parseFloat(String(pageData?.bodyFatPercentage)).toFixed(
                  2
                )}{" "}
              %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
