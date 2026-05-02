import { useState } from "react";
import { toast } from "sonner";
import { sampleDoctor } from "@/data/doctor/doctorProfileData";

export const useProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(sampleDoctor);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  return {
    isEditing,
    setIsEditing,
    formData,
    handleInputChange,
    handleSelectChange,
    handleSave,
  };
};