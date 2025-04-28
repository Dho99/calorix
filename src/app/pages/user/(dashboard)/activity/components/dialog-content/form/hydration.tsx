import { Input } from "@/components/ui/input";

export default function HydrationForm() {
  return (
    <div className="flex flex-col gap-3 ">
      <label htmlFor="activity-name" className="text-white">
        Masukkan Jumlah (ml)
      </label>
      <Input
        name="amount"
        type="number"
        placeholder="Insert Amount"
      ></Input>
    </div>
  );
}