import { CardContent } from "@/components/ui/card";
import { PatientTableRow } from "@/pages/doctor/components/Diagnosis/PatientRecords/PatientTableRow";
import { PatientRecordsEmptyState } from "@/pages/doctor/components/Diagnosis/PatientRecords/PatientRecordsEmptyState";

export const PatientRecordsTable = ({
  filteredPatients,
  getStatusColor,
  onRowClick,
}) => {
  return (
    <CardContent className="p-0 overflow-hidden bg-card/10 backdrop-blur-xl">
      <div className="w-full overflow-x-auto ">
        <table className="w-full text-sm border-separate bg-transparent border-spacing-0">
          {/* Header */}
          <thead className="sticky top-0 z-10 bg-muted/40 backdrop-blur border-b border-border/50">
            <tr>
              <th className="text-left px-6 py-4 text-[11px] font-semibold  tracking-[0.08em] text-muted-foreground">
                Patient
              </th>
              <th className="text-left px-6 py-4 text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">
                First Name
              </th>
              <th className="text-left px-6 py-4 text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">
                Last Name
              </th>
              <th className="text-right px-6 py-4 text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">
                Health Status
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-border/40 bg-transparent">
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <PatientTableRow
                  key={patient.id}
                  patient={patient}
                  getStatusColor={getStatusColor}
                  onRowClick={onRowClick}
                />
              ))
            ) : (
              <PatientRecordsEmptyState />
            )}
          </tbody>
        </table>
      </div>
    </CardContent>
  );
};