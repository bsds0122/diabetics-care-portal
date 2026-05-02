import React, { useState } from "react";
import { RegistrationForm } from "./components/Registration/RegistrationForm";

const DoctorRegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    license: "",
    specialty: "",
    experience: "",
    hospital: "",
    image: null,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-background min-h-screen w-full">
      <RegistrationForm
        formData={formData}
        handleChange={handleChange}
        handleImageUpload={handleImageUpload}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default DoctorRegistrationPage;
