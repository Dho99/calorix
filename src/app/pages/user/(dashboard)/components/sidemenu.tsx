"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { AppWindowIcon, UserRoundPenIcon, LogOutIcon, ActivityIcon } from "lucide-react";

type Preference = {
  title: string;
  link: string;
  icon: typeof AppWindowIcon;
};

export const dashboardMenu: Preference[] = [
  {
    title: "Dashboard",
    link: "/pages/user/dashboard",
    icon: AppWindowIcon,
  },
  {
    title: "Aktivitas",
    link: "/pages/user/activity",
    icon: ActivityIcon,
  },
  {
    title: "Manajemen Akun",
    link: "/pages/user/manage",
    icon: UserRoundPenIcon,
  },

];


export default function SideMenu() {
  const pathname = usePathname();


  return (
    <div className="h-dvh border-e-3 border-[#5D5D5D] flex flex-col gap-5 px-3 w-full py-4">
      <div className="flex flex-col gap-5 w-full h-full">
        <div className="flex flex-col gap-3">
          {dashboardMenu.map((item, index) => {
            return (
              <Link
                key={index}
                href={`${item.link}`}
                className={`${
                  pathname !== item.link
                    ? "hover:bg-slate-200/30 hover:shadow-lg hover:font-semibold "
                    : "bg-slate-200/30 shadow-lg font-semibold "
                } text-white text-base transition-all transition-duration-400  py-2 px-4 rounded-lg flex flex-row gap-2 items-center`}
              >
                <item.icon className="text-white" />
                {item.title}
              </Link>
            );
          })}
          <button className="text-white text-base text-start transition-all transition-duration-400  py-2 px-4 rounded-lg hover:bg-slate-200/30 hover:shadow-lg hover:font-semibold flex flex-row gap-2 items-center" onClick={() => {signOut({redirectTo: '/auth/signin'})}}><LogOutIcon className="text-white"/> Signout </button>
        </div>
      </div>
    </div>
  );
}
