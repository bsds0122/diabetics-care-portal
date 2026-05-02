import React from "react";

export const TreatmentEmptyState: React.FC = () => {
  return (
    <tr>
      <td
        colSpan={11}
        className="text-center py-10 text-muted-foreground italic"
      >
        No treatment records found.
      </td>
    </tr>
  );
};
