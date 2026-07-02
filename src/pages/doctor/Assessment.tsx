import { useState } from "react";
import { AssessmentForm } from "@/pages/doctor/components/Assessment";
import { AssessmentResult } from "@/pages/doctor/components/Assessment/AssessmentResult";
import { useAssessment } from "@/hooks/useAssessment";

const Assessment = () => {

  const {
    form,
    setForm,
    assessmentResult,
    handleAssess,
    handleFileUpload,
    loading,
    error,
    success,
  } = useAssessment();

  const [showResult, setShowResult] = useState(false);

 
  const onAssess = async (e: React.FormEvent) => {
    const ok = await handleAssess(e);
  
    if (ok) {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    setShowResult(false);
  };

  return (
    <div className="relative space-y-6 animate-in fade-in duration-500">

      {/* FORM */}
      {!showResult && (
       
        <AssessmentForm
        form={form}
        setForm={setForm}
        handleAssess={onAssess}
        handleFileUpload={handleFileUpload}
        loading={loading}
        error={error}
        success={success}
        />        
      )}

      {/* RESULT */}
      {showResult && (
        <div className="relative min-h-[70vh]">

          <AssessmentResult result={assessmentResult} />

          {/* BACK BUTTON (FORCE VISIBILITY) */}
          <button
            onClick={handleBack}
            className="
              fixed bottom-24 right-6
              z-[9999]
              px-5 py-3
              rounded-xl
              bg-blue-900 text-white
              shadow-2xl
              hover:bg-blue-900
              active:scale-95
              transition-all duration-200
            "
          >
             Back to Assessment
          </button>

        </div>
      )}

    </div>
  );
};

export default Assessment;