import { useState } from "react";
import { monitoringService } from "@/services/monitoring";
import {
  MonitorData,
  YearlyMonitoringApiItem,
} from "@/types/monitor";

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const useMonitor = () => {
  const [patientId, setPatientId] = useState<string>("1");
  const [selectedYear, setSelectedYear] = useState<string>("2026");

  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState<MonitorData[]>([]);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const res = await monitoringService.getYearlyMonitoring(
        Number(patientId),
        Number(selectedYear)
      );

      const apiData: YearlyMonitoringApiItem[] = res || [];

      const transformed: MonitorData[] = apiData.map((item) => ({
        month: monthNames[item.month - 1],
        systolic: item.average_systolic_bp,
        diastolic: item.average_diastolic_bp,
        sugar: item.average_glucose, // ✅ FIXED
        visits: item.number_of_visits,
      }));

      setChartData(transformed);
    } catch (err) {
      console.error("Monitoring error:", err);
      setChartData([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    patientId,
    setPatientId,
    selectedYear,
    setSelectedYear,
    loading,
    chartData,
    handleSearch,
  };
};