
// src/pages/doctor/Registration.tsx

import React from "react";
import { RegistrationForm } from "./components/Registration/RegistrationForm";
import { usePatientRegistration } from "@/hooks/useRegistration";

const Registration: React.FC = () => {
  const {
    form,
    loading,
    error,
    success,
    updateForm,
    handleSubmit,
    handleFileUpload,
  } = usePatientRegistration();

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex-1 w-full">
        <RegistrationForm
          form={form}
          updateForm={updateForm}
          handleSubmit={(e) => handleSubmit(e)}
          handleFileUpload={handleFileUpload}
          loading={loading}
          error={error}
          success={ success}
        />
      </div>
    </div>
  );
};

export default Registration;

