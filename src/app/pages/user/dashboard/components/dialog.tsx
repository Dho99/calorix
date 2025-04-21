import { Button } from "@/components/ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export function DashboardDialog({message, buttons, title} : {message: string, buttons: React.ReactNode, title: string}) {
    const router = useRouter();
  return (
    <>
      <DialogContent className="sm:max-w-[425px] bg-[#092635] text-white border-none">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-slate-400 text-base my-5">
            {message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-between w-full">
         {buttons}
        </DialogFooter>
      </DialogContent>
    </>
  )
}
