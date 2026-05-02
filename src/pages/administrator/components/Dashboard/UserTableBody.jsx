import React from "react";
import { TableRow } from "./TableRow";

export const UserTableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <TableRow key={index} row={row} />
      ))}
    </tbody>
  );
};