"use client";
import { useEffect, useState } from "react";
import SideMenu from "./components/sidemenu";
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { XIcon } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showInfo, setShowInfo] = useState({
    show: false,
    msgInfo: "",
  });

  useEffect(() => {
    const updateLastSeen = () => {
      axios
        .post("/api/handler/user/last-seen")
        .then((res) => {
          if (res.status === 200) {
            if (res.data.show) {
              setShowInfo({
                show: res.data.show,
                msgInfo: res.data.msgInfo,
              });
            }
          }
        })
        .catch((err) => {
          console.log("Error updating last seen", err);
        });
    };
    updateLastSeen();
  }, []);
  return (
    <div className="w-full h-full lg:flex lg:flex-row pt-8 dark:text-white">
      <div className="max-w-1/6 w-full overflow-hidden h-full flex justify-center py-15 relative lg:block hidden">
        <SideMenu />
      </div>
      <div className="w-full h-auto px-5 border-s-2 border-[#5D5D5D] my-10">
        {
          showInfo.show && (
            <div className="my-5">
              <Alert
                variant={"default"}
                className="bg-red-700/40 flex flex-row items-center h-full w-full"
              >
                <div className="flex flex-col">
                  <AlertTitle className="text-xl font-bold">Heads up!</AlertTitle>
                  <AlertDescription className="text-base text-white">
                    {showInfo.msgInfo}
                  </AlertDescription>
                </div>
                <XIcon
                  className="w-full h-full bg-red ms-auto"
                  onClick={() => {
                    setShowInfo({ show: false, msgInfo: "" });
                  }}
                />
              </Alert>
            </div>
          )
        }
        {children}
      </div>
    </div>
  );
}
