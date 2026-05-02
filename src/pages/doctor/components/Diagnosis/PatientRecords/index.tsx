import { Card } from "@/components/ui/card";
import { PatientRecordsHeader } from "@/pages/doctor/components/Diagnosis/PatientRecords/PatientRecordsHeader";
import { PatientRecordsTable } from "@/pages/doctor/components/Diagnosis/PatientRecords/PatientRecordsTable";

export const PatientRecords = ({
  search,
  onSearchChange,
  filteredPatients,
  getStatusColor,
  onRowClick,
}) => {
  return (
    <Card className="rounded-2xl border border-border/40 bg-card/20 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300">

      {/* Header */}
      <PatientRecordsHeader
        search={search}
        onSearchChange={onSearchChange}
      />

      {/* Table */}
      <PatientRecordsTable
        filteredPatients={filteredPatients}
        getStatusColor={getStatusColor}
        onRowClick={onRowClick}
      />

    </Card>
  );
};