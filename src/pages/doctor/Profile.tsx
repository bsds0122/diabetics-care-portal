import React from "react";
import { ProfileForm } from "@/pages/doctor/components/Profile/ProfileForm";
import { useDoctorProfile } from "@/hooks/useProfile";


export default function Profile() {
  const {
    profileImage,
    formData,
    handleInputChange,
    handleProfileImageUpload,
    handleSave,
    success,
    error,
  } = useDoctorProfile();

  return (
    <div className="space-y-6">
      <ProfileForm
        profileImage={profileImage}
        formData={formData}
        handleInputChange={handleInputChange}
        handleProfileImageUpload={handleProfileImageUpload}
        handleSave={handleSave}
        success={success}
        error={error}
      />
    </div>
  );
}