"use client"

import { signIn } from "next-auth/react"
import GoogleIcon from "../../../../public/icons/google-icon.png";
import Image from "next/image";
import SigninForm from "./components/signinform";
import { useState } from "react";
import RegisterForm from "./components/registerform";

export default function Page(): React.ReactNode {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  function setMode(){
    setIsLogin(!isLogin);
  }

  return (
    <div className="w-full h-full flex-col items-center justify-center">
     {
      isLogin ? ( <SigninForm setMode={setMode} />) : (<RegisterForm setMode={setMode}/>)
     }
     
      <p className="text-md text-gray-400 my-4 text-center">or</p>
        <button
          type="button"
          onClick={() => signIn("google")}
          className="bg-slate-400 py-2 px-4 rounded-lg shadow-lg text-white hover:cursor-pointer flex items-center justify-center gap-2 w-full"
        >
          Signin with
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
