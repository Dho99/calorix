"use client";

import { signIn } from "next-auth/react";
import GoogleIcon from "../../../../public/icons/google-icon.png";
import Image from "next/image";
import SigninForm from "./components/signinform";
import { useState } from "react";
import RegisterForm from "./components/registerform";

export default function Page(): React.ReactNode {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  function setMode(is: boolean) {
    setIsLogin(is);
  }

  return (
    <div className={`w-full h-full flex-col items-center justify-center ${!isLogin ? 'lg:py-20 py-0' : ''}`}>
      <div className="flex flex-col items-center m-auto w-full">
        <h1 className={"text-2xl font-bold text-center"}>Calorix</h1>
        <h1 className="text-2xl dark:text-white">{isLogin ? "Sign In" : "Register"}</h1>
        <p className="text-sm text-gray-400">Please {isLogin ? "Sign In" : "Register"} to continue</p>
        <div
          className={
            "flex flex-col gap-3 mt-5 flex justify-center items-center lg:w-98 md:w-98 w-auto"
          }
        >
          {isLogin ? (
            <SigninForm setMode={setMode} />
          ) : (
            <RegisterForm setMode={setMode} />
          )}
        </div>
      </div>

      <p className="text-md dark:text-white my-4 text-center ">Atau Masuk dengan Cara Lain</p>
      <button
        type="button"
        onClick={() => signIn("google", {redirectTo: "/pages/user/dashboard"})}
        className="bg-[#1B4242] py-2 px-4 rounded-lg shadow-lg text-white hover:cursor-pointer flex items-center justify-center gap-2 w-full"
      >
        {isLogin ? "Sign In" : "Register"} with
        <span>
          <Image
            src={GoogleIcon}
            alt={"google icon"}
            width={20}
            height={20}
          ></Image>
        </span>
      </button>
    </div>
  );
}
