import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ImageUpload } from "@/pages/doctor/components/Profile/ImageUpload";
import { PersonalInfoFields } from "@/pages/doctor/components/Profile/PersonalInfoFields";
import { ProfessionalInfoFields } from "@/pages/doctor/components/Profile/ProfessionalInfoFields";
import { FormActions } from "@/pages/doctor/components/Profile/FormActions";




export const ProfileForm = ({
  profileImage,
  formData,
  handleInputChange,
  handleProfileImageUpload,
  handleSave,
  success,
  error,
}) => {
  return (
    <Card>
      <CardContent className="space-y-6 p-6">

        <ImageUpload
          preview={profileImage}
          handleProfileImageUpload={handleProfileImageUpload}
        />

        <PersonalInfoFields
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <ProfessionalInfoFields
          formData={formData}
          handleInputChange={handleInputChange}
        />

        {/* ✅ SIMPLE STATUS MESSAGE (LIKE REGISTRATION) */}
        <div className="min-h-[24px]">
          {success && (
            <p className="text-sm font-medium text-green-600">
              ✓ {success}
            </p>
          )}

          {error && (
            <p className="text-sm font-medium text-red-600">
              ✕ {error}
            </p>
          )}
        </div>

        <FormActions handleSave={handleSave} />
      </CardContent>
    </Card>
  );
};

