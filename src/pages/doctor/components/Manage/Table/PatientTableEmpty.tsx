import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";

export const PatientTableEmpty = () => {
  return (
    <TableRow>
      <TableCell
        colSpan={12}
        className="text-center py-14 text-muted-foreground italic border border-border/60"
      >
        No patients found matching your search.
      </TableCell>
    </TableRow>
  );
};