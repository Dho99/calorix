"use client";

import { useSession } from "next-auth/react";
import { UserRound } from "lucide-react";
import { useEffect, useState } from "react";
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
import type { Register as User } from "@/app/utils/lib/types/user";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Page() {
  const session = useSession();

  const [data, setUserData] = useState<User | null>(null);
  const [openAlert, setOpenAlert] = useState<{success: boolean, message: string} | null>(null);

  function handleAlertClose() {
    setOpenAlert(null);
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `/api/handler/user/${session?.data?.user?.email}`,
        );
        if (res.status === 200) {
          setUserData(res.data.user);
        }
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    };

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
      setOpenAlert({success: false, message: "Password tidak sama"});
      return;
    }

    axios
      .put("/api/handler/user", payload)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.success) {
            setOpenAlert({success: true, message: res.data.message});
            setEdit(false);
          }else{
            setOpenAlert({success: false, message: res.data.message});
          }
        }
      })
      .catch((err) => {
        if (err instanceof Error) {
          setOpenAlert({success: false, message: err.message});
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
      <div className="w-full h-full px-10 py-15 flex flex-col gap-8">
        <div className="flex flex-row gap-5 w-full h-auto items-center">
          <div className="w-24 h-24 bg-[#9EC8B9]/20 p-2 rounded-full flex justify-center items-center p-4">
            <UserRound className="w-full h-full text-white" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold text-white">{data?.name}</h1>
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
        {
          openAlert && (
            <Alert className={`max-w-3/4 ${openAlert?.success ? 'bg-green-500' : 'bg-red-500/50'} text-white border-0 shadow-lg`} onClick={handleAlertClose}>
              <AlertTitle>{openAlert?.success ? 'Success' : 'Error'} Alert</AlertTitle>
              <AlertDescription className="text-white text-lg font-bold">
               {openAlert.message}
              </AlertDescription>
            </Alert>
          )
        }
        <form
          onSubmit={submitFormInput}
          className="flex flex-col gap-y-5 w-full text-white"
          >
          <div className="grid w-full max-w-3/4 items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              readOnly
              defaultValue={data?.email as string}
              className={`${"bg-[#D9D9D9] text-black"} ${
                isEdit ? "" : `hover:cursor-not-allowed`
              }`}
            />{" "}
            {/* disabled will turn to false if isEdit is true*/}
          </div>
          <div className="grid w-full max-w-3/4 items-center gap-3">
            <Label htmlFor="email">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              readOnly={!isEdit}
              defaultValue={data?.username as string}
              className={`${"bg-[#D9D9D9] text-black"} ${
                isEdit ? "" : `hover:cursor-not-allowed`
              }`}
            />
          </div>
          <div className="grid w-full max-w-3/4 items-center gap-3">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              readOnly={!isEdit}
              defaultValue={data?.name as string}
              className={`${"bg-[#D9D9D9] text-black"} ${
                isEdit ? "" : `hover:cursor-not-allowed`
              }`}
            />
          </div>
          {isEdit && (
            <>
              <div className="grid w-full max-w-3/4 items-center gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="New Password"
                  className="bg-[#D9D9D9] text-black"
                  required
                />
              </div>
              <div className="grid w-full max-w-3/4 items-center gap-3">
                <Label htmlFor="validatePass">Validate Password</Label>
                <Input
                  type="password"
                  id="validatePass"
                  name="validatePass"
                  placeholder="Validate New Password"
                  className="bg-[#D9D9D9] text-black"
                  required
                />
              </div>
            </>
          )}
          {isEdit && (
            <div className="mt-4 mb-10 max-w-3/4 flex">
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-[#1B4242] text-white drop-shadow-xl transition-all transition-duration-400 hover:bg-[#9EC8B9] hover:text-black hover:font-bold"
                value="Sign In"
              >
                Perbarui Profile
              </button>
            </div>
          )}
        </form>
      </div>
    </Dialog>
  );
}
