import React from "react";
import { Beaker } from "lucide-react";

export const PatientRecordsEmptyState: React.FC = () => {
  return (
    <tr>
      <td colSpan={4} className="py-24 text-center">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/70">
          <Beaker className="h-10 w-10 opacity-40" />
          <p className="text-sm">
            No patient records available
          </p>
        </div>
      </td>
    </tr>
  );
};
