import { AssessmentForm } from "@/pages/doctor/components/Assessment/AssessmentForm";
import { AssessmentResult } from "@/pages/doctor/components/Assessment/AssessmentResult";
import { useAssessment } from "@/hooks/doctor/useAssessment";

const Assessment = () => {
  const { form, setForm, assessmentResult, handleAssess } = useAssessment();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        
        {/* FORM */}
        <AssessmentForm
          form={form}
          setForm={setForm}
          handleAssess={handleAssess}
        />

        {/* RESULT */}
        <AssessmentResult
          assessmentResult={assessmentResult}
        />

      </div>
    </div>
  );
};

export default Assessment;