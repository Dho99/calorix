"use client";

import { useSession } from "next-auth/react";
import { UserRound } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import axios from "axios";
import type {
  Register as User,
  UserCharacteristics,
} from "@/app/utils/lib/types/user";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Characteristics from "./characteristics";

export default function Page() {
  const session = useSession();

  const [data, setUserData] = useState<{
    user?: User;
    characteristics?: UserCharacteristics[];
  } | null>(null);
  const [openAlert, setOpenAlert] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  function handleAlertClose() {
    setOpenAlert(null);
  }

  const scrollToTop = (pageRef: React.RefObject<HTMLDivElement | null>) => {
    if (pageRef.current) {
      pageRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const fetchUser = async () => {

    const searchParams = new URLSearchParams({category: "getUserCharacteristics"});

    try {
      const res = await axios.get(
        `/api/handler/user/?${searchParams.toString()}`
      );
      if (res.status === 200) {
        setUserData(null);
        setUserData({
          user: res.data.user,
          characteristics: res.data.user.UserCharacteristic,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [session]);

  const [isEdit, setEdit] = useState<boolean>(false);

  function submitFormInput(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      username: formData.get("username"),
      name: formData.get("name"),
      password: formData.get("password"),
      email: session?.data?.user?.email,
    };

    const validatePass = formData.get("validatePass");

    if (payload.password !== validatePass) {
      setOpenAlert({ success: false, message: "Password tidak sama" });
      return;
    }

    axios
      .put("/api/handler/user", payload)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.success) {
            setOpenAlert({ success: true, message: res.data.message });
            setEdit(false);
          } else {
            setOpenAlert({ success: false, message: res.data.message });
          }
        }
      })
      .catch((err) => {
        if (err instanceof Error) {
          setOpenAlert({ success: false, message: err.message });
        }
      });
  }

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
      <div className="w-full flex flex-col gap-3">
        <div
          className="w-full h-auto px-15 pb-15 pt-10 flex flex-col gap-8 border dark:bg-white/2 bg-green-200/40 rounded-lg"
          ref={pageRef}
        >
          <div className="flex lg:flex-row md:flex-row flex-col gap-5 w-full h-auto items-center">
            <div className="w-24 h-24 bg-green-300/50 dark:bg-[#9EC8B9]/20 p-2 rounded-full flex justify-center items-center">
              <UserRound className="w-full h-full dark:text-white" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold dark:text-white">
                {data?.user?.name}
              </h1>
              {isEdit ? (
                <DialogTrigger asChild>
                  <button
                    className="py-1 w-full px-4 dark:border bg-green-300/50 dark:border-[#9EC8B9]/70  rounded-lg dark:text-[#9EC8B9] hover:cursor-pointer hover:bg-green-300/70 hover:text-white hover:font-bold hover:shadow-lg transition-all transition-duration-400"
                    type="button"
                  >
                    Batal Edit Profile
                  </button>
                </DialogTrigger>
              ) : (
                <button
                 className="py-1 w-full px-4 dark:border bg-green-300/50 dark:bg-transparent dark:border-[#9EC8B9] rounded-lg dark:text-[#9EC8B9] hover:cursor-pointer hover:bg-green-300/70 hover:text-white hover:font-bold hover:shadow-lg transition-all transition-duration-400" 
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
          {openAlert && (
            <Alert
              className={`lg:max-w-3/4 w-full ${
                openAlert?.success ? "bg-green-500" : "bg-red-500/50"
              } text-white border-0 shadow-lg`}
              onClick={handleAlertClose}
            >
              <AlertTitle>
                {openAlert?.success ? "Success" : "Error"} Alert
              </AlertTitle>
              <AlertDescription className="text-white text-lg font-bold">
                {openAlert.message}
              </AlertDescription>
            </Alert>
          )}
          <form
            onSubmit={submitFormInput}
            className="flex flex-col gap-y-5 w-full dark:text-white lg:items-start items-center"
          >
            <div className="grid w-full w-full items-center gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                readOnly
                defaultValue={data?.user?.email as string}
                className={`${"dark:bg-[#D9D9D9]/20 bg-black/10 dark:text-white"} ${
                  isEdit ? "" : `hover:cursor-not-allowed`
                }`}
              />{" "}
              {/* disabled will turn to false if isEdit is true*/}
            </div>
            <div className="grid w-full w-full items-center gap-3">
              <Label htmlFor="email">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                name="username"
                readOnly={!isEdit}
                defaultValue={data?.user?.username as string}
                className={`${"dark:bg-[#D9D9D9]/20 bg-black/10 dark:text-white"} ${
                  isEdit ? "" : `hover:cursor-not-allowed`
                }`}
              />
            </div>
            <div className="grid w-full w-full items-center gap-3">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                readOnly={!isEdit}
                defaultValue={data?.user?.name as string}
                className={`${"dark:bg-[#D9D9D9]/20 bg-black/10 dark:text-white"} ${
                  isEdit ? "" : `hover:cursor-not-allowed`
                }`}
              />
            </div>
            {isEdit && (
              <>
                <div className="grid w-full lg:max-w-3/4 w-full items-center gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="New Password"
                    className="dark:bg-[#D9D9D9]/20 bg-black/10 dark:text-white"
                    required
                  />
                </div>
                <div className="grid w-full lg:max-w-3/4 w-full items-center gap-3">
                  <Label htmlFor="validatePass">Validate Password</Label>
                  <Input
                    type="password"
                    id="validatePass"
                    name="validatePass"
                    placeholder="Validate New Password"
                    className="dark:bg-[#D9D9D9]/20 bg-black/10 dark:text-white"
                    required
                  />
                </div>
              </>
            )}
            {isEdit && (
              <div className="mt-4 mb-10 lg:max-w-3/4 w-full flex">
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-[#1B4242] text-white drop-shadow-xl transition-all transition-duration-400 hover:bg-[#9EC8B9] hover:text-black hover:font-bold"
                  value="Sign In"
                  onClick={() => {
                    scrollToTop(pageRef);
                  }}
                >
                  Perbarui Profile
                </button>
              </div>
            )}
          </form>
        </div>
        <Characteristics data={data?.characteristics} fetchUser={fetchUser}/>
      </div>
    </Dialog>
  );
}
