"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { loginSchema } from "@/app/utils/lib/validation/user";
import { FormEvent } from "react";

export default function SigninForm({
  setMode,
}: {
  setMode: (is: boolean) => void;
}): React.ReactNode {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const validateInput = loginSchema.safeParse(data);

    if (!validateInput.success) {
      toast.error(validateInput.error.issues[0].message);
    } else {
      try {
        signIn("credentials", data, {
          redirectTo: "/pages/user/dashboard",
        }).then(() => {
          window.location.href = "/pages/user/dashboard";
        });
        toast.success("Login Berhasil");
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message);
        }
      }
    }
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
          Belum Punya Akun ?{" "}
          <a
            className="hover:cursor-pointer text-blue-400 font-bold"
            onClick={() => setMode(false)}
          >
            Daftar Sekarang
          </a>
        </p>
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-[#1B4242] text-white hover:cursor-pointer"
          value="Sign In"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
