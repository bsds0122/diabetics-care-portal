import React from "react";

export const TableHeader = () => {
  return (
    <thead className="text-muted-foreground border-b border-border">
      <tr>
        <th className="py-2">User</th>
        <th>Men</th>
        <th>Female</th>
        <th>Percentage</th>
      </tr>
    </thead>
  );
};