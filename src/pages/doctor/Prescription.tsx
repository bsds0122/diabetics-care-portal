import React from "react";
import { PrescriptionCard } from "@/pages/doctor/components/Prescription/TreatmentInputCard";
import { usePrescription } from "@/hooks/doctor/usePrescription";
import { MedicalCheckupCard } from "@/pages/doctor/components/Prescription/Treatment/medical-checkup";

export default function Prescription() {
  const { form, handleChange, updateForm, handlePrescribe } =
    usePrescription();

  return (
    <div className="w-full space-y-10">

      {/* Cards stack with proper spacing */}
      <div className="flex flex-col gap-10 w-full">

        <PrescriptionCard />
        <MedicalCheckupCard />

      </div>

    </div>
  );
}