"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

type Preference = {
  name: string;
  link: string;
};

export default function SideMenu() {
  const pathname = usePathname();

  const preferencesMenu: Preference[] = [
    {
      name: "Manajemen Akun",
      link: "/pages/user/manage",
    },
    {
      name: "Privacy",
      link: "privacy",
    },
    {
      name: "Notifications",
      link: "notifications",
    },
    {
      name: "Security",
      link: "security",
    },
    {
      name: "Signout",
      link: "#",
    },
  ];

  return (
    <div className="h-fit border-e-3 border-[#5D5D5D] flex flex-col gap-5 w-full py-4">
      <div className="flex flex-col gap-5 w-full h-full px-4">
        <div className="flex flex-col gap-3">
          {preferencesMenu.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/pages/user/preferences/${item.link}`}
                className={`${
                  pathname !== item.link
                    ? "hover:bg-slate-200/30 hover:shadow-lg hover:font-semibold "
                    : "bg-slate-200/30 shadow-lg font-semibold "
                } text-white text-base transition-all transition-duration-400  py-2 px-4 rounded-lg`}
                {...(item.link === "#" && {
                  onClick: () => {
                    signOut({redirectTo: '/auth/signin'});
                    // Add signout logic here
                  },
                })}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
