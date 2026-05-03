import { Card, CardContent } from "@/components/ui/card";


import { PatientIdentifier } from "@/pages/doctor/components/Assessment/FormComponents/PatientIdentifier";
import { BasicInfoSection } from "@/pages/doctor/components/Assessment/FormComponents/BasicInfoSection";
import { ClinicalVitalsSection } from "@/pages/doctor/components/Assessment/FormComponents/ClinicalVitalsSection";
import { LifestyleSection } from "@/pages/doctor/components/Assessment/FormComponents/LifestyleSection";
import { FormActions } from "@/pages/doctor/components/Assessment/FormComponents/FormActions";

export const AssessmentForm = ({ form, setForm, handleAssess }) => {
  return (
    <Card className="relative w-full  rounded-2xl  bg-card/20  overflow-hidden">


      <CardContent className="relative px-6 py-8">
        <form onSubmit={handleAssess} className="space-y-10">

          {/* Patient ID */}
          <PatientIdentifier
            patientId={form.patientId}
            setForm={setForm}
          />

          {/* Basic Info */}
          <BasicInfoSection
            form={form}
            setForm={setForm}
          />

          {/* Clinical Vitals */}
          <ClinicalVitalsSection
            form={form}
            setForm={setForm}
          />

          {/* Lifestyle */}
          <LifestyleSection
            form={form}
            setForm={setForm}
          />

          {/* Actions */}
          <FormActions />

        </form>
      </CardContent>
    </Card>
  );
};