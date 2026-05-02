import { TableRow } from "@/components/ui/table";

import { AvatarCell } from "@/pages/doctor/components/Manage/Table/PatientTableRow/AvatarCell";
import { FieldsCells } from "@/pages/doctor/components/Manage/Table/PatientTableRow/FieldsCells";
import { StatusActionButton } from "@/pages/doctor/components/Manage/Table/PatientTableRow/StatusActionButton";
import { StatusBadge } from "@/pages/doctor/components/Manage/Table/PatientTableRow/StatusActionButton";

import { patientFields } from "@/pages/doctor/components/Manage/Table/PatientTableRow/fields";

export const PatientTableRow = ({ patient, onStatusChange }) => {
  return (
    <TableRow className="border-b border-border/40 hover:bg-muted/30 transition-all duration-200">
      
      <AvatarCell patient={patient} />

      <FieldsCells patient={patient} fields={patientFields} />

      <StatusActionButton
        patient={patient}
        onStatusChange={onStatusChange}
      />

      <StatusBadge
        patient={patient}
        onStatusChange={onStatusChange}
      />

    </TableRow>
  );
};