import React from "react";
import { ProfileForm } from "@/pages/doctor/components/Profile/ProfileForm";
import { useProfile } from "@/hooks/doctor/useProfile";

export default function Profile() {
  const {
    isEditing,
    setIsEditing,
    profileImage,
    formData,
    handleInputChange,
    handleSelectChange,
    handleProfileImageUpload,
    handleSave,
  } = useProfile();

  return (
    <div className="space-y-6">

      <ProfileForm
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        profileImage={profileImage}
        formData={formData}
        handleInputChange={handleInputChange}
      
        handleProfileImageUpload={handleProfileImageUpload}
        handleSave={handleSave}
      />

    </div>
  );
}