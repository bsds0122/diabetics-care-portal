// services/patientService.ts

import api from "@/apis/axiosInstance";
import { FormType } from "@/types/registration";

export const patientService = {
  /**
   * Register a single patient (WITH IMAGE UPLOAD)
   */
  register: async (payload: FormType) => {
    const formData = new FormData();

    // =========================
    // TEXT FIELDS
    // =========================
    formData.append("first_name", payload.firstName || "");
    formData.append("last_name", payload.lastName || "");
    formData.append("sex", payload.sex || "");
    formData.append("phone_number", payload.phone || "");
    formData.append("next_of_kin_number", payload.nextOfKin || "");
    formData.append("date_of_diagnosis", payload.diagnosisDate || "");
    formData.append("diabetes_type", payload.diabeticType || "");
    formData.append("region", payload.region || "");
    formData.append("district", payload.district || "");
    formData.append("traditional_authority", payload.ta || "");
    formData.append("village", payload.village || "");

    // =========================
    // FILE FIELD (IMPORTANT FIX)
    // =========================
    if (payload.profileImage instanceof File) {
      formData.append("profile_image", payload.profileImage);
    }

    // =========================
    // API REQUEST
    // =========================
    const response = await api.post("/doctor/patients", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },

  /**
   * Bulk upload patients (Excel/CSV)
   */
  bulkRegister: async (file: File) => {
    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
      "/doctor/patients/bulk",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },
};