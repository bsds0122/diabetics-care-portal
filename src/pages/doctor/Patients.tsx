import { PatientSidebar } from "@/pages/doctor/components/Patients/Sidebar/PatientSidebar";
import { PatientDetails } from "@/pages/doctor/components/Patients/Sidebar/PatientDetails";
import { usePatients } from "@/hooks/doctor/usePatients";

const Patients = () => {
  const {
    search,
    setSearch,
    selectedId,
    setSelectedId,
    activeMetric,
    setActiveMetric,
    activeTab,
    setActiveTab,
    filteredPatients,
    selectedPatient,
    trends,
  } = usePatients();

  return (
    <div className="flex flex-col space-y-6 h-[calc(100vh-10rem)]">

      <div className="flex-1 flex gap-6 overflow-hidden rounded-2xl  min-h-0">

        {/* LEFT SIDEBAR */}
        <PatientSidebar
          search={search}
          setSearch={setSearch}
          filtered={filteredPatients}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        {/* RIGHT DETAILS */}
        <PatientDetails
          selected={selectedPatient}
          activeMetric={activeMetric}
          setActiveMetric={setActiveMetric}
          activeTab={activeTab}
          setActiveTab={setActiveTab}

          /* ✅ THIS is the correct trends source */
          trends={trends}
        />

      </div>
    </div>
  );
};

export default Patients;