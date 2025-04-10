import { signIn } from "@/app/utils/handler/auth";
import GoogleIcon from "../../../../public/icons/google-icon.png";
import Image from "next/image";

export default function Page(): React.ReactNode {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="bg-slate-500 py-2 px-4 rounded-lg shadow-lg text-white hover:cursor-pointer flex items-center justify-center gap-2"
      >
        Signin with 
        <span>
          <Image src={GoogleIcon} alt={"google icon"} width={30} height={30}></Image>
        </span>
      </button>
    </form>
  );
}
