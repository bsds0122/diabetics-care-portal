import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ClinicalVitalsSection } from "@/pages/doctor/components/Assessment/ClinicalVitalsSection";
import { FormActions } from "@/pages/doctor/components/Assessment/FormActions";
import { AssessmentFormProps } from "@/types/assessment";

export const AssessmentForm: React.FC<AssessmentFormProps> = ({
  form,
  setForm,
  handleAssess,
  handleFileUpload,
  loading,
  error,
  success,
}) => {
  return (
    <Card className="relative w-full rounded-2xl border border-border/40 bg-card/20 backdrop-blur-xl shadow-sm overflow-hidden">
      <CardContent className="relative px-6 py-8">
        <form
          onSubmit={handleAssess}
          className="space-y-8"
        >
          {/* Clinical Vitals */}
          <ClinicalVitalsSection
            form={form}
            setForm={setForm}
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

          {/* Submit Button */}
          <FormActions
            onUpload={handleFileUpload}
            disabled={loading}
            loading={loading}
          />
        </form>
      </CardContent>
    </Card>
  );
};