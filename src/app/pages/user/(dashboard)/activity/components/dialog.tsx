import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { DialogProps } from "../page";

export default function ActivityDialog({
  dialogProps,
}: {
  dialogProps: DialogProps;
}) {
  return (
   dialogProps.content
  );
}
