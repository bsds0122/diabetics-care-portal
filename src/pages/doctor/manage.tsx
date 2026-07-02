import { useManagePatients } from "@/hooks/useManagePatients";

import { PatientList } from "@/pages/doctor/components/Manage/PatientList";
import { EditPatient } from "@/pages/doctor/components/Manage/EditPatient";
import { ManagePatientsSkeleton } from "@/pages/doctor/components/Manage/ManagePatientsSkeleton";




export default function ManagePatients() {
  const {
    patients,
    loading,
    isEditOpen,
    setIsEditOpen,
    handleEditClick,
    handleSave,
    form,
    handleImageUpload,
    success,
    error,
  } = useManagePatients();

  if (loading && patients.length === 0) {
    return <ManagePatientsSkeleton />;
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">

      {/* ✅ STATUS MESSAGE (TOP OF PATIENT LIST) */}
      <div className="min-h-[24px]">
        {success && (
          <div className="rounded-md border border-green-200 bg-green-50 px-4 py-2">
            <p className="text-sm font-medium text-green-700">
              ✓ {success}
            </p>
          </div>
        )}

        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 px-4 py-2">
            <p className="text-sm font-medium text-red-700">
              ✕ {error}
            </p>
          </div>
        )}
      </div>

      {/* PATIENT LIST */}
      <PatientList
        patients={patients}
        onEditClick={handleEditClick}
      />

      {/* EDIT MODAL */}
      <EditPatient
        isOpen={isEditOpen}
        onOpenChange={setIsEditOpen}
        form={form}
        onSubmit={handleSave}
        loading={loading}
        handleImageUpload={handleImageUpload}
      />
    </div>
  );
}