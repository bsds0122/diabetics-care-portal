import api from "@/apis/axiosInstance";
import { AssessmentApiResponse, AssessmentResultData } from "@/types/assessment";

const BASE_URL = "/doctor/assessments";

export const assessmentService = {
  createAssessment: async (payload): Promise<AssessmentResultData> => {
    const response = await api.post<AssessmentApiResponse>(BASE_URL, payload);

    // ✅ ONLY RETURN CLEAN DATA
    return response.data.data;
  },
};