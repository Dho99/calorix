import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

export default function AddActivityContent(): React.ReactNode {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Tambah Aktivitas</DialogTitle>
        <DialogDescription>
          Silahkan isi data aktivitas yang ingin anda tambahkan
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-5 p-5 m-0 border rounded-lg">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 ">
            <label htmlFor="activity-name" className="text-white">
              Pilih Kategori Aktivitas
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Categories" className="text-white"/>
              </SelectTrigger>
              <SelectContent className="bg-[#1E1E2F]/30 backdrop-blur text-white">
                <SelectItem value="sleep">Tidur</SelectItem>
                <SelectItem value="eat">Makan</SelectItem>
                <SelectItem value="drink">Minum</SelectItem>
                <SelectItem value="activity">Beraktivitas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="activity-name" className="text-white">
              Masukkan Durasi
            </label>
           <Input name="duration" type="number" placeholder="Insert Duration"></Input>
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" className="bg-transparent">
          Batal
        </Button>
        <Button
          type="submit"
          variant={"outline"}
          className="bg-[#9EC8B9]/50 hover:bg-[#9EC8B9] hover:text-black"
        >
          Simpan
        </Button>
      </DialogFooter>
    </>
  );
}
