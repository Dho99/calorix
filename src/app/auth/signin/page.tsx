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
    <div className="w-full h-full flex-col items-center justify-center ">
      <div className="flex flex-col items-center">
        <h1 className={"text-2xl font-bold text-center"}>Calorix</h1>
        <h1 className="text-2xl text-black">{isLogin ? "Sign In" : "Register"}</h1>
        <p className="text-sm text-gray-400 mb-8">Please {isLogin ? "Sign In" : "Register"} to continue</p>
        <div
          className={
            "flex flex-col gap-3 mt-5 flex justify-center items-center w-98"
          }
        >
          {isLogin ? (
            <SigninForm setMode={setMode} />
          ) : (
            <RegisterForm setMode={setMode} />
          )}
        </div>
      </div>

      <p className="text-md text-gray-400 my-4 text-center">or</p>
      <button
        type="button"
        onClick={() => signIn("google")}
        className="bg-slate-400 py-2 px-4 rounded-lg shadow-lg text-white hover:cursor-pointer flex items-center justify-center gap-2 w-full"
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
