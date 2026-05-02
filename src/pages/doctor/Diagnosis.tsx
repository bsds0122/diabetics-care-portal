import { DiagnosisForm } from "@/pages/doctor/components/Diagnosis/DiagnosisForm";
import { PatientRecords } from "@/pages/doctor/components/Diagnosis/PatientRecords";
import { useDiagnosis } from "@/hooks/doctor/useDiagnosis";

export default function Diagnosis() {
  const {
    form,
    handleInputChange,
    search,
    onSearchChange,
    filteredPatients,
    getStatusColor,
    onRowClick,
  } = useDiagnosis();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
      <div className="flex-1 w-full">
        <DiagnosisForm
          form={form}
          onInputChange={handleInputChange}
        />
      </div>

      <div className="flex-1 w-full ">
        <PatientRecords
          search={search}
          onSearchChange={onSearchChange}
          filteredPatients={filteredPatients}
          getStatusColor={getStatusColor}
          onRowClick={onRowClick}
        />
      </div>
    </div>
  );
}
