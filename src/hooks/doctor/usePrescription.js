import { useState, useCallback } from "react";

const initialForm = {
  patientId: "",
  firstName: "",
  lastName: "",
  drug: "",
  dosage: "",
  frequency: "",
  status: "",
  startDate: "",
  endDate: "",
  duration: "",
  notes: "",
  numberOfTablets: "",
  totalTablets: "",
  dateIssued: "",
  doctorIssued: "",
};

export const usePrescription = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const updateForm = useCallback((updates) => {
    setForm((prev) => ({
      ...prev,
      ...updates,
    }));
  }, []);

  const handlePrescribe = useCallback(() => {
    if (!form.patientId || !form.drug) {
      alert("Patient ID and Drug are required");
      return;
    }

    console.log("Prescription submitted:", form);

    setForm(initialForm);
  }, [form]);

  return {
    form,
    handleChange,
    updateForm,
    handlePrescribe,
  };
};