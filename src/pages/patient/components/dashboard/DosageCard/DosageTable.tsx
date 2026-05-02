import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
  import { DosageItem } from "./dosage";
  
  interface Props {
    data: DosageItem[];
  }
  
  export function DosageTable({ data }: Props) {
    return (
      <div className="overflow-hidden rounded-lg border">
        <Table>
  
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>Drug</TableHead>
              <TableHead>Dosage Schedule</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Instruction</TableHead>
              <TableHead>Date Issued</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
  
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.drug} className="hover:bg-muted/30">
  
                <TableCell className="font-medium text-primary">
                  {item.drug}
                </TableCell>
  
                <TableCell className="text-sm text-muted-foreground">
                  Morning: {item.schedule.morning} <br />
                  Afternoon: {item.schedule.afternoon} <br />
                  Evening: {item.schedule.evening}
                </TableCell>
  
                <TableCell className="text-muted-foreground">
                  {item.total} tabs
                </TableCell>
  
                <TableCell className="text-xs text-muted-foreground">
                  {item.instruction}
                </TableCell>
  
                <TableCell className="text-sm text-muted-foreground">
                  {item.dateIssued}
                </TableCell>
  
                <TableCell>
                  <Badge
                    className={
                      item.status === "pharmacy"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }
                  >
                    {item.status === "pharmacy"
                      ? "Buy at Pharmacy"
                      : "Available at Hospital"}
                  </Badge>
                </TableCell>
  
              </TableRow>
            ))}
          </TableBody>
  
        </Table>
      </div>
    );
  }