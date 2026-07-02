import api from "@/apis/axiosInstance";

export const profileService = {
  /**
   * Get logged-in doctor's profile
   */
  getProfile: async () => {
    const response = await api.get("/doctor/profile");

    const res = response.data;

    return {
      doctor_id: res.data.doctor_id,
      user_id: res.data.user_id,
      first_name: res.data.first_name,
      last_name: res.data.last_name,
      email: res.data.email,
      phone: res.data.phone,
      specialization: res.data.specialization,
      experience_years: res.data.experience_years,
      hospital: res.data.hospital,
      license_number: res.data.license_number,
      profile_image: res.data.profile_image,
    };
  },

  /**
   * Logout user
   */
  logout: async () => {
    const response = await api.post("/auth/logout");

    return response.data;
  },
};