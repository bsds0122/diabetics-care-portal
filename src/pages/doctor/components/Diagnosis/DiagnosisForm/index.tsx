import { Card, CardContent } from "@/components/ui/card";
import { DiagnosisFormHeader } from "@/pages/doctor/components/Diagnosis/DiagnosisForm/DiagnosisFormHeader";
import { PatientInfoSection } from "@/pages/doctor/components/Diagnosis/DiagnosisForm/PatientInfoSection";
import { LabResultsSection } from "@/pages/doctor/components/Diagnosis/DiagnosisForm/LabResultsSection";
import { DiagnosisFormActions } from "@/pages/doctor/components/Diagnosis/DiagnosisForm/DiagnosisFormActions";

export const DiagnosisForm = ({ form, onInputChange }) => {

  const handleAnalyze = () => {
    console.log("Analyzing patient data:", form);
    alert("Diagnosis triggered!");
  };

  return (
    <Card className="rounded-2xl  bg-card/20  overflow-hidden transition-all duration-300">

      {/* Header */}
      <DiagnosisFormHeader />

      {/* Body */}
      <CardContent className="px-8 py-7 space-y-8">

        {/* Patient Info (ID only) */}
        <PatientInfoSection
          patientId={form.patientId}
          onInputChange={onInputChange}
        />

        {/* Lab Inputs */}
        <LabResultsSection
          ogtt={form.ogtt}
          hba1c={form.hba1c}
          rbg={form.rbg}
          fbg={form.fbg}
          onInputChange={onInputChange}
        />

        {/* Actions */}
        <DiagnosisFormActions
          onAnalyze={handleAnalyze}
        />

      </CardContent>

    </Card>
  );
};