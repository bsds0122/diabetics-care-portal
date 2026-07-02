import { useState } from "react";
import { assessmentService } from "@/services/assessment";
import {
  AssessmentFormType,
  AssessmentResultData,
} from "@/types/assessment";
import { getErrorMessage } from "@/utils/errorHandler";

export const useAssessment = () => {
  const [loading, setLoading] = useState(false);

  const [assessmentResult, setAssessmentResult] =
    useState<AssessmentResultData | null>(null);

  const [error, setError] = useState<string | null>(null);

  const [success, setSuccess] = useState<string | null>(null);

  const [form, setForm] = useState<AssessmentFormType>({
    patientId: "",

    assessmentDay: "",
    assessmentMonth: "",
    assessmentYear: "",

    sex: "",
    age: "",

    weight: "",
    height: "",
    heartRate: "",
    systolicBP: "",
    diastolicBP: "",
    cigsPerDay: "",

    fastingBloodGlucose: "",
    ldlCholesterol: "",
    hdlCholesterol: "",
    triglycerides: "",
  });

  const showSuccess = (message: string) => {
    setSuccess(message);

    setTimeout(() => {
      setSuccess(null);
    }, 3000);
  };

  const showError = (message: string) => {
    setError(message);

    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const buildPayload = () => ({
    patient_id: Number(form.patientId),

    assessment_day: Number(form.assessmentDay),
    assessment_month: Number(form.assessmentMonth),
    assessment_year: Number(form.assessmentYear),

    sex: Number(form.sex),
    age: Number(form.age),

    weight: Number(form.weight),
    height: Number(form.height),

    heart_rate: Number(form.heartRate),
    systolic_bp: Number(form.systolicBP),
    diastolic_bp: Number(form.diastolicBP),

    cigs_per_day: Number(form.cigsPerDay),

    fasting_blood_glucose: Number(form.fastingBloodGlucose),
    ldl_cholesterol: Number(form.ldlCholesterol),
    hdl_cholesterol: Number(form.hdlCholesterol),
    triglycerides: Number(form.triglycerides),
  });

  const handleAssess = async (
    e: React.FormEvent
  ): Promise<boolean> => {
    e.preventDefault();

    try {
      setLoading(true);

      setError(null);
      setSuccess(null);

      const payload = buildPayload();

      const result =
        await assessmentService.createAssessment(payload);

      setAssessmentResult(result);

      showSuccess("Assessment completed successfully.");

      return true;
    } catch (err) {
      showError(getErrorMessage(err));

      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (file: File) => {
    try {
      console.log(file);

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      showSuccess("File uploaded successfully.");
    } catch (err) {
      showError(getErrorMessage(err));
    }
  };

  return {
    form,
    setForm,
    loading,
    error,
    success,
    assessmentResult,
    handleAssess,
    handleFileUpload,
  };
};