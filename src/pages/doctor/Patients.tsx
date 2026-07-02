import { PatientSidebar } from "@/pages/doctor/components/Patients/PatientSidebar";
import { PatientDetails } from "@/pages/doctor/components/Patients/PatientDetails";
import { PatientsSkeleton } from "@/pages/doctor/components/Patients/PatientsSkeleton";
import { usePatients } from "@/hooks/usePatients";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Patients = () => {
  const {
    selectedId,
    setSelectedId,
    activeTab,
    setActiveTab,
    filteredPatients,
    selectedPatient,
    loading,
    error,
  } = usePatients();

  if (loading && !filteredPatients.length) {
    return <PatientsSkeleton />;
  }

  return (
    <div className="flex flex-col space-y-6 h-[calc(100vh-10rem)] animate-in fade-in duration-500">

      {error && !filteredPatients.length ? (
        <Alert variant="destructive" className="bg-destructive/10">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error Loading Patients</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <div className="flex-1 flex gap-6 overflow-hidden rounded-2xl border border-border/60 bg-card/20 backdrop-blur-xl p-4 min-h-0 relative">
          
          {loading && (
            <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px] z-50 flex items-center justify-center rounded-2xl">
               <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          )}

          {/* LEFT SIDEBAR */}
          <PatientSidebar
            filtered={filteredPatients}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />

          {/* RIGHT DETAILS */}
          <PatientDetails
            selected={selectedPatient}
            activeTab={activeTab}
            setActiveTab={setActiveTab} 
          />

        </div>
      )}
    </div>
  );
};

export default Patients;