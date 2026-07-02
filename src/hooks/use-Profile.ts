import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileService } from "@/services/profileService";

export const useProfile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    avatar: "",
    initials: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const doctor = await profileService.getProfile();

      setProfile({
        name: `${doctor.first_name} ${doctor.last_name}`,
        email: doctor.email,
        avatar: doctor.profile_image,
        initials: `${doctor.first_name[0]}${doctor.last_name[0]}`,
      });
    } catch (error) {
      console.error("Profile error:", error);
    }
  };

  const logout = async () => {
    try {
      await profileService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("accessToken");

      navigate("/login", {
        replace: true,
        state: {
          message: "Logged out successfully",
        },
      });
    }
  };

  return {
    profile,
    logout,
    refreshProfile: loadProfile,
  };
};