import React from "react";
import { RegistrationForm } from "@/pages/doctor/components/Registration/RegistrationForm";
import { useRegistration } from "@/hooks/doctor/useRegistration";

const Registration = () => {
  const { form, updateForm, handleSubmit } = useRegistration();

  return (
    <div className="space-y-6">

      <div className="flex-1 w-full">

        <RegistrationForm
          form={form}
          updateForm={updateForm}
          handleSubmit={handleSubmit}
        />

      </div>

    </div>
  );
};

export default Registration;