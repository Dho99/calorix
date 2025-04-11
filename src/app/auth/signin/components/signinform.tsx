"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SigninForm({setMode}: {setMode: () => void}): React.ReactNode {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    axios
      .post("/api/handler/signin", user)
      .then((response) => console.log(response));
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
          className="mt-3"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mt-3"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mt-3"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mt-3"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mt-3"
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="mt-3"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-400 text-white"
        >
          Signin
        </button>
        <button
          type="button"
          className="bg-sky-200 w-full rounded-lg shadow-lg py-2"
          onClick={() => {
            setMode()
          }}
        >
          Register
        </button>
      </div>
    </form>
  );
}
