import { useState } from "react";

export const useAssessment = () => {
  const [form, setForm] = useState({
    patientId: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    systolicBP: "",
    diastolicBP: "",
    sugarLevel: "",
    smokingStatus: "",
    physicalActivity: "",
  });

  const [assessmentResult, setAssessmentResult] = useState(null);

  const generateAssessment = (data) => {
    let risk = "Low";

    const bp = Number(data.systolicBP);
    const sugar = Number(data.sugarLevel);

    if (bp > 140 || sugar > 7) {
      risk = "High";
    } else if (bp > 120 || sugar > 5.5) {
      risk = "Moderate";
    }

    return {
      clinicalImpression: `Patient has ${risk} cardiovascular risk level.`,
    };
  };

  const handleAssess = (e) => {
    e.preventDefault();
    const result = generateAssessment(form);
    setAssessmentResult(result);
  };

  return {
    form,
    setForm,
    assessmentResult,
    handleAssess,
  };
};