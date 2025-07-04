"use client";

import React, { useEffect, useState } from "react";
import type { UserActivites } from "@/app/utils/lib/types/user";
import axios from "axios";
import ActivityTable from "./components/table";
import {
  CopyPlusIcon,
  FunnelIcon,
  SearchIcon,
  LoaderCircleIcon,
} from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ActivityDialog from "./components/dialog";
import AddActivityContent from "./components/dialog-content/create";
import { dropdownMenuItems } from "./components/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export type DialogProps = {
  content?: React.ReactNode;
};

export default function Page() {
  const [activities, setActivities] = useState<UserActivites[] | null>(null);
  const [pageData, setPageData] = useState({
    page: 1,
    start: 1,
    limit: 10,
    total: 0,
    isLoading: false,
    category: "",
  });

  const fetchActivities = async (
    updatedPageData = pageData,
    category?: string,
    findByName?: string
  ) => {
    setPageData((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      const res = await axios.get(
        `/api/handler/activities/user?type=${
          category ? `filterActivities` : "getAllUserActivities"
        }&page=${updatedPageData?.start}&limit=${updatedPageData?.limit}${
          findByName ? `&title=${findByName}` : `${category ? `&category=${category}` : ""}`
        }`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        setActivities(res.data.data);
        setPageData((prev) => ({
          ...prev,
          total: res.data.total,
          isLoading: false,
          category: category as string,
        }));
      } else {
        setActivities(null);
      }
    } catch (err) {
      console.error("Error fetching activities:", err);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const [dialogProps, setDialogProps] = useState<DialogProps | null>(null);

  function nextSlide() {
    const updatedPageData = {
      ...pageData,
      page: pageData.page + 1,
      start: pageData.start + pageData.limit,
    };
    setPageData(updatedPageData);
    fetchActivities(updatedPageData);
  }

  function prevSlide() {
    const updatedPageData = {
      ...pageData,
      page: pageData.page - 1,
      start: pageData.start - pageData.limit,
    };
    setPageData(updatedPageData);
    fetchActivities(updatedPageData);
  }

  function handleFilterByName(event?: React.FormEvent<HTMLFormElement>, emptyInput?: boolean) {
    event?.preventDefault();
    if(emptyInput) {
      (document.getElementById("search-form") as HTMLFormElement)?.reset();
    }else{
      const formData = new FormData(event?.currentTarget);
      const title = formData.get("title") as string;
      fetchActivities(pageData, title, title);
    }
  }

  return (
    
    <Dialog open={dialogProps !== null}>
      {dialogProps && (
        <DialogContent className="bg-black/50 border backdrop-blur-sm max-h-[90vh] text-white overflow-y-auto overflow-x-hidden">
          <ActivityDialog dialogProps={dialogProps!} />
        </DialogContent>
      )}

      <div className="flex flex-col gap-5 w-full h-auto">
        <div className="lg:flex-row md:flex-row flex-col  gap-y-5 flex w-full items-center">
          <div className="flex flex-col gap-3 w-full me-auto">
            <h1 className="dark:text-white text-2xl font-semibold">Aktivitas</h1>
            <p className="dark:text-white">
              Berikut adalah aktivitas yang telah anda lakukan
            </p>
          </div>
          <DialogTrigger asChild>
            <button
              type="button"
              className="dark:bg-[#9EC8B9]/10 bg-green-300/70 hover:bg-[#9EC8B9]/50 transition-all transition-duration-400 py-2 px-4 border rounded-lg dark:text-white shadow-lg lg:ms-auto md:ms-auto me-auto flex flex-row gap-4 lg:w-58 md:w-64 w-full justify-center"
              onClick={() => {
                setDialogProps({
                  content: (
                    <AddActivityContent
                      setDialogProps={setDialogProps}
                      fetchActivities={fetchActivities}
                    />
                  ),
                });
              }}
            >
              <CopyPlusIcon className="dark:text-white" />
              Tambah Data
            </button>
          </DialogTrigger>
        </div>
        <div className="bg-green-200 dark:bg-white/2 border border-black dark:border-white rounded-lg shadow-lg p-5 w-full h-auto flex flex-col gap-5">
          <div className="flex lg:flex-row md:flex-row flex-col gap-y-5 w-full justify-between items-center">

            <form className="flex flex-row w-full" onSubmit={handleFilterByName} id="search-form">
              <Input type="text" className="lg:w-sm md:w-sm w-full border border-black dark:border-white rounded-e-none" name="title" placeholder="Find Activity by Name"></Input>
              <Button type="submit" variant={"default"} className="rounded-s-none px-5 border border-black dark:border-white text-black bg-green-300/70 dark:bg-white/10 dark:text-white hover:bg-white/40">Cari</Button>
            </form>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-green-300/70 hover:bg-green-300 dark:bg-white/3 dark:text-white space-x-2 me-auto lg:w-fit md:w-fit w-full"
                >
                  <FunnelIcon />
                  {pageData?.category
                    ? `Filter: ${pageData?.category}`
                    : "Filter"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-w-56 bg-green-600/20 dark:bg-black/20 backdrop-blur-xs dark:text-white">
                <DropdownMenuLabel>Filter By Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {dropdownMenuItems.map((item, index) => (
                    <DropdownMenuSub key={index}>
                      <DropdownMenuSubTrigger className="flex flex-row items-center gap-x-2 hover:bg-white/5 hover:cursor-pointer">
                        {item.icon}
                        {item.title}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="bg-green-600/20 dark:bg-black/20 backdrop-blur-xs dark:text-white">
                          {item.child.map((childItem, childIndex) => (
                            <DropdownMenuItem
                              key={childIndex}
                              onClick={() => {
                                fetchActivities(pageData, childItem.category);
                                handleFilterByName(undefined, true);
                              }}
                              className="flex flex-row items-center gap-x-2 hover:bg-white/5 hover:cursor-pointer"
                            >
                              {childItem.icon}
                              {childItem.title}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ))}
                  <DropdownMenuItem
                    className="flex flex-row items-center gap-x-2 hover:bg-white/5 hover:cursor-pointer"
                    onClick={() => {
                      fetchActivities(pageData);
                    }}
                  >
                    <SearchIcon />
                    <span className="dark:text-white">All</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            
          </div>
          <ActivityTable
            activitiesProps={activities}
            setDialogProps={setDialogProps}
            fetchActivities={fetchActivities}
          />
          <div className="w-full flex lg:justify-end md:justify-end justify-center">
            <div className="flex flex-row border border-black dark:border-white/20 rounded-lg bg-white/5 p-2 gap-2">
              <Button
                variant="secondary"
                className="bg-green-500/50 hover:bg-green-200"
                disabled={pageData?.page < 2}
                onClick={prevSlide}
              >
                Prev
              </Button>
              <div className="flex flex-row gap-2">
                <div className="border items-center flex px-3 rounded text-lg font-bold bg-white/50">
                  {pageData?.isLoading ? (
                    <LoaderCircleIcon className="animate-spin" />
                  ) : (
                    pageData?.page
                  )}
                </div>
              </div>
              <Button
              className="bg-green-500/50 hover:bg-green-200"
                variant="secondary"
                onClick={nextSlide}
                disabled={
                  !(
                    pageData?.page <
                    Math.ceil(pageData?.total / pageData?.limit)
                  )
                }
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
