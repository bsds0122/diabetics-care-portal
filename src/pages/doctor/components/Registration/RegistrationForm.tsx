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
    <Card className="relative rounded-2xl border border-border/60 bg-card/20 backdrop-blur-xl shadow-xl lg:col-span-2 overflow-hidden">
      
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

    
    

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