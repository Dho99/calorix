import { getStringDateName } from "@/app/utils/api/date";
import { UserCharacteristics } from "@/app/utils/lib/types/user";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";
import {toHeaderCase} from 'js-convert-case';

export default function Characteristics({
  data,
  fetchUser
}: {
  data?: UserCharacteristics[];
  fetchUser: () => Promise<void>;
}) {
  function deleteCharacteristic(id: string) {
    if (confirm("Are you sure you want to delete this characteristic?")) {
      const deleteData = async () => {
        try {
          const searchParams = new URLSearchParams();
          searchParams.append("characteristicsId", id);
          axios
            .delete(`/api/handler/characteristics?${searchParams.toString()}`, {
              method: "DELETE",
            })
            .then((res) => {
              if (res.status === 200) {
                alert("Delete characteristic success"); 
                fetchUser();
              } else {
                alert("Delete characteristic failed");
              }
            })
            .catch((err) => {
              if (err instanceof Error) {
                alert(err.message);
              }
            });
        } catch (error) {
          console.log(error);
          if (error instanceof Error) {
            alert(error.message);
          }
        }
      };
      deleteData();
    }
  }

  return (
    <div className="w-full h-auto lg:px-15 md:px-10 px-5 pt-10 pb-15 flex flex-col gap-8 border dark:bg-white/2 bg-green-200/50 rounded-lg">
      <div className="w-full flex flex-col gap-3">
        <div className="w-full h-auto flex flex-col gap-3">
          <div className="flex lg:flex-row md:flex-row flex-col gap-y-4 w-full justify-between">
            <h1 className="text-2xl font-bold dark:text-white">
              Data Karakteristik tubuh
            </h1>
            <Link href={"/pages/user/calculate"}>
              {data && data[0]?.isDeleted ? (
                <Button
                  variant="secondary"
                  className="bg-green-300/50 hover:bg-[#9EC8B9]/80 w-full text-black flex flex-row items-center"
                  type="button"
                >
                  <PlusCircleIcon className="w-5 h-5 me-2" />
                  Add your new characteristic
                </Button>
              ) : null}
            </Link>
          </div>
          <Accordion type="single" collapsible className="mt-3">
            {data?.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg flex flex-row justify-between hover:no-underline hover:cursor-pointer hover:bg-[#9EC8B9]/20 hover:rounded-lg items-center px-5 focus:bg-[#9EC8B9]/20 border">
                  <div className="hover:no-underline">
                    {getStringDateName(item?.createdAt)}
                  </div>
                  <div className="flex ms-auto my-2">
                    {item.isDeleted ? (
                      <span className="text-white-500 bg-red-500/50 px-5 rounded-lg shadow-lg">
                        Inactive
                      </span>
                    ) : (
                      <span className="text-white-500 bg-green-500 px-5 rounded-lg shadow-lg">
                        Current
                      </span>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="border rounded-b-lg">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead>Kategori</TableHead>
                        <TableHead>Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Object.entries(item)
                        .filter(([key]) => key !== "id" && key !== "isDeleted" && key !== "createdAt")
                        .map(
                          ([key, value]) =>
                            value !== null && (
                              <TableRow key={key} className="hover:bg-transparent">
                                <TableCell>
                                  <span className="font-bold">{toHeaderCase(key)} :</span>
                                </TableCell>
                                <TableCell>
                                  <span>{String(value)}</span>
                                </TableCell>
                              </TableRow>
                            )
                        )}
                    </TableBody>
                    {!item?.isDeleted && (
                      <TableFooter className="bg-transparent hover:bg-transparent">
                        <TableRow className="hover:bg-transparent">
                          <TableCell>
                            <span className="font-bold">Action:</span>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="secondary"
                              className="bg-red-600/60 hover:bg-red-600/80"
                              type="button"
                              onClick={() => {
                                deleteCharacteristic(item?.id);
                              }}
                            >
                              Delete data
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableFooter>
                    )}
                  </Table>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
