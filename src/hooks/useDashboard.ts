import { useCallback, useEffect, useState } from "react";
import { dashboardService } from "@/services/doctor-dashboard";
export type ActiveChart = "pie" | "diabetics_pie";

export const useDashboard = () => {

  const [dashboard, setDashboard] =useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // ✅ CHART STATE MOVED TO HOOK (GOOD ARCHITECTURE)
  const [activeChart, setActiveChart] = useState<ActiveChart>("pie");
  const handleChartChange = (chart: ActiveChart) => {setActiveChart(chart); };

  const fetchDashboard = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await dashboardService.getDashboard();

      if (response.statusCode === 200) {
        setDashboard(response.data);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(
        err?.response?.data?.details ||
          err?.message ||
          "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  return {
    // state
    loading,
    error,

    // chart control (NEW)
    activeChart,
    handleChartChange,

    // dashboard data
    patientOverviewStats: dashboard?.patientOverviewStats ?? [],

    diabetesTypeStats:dashboard?.diabetesTypeStats ?? [],
    riskLevelStats:dashboard?.riskLevelStats ?? [],
    totalAssessments:dashboard?.totalAssessments??[],
    
    greeting: dashboard?.greeting ?? "",
    doctorName: dashboard?.doctor_name?? "",

    refetch: fetchDashboard,
  };
};