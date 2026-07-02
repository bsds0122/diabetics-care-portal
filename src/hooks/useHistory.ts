import { useState, useCallback } from "react";
import { fetchAssessmentHistoryApi } from "@/services/assessment-history";
import { AssessmentHistoryItem } from "@/types/history";

export const useHistory = () => {
  const [history, setHistory] = useState<AssessmentHistoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAssessmentHistory = useCallback(
    async (
      patientId: string,
      year: string,
      month?: string,
      day?: string
    ) => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchAssessmentHistoryApi(
          patientId,
          year,
          month,
          day
        );

        setHistory(data);
      } catch (err) {
        console.error("History fetch error:", err);

        setError(
          err?.response?.data?.details ||
            err?.message ||
            "Failed to fetch history"
        );

        setHistory([]);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    history,
    loading,
    error,
    fetchAssessmentHistory,
  };
};