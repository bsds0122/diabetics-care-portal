import { useEffect, useState } from "react";
import { doctorProfileService } from "@/services/doctor-profile";

interface DoctorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialization: string;
  experience: string;
  hospital: string;
  licenseNumber: string;
}

export const useDoctorProfile = () => {
  const [loading, setLoading] = useState(false);

  const [profileImage, setProfileImage] = useState("");

  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<DoctorFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
    hospital: "",
    licenseNumber: "",
  });

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const response = await doctorProfileService.getProfile();
      const doctor = response.data;

      setFormData({
        firstName: doctor.first_name ?? "",
        lastName: doctor.last_name ?? "",
        email: doctor.email ?? "",
        phone: doctor.phone ?? "",
        specialization: doctor.specialization ?? "",
        experience: doctor.experience_years?.toString() ?? "",
        hospital: doctor.hospital ?? "",
        licenseNumber: doctor.license_number ?? "",
      });

      setProfileImage(doctor.profile_image ?? "");
    } catch (error) {
      setError("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setSuccess(null);
      setError(null);

      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        specialization: formData.specialization,
        experience_years: Number(formData.experience),
        hospital: formData.hospital,
        license_number: formData.licenseNumber,
        profile_image: profileImage,
      };

      const response = await doctorProfileService.updateProfile(payload);

      // ✅ SIMPLE SUCCESS MESSAGE (LIKE REGISTRATION)
      setSuccess(response.message || "Profile updated successfully");

      // refresh data
      await fetchProfile();

      // auto hide after 3s (same pattern as registration)
      setTimeout(() => {
        setSuccess(null);
      }, 3000);

    } catch (error) {
      setError(
        error?.response?.data?.detail ||
          "Failed to update profile"
      );

      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    profileImage,
    formData,
    success,
    error,
    handleInputChange,
    handleProfileImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    },
    handleSave,
    refreshProfile: fetchProfile,
  };
};