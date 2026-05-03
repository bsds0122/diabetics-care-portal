import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ImageUpload } from "@/pages/doctor/components/Profile/ImageUpload";
import { PersonalInfoFields } from "@/pages/doctor/components/Profile/PersonalInfoFields";
import { ProfessionalInfoFields } from "@/pages/doctor/components/Profile/ProfessionalInfoFields";
import { FormActions } from "@/pages/doctor/components/Profile/form-actions/FormActions";

export const ProfileForm = ({
  isEditing,
  setIsEditing,
  profileImage,
  formData,
  handleInputChange,
  handleProfileImageUpload,
  handleSave,
}) => {
  return (
    <Card className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/20 backdrop-blur-xl">

     
     

      <CardContent className="p-6 space-y-8">

        {/* Profile Image Section */}
        <div className="flex justify-start">
          <ImageUpload
            preview={profileImage}
            handleProfileImageUpload={handleProfileImageUpload}
          />
        </div>

        {/* Form Sections */}
        <div className="space-y-8">

          <PersonalInfoFields
            isEditing={isEditing}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <ProfessionalInfoFields
            isEditing={isEditing}
            formData={formData}
            handleInputChange={handleInputChange}
          />

        </div>

        {/* Actions */}
        <div className="pt-2 border-t border-border/40">
          <FormActions
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            handleSave={handleSave}
          />
        </div>

      </CardContent>
    </Card>
  );
};