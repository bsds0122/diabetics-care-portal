import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  district: "",
  traditionalAuthority: "",
  village: "",
  diagnosisDate: "",
  diabeticType: "",
  profileImage: null,
};

export const useRegistration = () => {
  const [form, setForm] = useState(initialForm);

  const updateForm = (updates) => {
    setForm((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    console.log("Submitting:", form);
    alert("Patient registered successfully!");
    setForm(initialForm);
  };

  return {
    form,
    updateForm,
    handleSubmit,
  };
};
