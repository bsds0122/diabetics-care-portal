import { TableCell } from "@/components/ui/table";

export const FieldsCells = ({ patient, fields }) => {
  return fields.map((field) => (
    <TableCell
      key={field.key}
      className={`px-6 py-4 text-sm whitespace-nowrap lowercase ${field.className || ""}`}
    >
      {field.formatter
        ? field.formatter(patient[field.key], patient)
        : patient[field.key]}
    </TableCell>
  ));
};