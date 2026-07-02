import api from "@/apis/axiosInstance";

export const doctorProfileService = {
  // GET PROFILE
  getProfile: async () => {
    const response = await api.get("/doctor/profile");

    const apiResponse = response.data;

    console.log("Doctor Profile API Response:", apiResponse);

    return {
      statusCode: apiResponse.status_code,
      message: apiResponse.details,

      data: {
        doctor_id: apiResponse.data.doctor_id,
        first_name: apiResponse.data.first_name,
        last_name: apiResponse.data.last_name,
        email: apiResponse.data.email,
        phone: apiResponse.data.phone,
        specialization: apiResponse.data.specialization,
        hospital: apiResponse.data.hospital,
        experience_years: apiResponse.data.experience_years,
        license_number: apiResponse.data.license_number,
        profile_image: apiResponse.data.profile_image,
      },
    };
  },

  // UPDATE PROFILE
  updateProfile: async (data) => {
    const response = await api.put(
      "/doctor/profile",
      data
    );

    const apiResponse = response.data;

    console.log("Doctor Profile Update Response:", apiResponse);

    return {
      statusCode: apiResponse.status_code,
      message: apiResponse.details,
      data: apiResponse.data,
    };
  },
};