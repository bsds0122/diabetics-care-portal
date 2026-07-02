import api from "@/apis/axiosInstance";
import { DashboardResult } from "@/types/dashboard";

export const dashboardService = {
  getDashboard: async (): Promise<DashboardResult> => {
    const response = await api.get(
      "/doctor/dashboard/"
    );

    const apiResponse = response.data;

    console.log(
      "Dashboard API Response:",
      apiResponse
    );

    return {
      statusCode: apiResponse.status_code,
      message: apiResponse.details,

      data: {
        greeting: apiResponse.data.greeting,
        doctor_name: apiResponse.data.doctor_name,

        patientOverviewStats:
          apiResponse.data.patientOverviewStats || [],

        diabetesTypeStats:
          apiResponse.data.diabetesTypeStats || [],

        riskLevelStats:
          apiResponse.data.riskLevelStats || [],

        totalAssessments:
          apiResponse.data.totalAssessments || 0,
      },
    };
  },
};