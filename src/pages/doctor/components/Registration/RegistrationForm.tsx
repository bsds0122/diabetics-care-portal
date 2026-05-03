import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RegistrationForm as FormType } from "@/hooks/doctor";

import {
 
  PersonalInfoFields,
  MedicalInfoFields,
  LocationInfoFields,
  FormSubmitButton,
} from "@/pages/doctor/components/Registration/Form";

interface RegistrationFormProps {
  form: FormType;
  updateForm: (updates: Partial<FormType>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  form,
  updateForm,
  handleSubmit,
}) => {
  return (
    <Card className="relative rounded-2xl bg-card/20  lg:col-span-2 overflow-hidden">
      
      <CardContent className="relative pt-7">
        <form onSubmit={handleSubmit} className="space-y-7">

          {/* PERSONAL INFO */}
          <PersonalInfoFields form={form} updateForm={updateForm} />

          {/* MEDICAL INFO */}
          <MedicalInfoFields form={form} updateForm={updateForm} />

          {/* LOCATION INFO */}
          <LocationInfoFields form={form} updateForm={updateForm} />

          {/* SUBMIT BUTTON */}
          <div className="flex justify-end pt-4">
            <FormSubmitButton label="Register Patient" />
          </div>

        </form>
      </CardContent>
    </Card>
  );
};