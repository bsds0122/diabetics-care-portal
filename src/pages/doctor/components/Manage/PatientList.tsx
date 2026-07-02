import { Pencil } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
} from "@/components/ui/table";

export const PatientList = ({
  patients = [],
  onEditClick,
}) => {
  return (
    <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow />
        </TableHeader>

        <TableBody>
          {patients.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={2}
                className="text-center py-6"
              >
                No patients found
              </TableCell>
            </TableRow>
          ) : (
            patients.map((patient) => (
              <TableRow key={patient.patient_id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage
                        src={patient.avatar}
                        alt={patient.firstName}
                      />

                      <AvatarFallback>
                        {patient.firstName?.[0]}
                        {patient.lastName?.[0]}
                      </AvatarFallback>
                    </Avatar>

                    <div className="text-xs font-medium">
                      {patient.firstName}{" "}
                      {patient.lastName}
                    </div>
                  </div>
                </TableCell>

                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      onEditClick(patient)
                    }
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};