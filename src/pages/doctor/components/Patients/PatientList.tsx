import { ScrollFadeWrapper } from "@/pages/doctor/components/Patients/ScrollFadeWrapper";
import { EmptyState } from "@/pages/doctor/components/Patients/EmptyState";
import { PatientListContent } from "@/pages/doctor/components/Patients/PatientListContent";

export const PatientList = ({
  filtered,
  selectedId,
  setSelectedId,
}) => {
  return (
    <ScrollFadeWrapper>
      {filtered?.length > 0 ? (
        <PatientListContent
          patients={filtered}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ) : (
        <EmptyState message="No patients found matching your search." />
      )}
    </ScrollFadeWrapper>
  );
};