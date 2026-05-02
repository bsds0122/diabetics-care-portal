import React from "react";

export const TableRow = ({ row }) => {
  return (
    <tr className="border-b border-border hover:bg-muted/50 transition">
      <td className="py-3 font-medium">{row.user}</td>
      <td>{row.men}</td>
      <td>{row.female}</td>
      <td>{row.percentage}</td>
    </tr>
  );
};