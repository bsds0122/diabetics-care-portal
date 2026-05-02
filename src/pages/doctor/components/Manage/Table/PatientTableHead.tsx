
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const columns = ["", "first name", "last name", "email", "password", "action", "status"];

export const PatientTableHead = () => {
  return (
    <TableHeader className="bg-muted/30">
      <TableRow className="border-b border-border/50 hover:bg-transparent">
        {columns.map((col, idx) => (
          <TableHead
            key={idx}
            className={`h-12 px-6 text-left text-sm font-medium text-muted-foreground lowercase ${
              idx === 0 ? "w-[80px]" : ""
            }`}
          >
            {col}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};
