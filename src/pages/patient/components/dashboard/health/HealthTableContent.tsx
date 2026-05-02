// HealthTableContent.tsx
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  import { HealthMetric } from "./types";
  import { HealthTableRow } from "./HealthTableRow";
  
  interface HealthTableContentProps {
    items: HealthMetric[];
  }
  
  export function HealthTableContent({
    items,
  }: HealthTableContentProps) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Vital Sign</TableHead>
            <TableHead>Reading</TableHead>
            <TableHead>Clinical Status</TableHead>
          </TableRow>
        </TableHeader>
  
        <TableBody>
          {items.map((item, index) => (
            <HealthTableRow key={index} item={item} />
          ))}
        </TableBody>
      </Table>
    );
  }