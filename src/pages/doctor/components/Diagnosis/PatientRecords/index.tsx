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
    <Card className="rounded-2xl  bg-card/20 overflow-hidden ">

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