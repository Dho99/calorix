import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function FoodForm() {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-3">
        <Label htmlFor="activity-name" className="text-white text-base">
          Masukkan Jumlah (Kalori)
        </Label>
        <Input
          name="calories"
          type="number"
          placeholder="Insert Amount"
          className="backdrop-blur text-white"
        ></Input>
      </div>
      <div className="flex flex-col gap-3 ">
        <Label htmlFor="activity-name" className="text-white text-base">
          Masukkan Nama Makanan
        </Label>
        <Input
          name="foodName"
          type="text"
          placeholder="Insert Food Name"
          className="backdrop-blur text-white"
        ></Input>
      </div>
      <div className="flex flex-col gap-3 ">
        <Label htmlFor="activity-name" className="text-white text-base">
            Meal Type
        </Label>
        <Select name="mealType">
          <SelectTrigger className="w-full backdrop-blur text-white">
            <SelectValue placeholder="Select your Meal Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Meal Type</SelectLabel>
              <SelectItem value="lunch">Lunch</SelectItem>
              <SelectItem value="breakfast">Sarapan</SelectItem>
              <SelectItem value="dinner">Makan Malam</SelectItem>
              <SelectItem value="snacks">Cemilan / Snacks</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
