import { TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const AvatarCell = ({ patient }) => {
  const initials = `${patient.firstName?.[0] || ""}${patient.lastName?.[0] || ""}`.toLowerCase();

  return (
    <TableCell className="px-6 py-4">
      <Avatar className="h-10 w-10 border border-border/50">
        <AvatarImage src={patient.avatar} alt={patient.firstName} />
        <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
          {initials}
        </AvatarFallback>
      </Avatar>
    </TableCell>
  );
};