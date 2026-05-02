import { TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export const StatusActionButton = ({ patient, onStatusChange }) => {
  const isActive = patient.status === "active";

  return (
    <TableCell className="px-6 py-4">
      <Button
        variant="outline"
        size="sm"
        className={`text-xs font-medium lowercase ${
          isActive
            ? "text-destructive hover:bg-destructive/10"
            : "text-emerald-600 hover:bg-emerald-500/10"
        }`}
        onClick={() =>
          onStatusChange?.(patient.id, isActive ? "inactive" : "active")
        }
      >
        {isActive ? "deactivate" : "activate"}
      </Button>
    </TableCell>
  );
};

export const StatusBadge = ({ patient }) => {
  const isActive = patient.status === "active";
  return (
    <TableCell className="px-6 py-4">
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          isActive
            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
            : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
        }`}
      >
        {patient.status}
      </span>
    </TableCell>
  );
};