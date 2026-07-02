import api from "@/apis/axiosInstance";
import {
  AssessmentHistoryResponse,
  AssessmentHistoryItem,
} from "@/types/history";

const monthMap: Record<string, number> = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

export const fetchAssessmentHistoryApi = async (
  patientId: string,
  year: string,
  month?: string,
  day?: string
): Promise<AssessmentHistoryItem[]> => {
  try {
    const normalizedMonth =
      month && monthMap[month] ? monthMap[month] : undefined;

    const res = await api.get<AssessmentHistoryResponse>(
      `/doctor/assessments/patients/${patientId}`,
      {
        params: {
          year,
          month: normalizedMonth,
          day,
        },
      }
    );

    const data = res.data?.data;

    if (!Array.isArray(data)) {
      throw new Error("Invalid API response: data is not an array");
    }

    // Normalize response (VERY IMPORTANT for UI stability)
    return data.map((item) => ({
      risk_level: item.risk_level ?? "Unknown",
      risk_percentage: Number(Number(item.risk_percentage || 0).toFixed(2)),
      feature_importance: Array.isArray(item.feature_importance)
        ? item.feature_importance.map((f) => ({
            feature: f.feature ?? "unknown",
            effect: f.effect ?? "Unknown",
            impact_percentage: Number(
              Number(f.impact_percentage || 0).toFixed(2)
            ),
          }))
        : [],
    }));
  } catch (error) {
    console.error("Failed to fetch assessment history:", error);
    return [];
  }
};