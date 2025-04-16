"use client";

import { useSession } from "next-auth/react";
import { UserRound } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";


export default function Page() {
  const { data } = useSession();

  const [isEdit, setEdit] = useState<boolean>(false);

  return (
    <Dialog>
      <DialogContent className="sm:max-w-[425px] bg-[#1E1E2F] rounded-lg text-white">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Semua perubahan yang dilakukan akan dihapus, Apakah anda yakin ?
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row w-full py-4">
          <DialogClose asChild>
            <button
              className="py-2 px-3 border rounded-lg hover:cursor-pointer text-white"
              onClick={() => {
                setEdit(false);
              }}
            >
              Batal Edit
            </button>
          </DialogClose>
          <DialogClose asChild>
            <button className="py-2 px-3 bg-[#9EC8B9] rounded-lg hover:cursor-pointer text-black ms-auto">
              Tetap Edit
            </button>
          </DialogClose>
        </div>
      </DialogContent>
      <div className="w-full h-full px-10 py-15 flex flex-col gap-8">
        <div className="flex flex-row gap-5 w-full h-auto items-center">
          <div className="w-24 h-24 bg-[#9EC8B9]/20 p-2 rounded-full flex justify-center items-center p-4">
            <UserRound className="w-full h-full text-white" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold text-white">{data?.user?.name}</h1>
            {isEdit ? (
              <DialogTrigger asChild>
                <button
                  className="py-1 w-fit px-4 border border-[#9EC8B9] rounded-lg text-[#9EC8B9] hover:cursor-pointer hover:bg-[#9EC8B9] hover:text-white hover:font-bold hover:shadow-lg transition-all transition-duration-400"
                  type="button"
                >
                  Batal Edit Profile
                </button>
              </DialogTrigger>
            ) : (
              <button
                className="py-1 w-fit px-4 border border-[#9EC8B9] rounded-lg text-[#9EC8B9] hover:cursor-pointer hover:bg-[#9EC8B9] hover:text-white hover:font-bold hover:shadow-lg transition-all transition-duration-400"
                type="button"
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-5 w-full text-white">
          <div className="grid w-full max-w-3/4 items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              disabled={!isEdit}
              defaultValue={data?.user?.email!}
            />{" "}
            {/* disabled will turn to false if isEdit is true*/}
          </div>
          <div className="grid w-full max-w-3/4 items-center gap-3">
            <Label htmlFor="email">Username</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              disabled={!isEdit}
              defaultValue={data?.user?.username!}
            />
          </div>
          <div className="grid w-full max-w-3/4 items-center gap-3">
            <Label htmlFor="email">Nama Lengkap</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              disabled={!isEdit}
              defaultValue={data?.user?.name!}
            />
          </div>
          {isEdit && (
            <>
              <div className="grid w-full max-w-3/4 items-center gap-3">
                <Label htmlFor="email">Password</Label>
                <Input type="password" id="email" name="password" placeholder="New Password" />
              </div>
              <div className="grid w-full max-w-3/4 items-center gap-3">
                <Label htmlFor="email">Password</Label>
                <Input type="password" id="email" name="validatePassword" placeholder="Validate New Password" />
              </div>
            </>
          )}
        </div>
      </div>
    </Dialog>
  );
}
