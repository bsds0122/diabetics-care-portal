import { useState, useCallback } from "react";
import { patientService } from "@/services/patientRegistration";
import { FormType } from "@/types/registration";
import { getErrorMessage } from "@/utils/errorHandler";

const initialForm: FormType = {
  firstName: "",
  lastName: "",
  sex: "",
  phone: "",
  nextOfKin: "",
  diagnosisDate: "",
  diabeticType: "",
  region: "",
  district: "",
  ta: "",
  village: "",
  profileImage: null,
};

export const usePatientRegistration = () => {
  const [form, setForm] = useState<FormType>(initialForm);

  const [loading, setLoading] = useState(false);
  const [bulkLoading, setBulkLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const updateForm = (fields: Partial<FormType>) => {
    setForm((prev) => ({
      ...prev,
      ...fields,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
  };

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

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        setLoading(true);
        setError(null);
        setSuccess(null);

        const response = await patientService.register(form);

        if (response.status_code === 201) {
          showSuccess(response.details);
          resetForm();
        } else {
          showError(response.details);
        }
      } catch (err) {
        showError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  const handleFileUpload = useCallback(async (file: File) => {
    try {
      setBulkLoading(true);
      setError(null);
      setSuccess(null);

      const response =
        await patientService.bulkRegister(file);

      if (
        response.status_code === 200 ||
        response.status_code === 201
      ) {
        showSuccess(response.details);
      } else {
        showError(response.details);
      }
    } catch (err) {
      showError(getErrorMessage(err));
    } finally {
      setBulkLoading(false);
    }
  }, []);

  return {
    form,
    updateForm,
    loading,
    bulkLoading,
    error,
    success,
    handleSubmit,
    handleFileUpload,
  };
};