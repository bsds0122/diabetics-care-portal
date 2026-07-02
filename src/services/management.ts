/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "@/apis/axiosInstance";

const BASE_URL = "/doctor/patients";

export const managePatientService = {
  /**
   * GET /api/doctor/patients
   */
  getPatients: async (skip = 0, limit = 15): Promise<any> => {
    const response = await api.get(BASE_URL, {
      params: { skip, limit },
    });

    return response.data;
  },

  /**
   * GET /api/doctor/patients/search
   */
  searchPatients: async (name: string): Promise<any> => {
    const response = await api.get(`${BASE_URL}/search`, {
      params: { name },
    });

    return response.data;
  },

  /**
   * GET /api/doctor/patients/{patient_id}
   */
  getPatientById: async (patientId: number | string): Promise<any> => {
    const response = await api.get(`${BASE_URL}/${patientId}`);

    return response.data;
  },

  /**
   * PUT /api/doctor/patients/{patient_id}
   */
  updatePatient: async (
    patientId: number | string,
    data: {
      first_name: string;
      last_name: string;
      sex: string;
      phone_number: string;
      next_of_kin_number: string;
      date_of_diagnosis: string;
      diabetes_type: string;
      region: string;
      district: string;
      traditional_authority: string;
      village: string;
      profile_image: string;
    }
  ): Promise<any> => {
    const response = await api.put(
      `${BASE_URL}/${patientId}`,
      data
    );

    return response.data;
  },
};