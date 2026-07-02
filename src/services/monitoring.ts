import api from "@/apis/axiosInstance";

const BASE_URL = "/doctor/monitoring";

export const monitoringService = {
  getYearlyMonitoring: async (
    patientId: number,
    year: number
  ) => {
    const res = await api.get(
      `${BASE_URL}/patients/${patientId}/yearly`,
      {
        params: { year },
      }
    );

    return res.data.data;
  },
};