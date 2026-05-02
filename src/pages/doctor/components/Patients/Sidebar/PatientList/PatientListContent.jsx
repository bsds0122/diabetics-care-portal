import { PatientListItem } from "@/pages/doctor/components/Patients/Sidebar/PatientListItem";

export const PatientListContent = ({
  patients,
  selectedId,
  setSelectedId,
}) => {
  return (
    <div className="py-4">
      {patients.map((p) => (
        <PatientListItem
          key={p.id}
          patient={p}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
};