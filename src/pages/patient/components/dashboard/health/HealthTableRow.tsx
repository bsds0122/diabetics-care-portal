// HealthTableRow.tsx
import { TableCell, TableRow } from "@/components/ui/table";
import { StatusBadge } from "./StatusBadge";
import { HealthMetric } from "./types";

interface HealthTableRowProps {
  item: HealthMetric;
}

export function HealthTableRow({
  item,
}: HealthTableRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium text-primary">
        {item.measurement}
      </TableCell>

      <TableCell className="text-muted-foreground">
        {item.value}
      </TableCell>

      <TableCell>
        <StatusBadge status={item.status} />
      </TableCell>
    </TableRow>
  );
}