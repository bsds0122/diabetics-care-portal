import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const TreatmentTableRow = ({ item, onEdit }) => {
  const initials =
    (item.firstName?.[0] || "") + (item.lastName?.[0] || "");

  return (
    <TableRow className="border-b hover:bg-muted/30">

      {/* Avatar */}
      <TableCell className="px-6 py-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src={item.avatar} alt={item.firstName} />
          <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
      </TableCell>

      {/* Name */}
      <TableCell className="px-6 py-4">
        {item.firstName} {item.lastName}
      </TableCell>

      {/* Drug */}
      <TableCell className="px-6 py-4">
        <Badge>{item.drug}</Badge>
      </TableCell>

      {/* Tablets per day */}
      <TableCell className="px-6 py-4 text-center">
        {item.numberOfTablets || "-"}
      </TableCell>

      {/* Frequency */}
      <TableCell className="px-6 py-4">
        {item.frequency || "-"}
      </TableCell>

      {/* Dosage */}
      <TableCell className="px-6 py-4">
        {item.dosage || "-"}
      </TableCell>

      {/* Duration */}
      <TableCell className="px-6 py-4 text-center">
        {item.duration || "-"}
      </TableCell>

      {/* Total tablets */}
      <TableCell className="px-6 py-4 text-center font-bold text-primary">
        {item.totalTablets || "-"}
      </TableCell>

      {/* Status */}
      <TableCell className="px-6 py-4 text-center">
        <Badge
          className={
            item.status?.toLowerCase() === "available"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }
        >
          {item.status || "buy"}
        </Badge>
      </TableCell>

      {/* Date */}
      <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
        {item.dateIssued || "-"}
      </TableCell>

      {/* Actions */}
      <TableCell className="px-6 py-4 text-right">
        <button
          onClick={() => onEdit && onEdit(item)}
          className="text-primary hover:underline text-sm font-medium"
        >
          Edit
        </button>
      </TableCell>

    </TableRow>
  );
};