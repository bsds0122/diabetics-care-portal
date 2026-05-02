import React from "react";
import { TableHeader, TableRow, TableHead } from "@/components/ui/table";

const columns = [
  {className: "w-[80px]" },
  { label: " name", className: "w-[250px]" },
  { label: "drug name", className: "w-[150px]" },
  { label: "tablets/day", className: "w-[100px] text-center" },
  { label: "frequency", className: "w-[150px]" },
  { label: "dosage", className: "w-[120px]" },
  { label: "duration", className: "w-[100px] text-center" },
  { label: "total tablets", className: "w-[120px] text-center" },
  { label: "status", className: "w-[120px] text-center" },
  { label: "issued at", className: "w-[150px]" },
  { label: "actions", className: "text-right" },
];

export const TreatmentTableHeader: React.FC = () => {
  return (
    <TableHeader className="bg-muted/30">
      <TableRow className="border-b border-border/50 hover:bg-transparent">
        {columns.map((col, idx) => (
          <TableHead
            key={idx}
            className={`h-12 px-6 text-sm font-medium text-muted-foreground lowercase ${col.className || ""}`}
          >
            {col.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};