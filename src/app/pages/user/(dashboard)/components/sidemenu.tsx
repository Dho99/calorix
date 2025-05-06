"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  AppWindowIcon,
  UserRoundPenIcon,
  LogOutIcon,
  ActivityIcon,
  MinusIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type Preference = {
  title: string;
  collapsible?: boolean;
  link:
    | string
    | {
        title: string;
        childLink: string;
      }[];
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
    collapsible: false,
    link: "/pages/user/activity",
    // link: [
    //   {
    //     title: "Tambah Aktivitas",
    //     childLink: "/pages/user/activity/add",
    //   },
    //   {
    //     title: "Riwayat Aktivitas",
    //     childLink: "/pages/user/activity",
    //   },
    // ],
    icon: ActivityIcon,
  },
  {
    title: "Akun",
    link: "/pages/user/manage",
    icon: UserRoundPenIcon,
  },
];

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <div className="h-dvh flex flex-col gap-5 px-3 w-full py-4 relative ">
      <div className="flex flex-col gap-5 w-full h-full sticky top-0">
        <div className="flex flex-col gap-2">
          {dashboardMenu.map((item, index) => {
            return item.collapsible ? (
              <Accordion key={index} type="single" collapsible className="text-white">
                <AccordionItem value={item.title}>
                  <AccordionTrigger className="text-white text-base transition-all transition-duration-400  py-2 px-4 rounded-lg hover:bg-slate-200/30 hover:shadow-lg hover:font-semibold flex flex-row gap-2 items-center hover:no-underline">
                    <item.icon className="text-white" />
                    <p className="me-auto">{item.title}</p>
                  </AccordionTrigger>
                  <AccordionContent className="py-2">
                    <div className="flex flex-col gap-y-2">
                      {Array.isArray(item.link) &&
                        item.link.map((child, index) => {
                          return (
                            <Link
                              key={index}
                              href={`${child.childLink}`}
                              className={`${
                                pathname !== child.childLink
                                  ? "hover:bg-slate-200/30 hover:shadow-lg hover:font-semibold "
                                  : "bg-slate-200/30 shadow-lg font-semibold "
                              } text-white text-sm transition-all transition-duration-400  py-2 px-4 rounded-lg flex flex-row gap-2 items-center`}
                            >
                              <MinusIcon className="text-white" />
                              {child.title}
                            </Link>
                          );
                        })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
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
          <button
            className="text-white text-base text-start transition-all transition-duration-400  py-2 px-4 rounded-lg hover:bg-slate-200/30 hover:shadow-lg hover:font-semibold flex flex-row gap-2 items-center"
            onClick={() => {
              signOut({ redirectTo: "/auth/signin" });
            }}
          >
            <LogOutIcon className="text-white" /> Signout{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
