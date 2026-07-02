// src/services/patients.ts

import api from "@/apis/axiosInstance";

export const patientsService = {
  // -----------------------------
  // GET ALL PATIENTS
  // -----------------------------
  getPatients: async (
    skip = 0,
    limit = 15
  ) => {
    const res = await api.get(
      "/doctor/patients",
      {
        params: {
          skip,
          limit,
        },
      }
    );

    return {
      data: res.data.data,
    };
  },

  // -----------------------------
  // SEARCH PATIENTS
  // -----------------------------
  searchPatients: async (
    name: string
  ) => {
    const res = await api.get(
      "/doctor/patients/search",
      {
        params: {
          name,
        },
      }
    );

    return {
      data: res.data.data,
    };
  },

  // -----------------------------
  // GET PATIENT DETAILS
  // -----------------------------
  getPatientById: async (
    patientId: string | number
  ) => {
    const res = await api.get(
      `/doctor/patients/${patientId}`
    );

    return {
      data: res.data.data,
    };
  },
};