import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { PersonalInfoFields } from "./PersonalInfoFields";
import { MedicalInfoFields } from "./MedicalInfoFields";
import { LocationInfoFields } from "./LocationInfoFields";
import { FormSubmitButton } from "./FormSubmitButton";
import { ExcelUploadButton } from "./ExcelUploadButton";

import { RegistrationFormProps } from "@/types/registration";

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  form,
  updateForm,
  handleSubmit,
  handleFileUpload,
  loading = false,
  error = null,
  success = null,
}) => {
  return (
    <Card
      className="
        relative overflow-hidden
        rounded-2xl
        border border-border/30
        bg-card/30
        shadow-2xl
        backdrop-blur-2xl
        lg:col-span-2
      "
    >
      <CardContent className="relative pt-10 px-8 pb-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-10"
        >
          <PersonalInfoFields
            form={form}
            updateForm={updateForm}
          />

          <MedicalInfoFields
            form={form}
            updateForm={updateForm}
          />

          <LocationInfoFields
            form={form}
            updateForm={updateForm}
          />

          {/* Status Messages */}
          <div className="min-h-[24px]">
            {success && (
              <p
                className="
                  text-sm
                  font-medium
                  text-green-600
                  animate-in
                  fade-in
                  slide-in-from-left-2
                  duration-300
                "
              >
                ✓ {success}
              </p>
            )}

            {error && (
              <p
                className="
                  text-sm
                  font-medium
                  text-red-600
                  animate-in
                  fade-in
                  slide-in-from-left-2
                  duration-300
                "
              >
                ✕ {error}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-2">
            <FormSubmitButton
              label={
                loading
                  ? "Registering..."
                  : "Register Patient"
              }
              loading={loading}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};