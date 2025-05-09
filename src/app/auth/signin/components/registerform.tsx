"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useRef } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function RegisterForm({
  setMode,
}: {
  setMode: (is: boolean) => void;
}): React.ReactNode {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const user = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("name") as string,
    };

    axios
      .post("/api/handler/user", user)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setMode(true);
          toast(response.data.message);
          formRef.current?.reset();
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <form className="flex flex-col w-full gap-y-5" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mt-2 bg-[#D9D9D9] text-white"
          required
        />
      </div>
      <div>
        <Label htmlFor="Name">Name</Label>
        <Input
          type="text"
          id="Name"
          name="name"
          placeholder="Name"
          className="mt-2 bg-[#D9D9D9] text-white"
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="mt-2 bg-[#D9D9D9] text-white"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <p>
          Sudah punya Akun ?{" "}
          <a
            className="hover:cursor-pointer text-blue-400 font-bold"
            onClick={() => setMode(true)}
          >
            Login Disini
          </a>
        </p>
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-[#1B4242] text-white hover:cursor-pointer"
        >
          Register
        </button>
      </div>
    </form>
  );
}
