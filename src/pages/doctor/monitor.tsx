import React from "react";
import { useMonitor } from "@/hooks/useMonitor";
import { MonitorFilters } from "./components/Monitor/MonitorFilters";
import { MonitorCharts } from "./components/Monitor/MonitorCharts";
import { MonitorSkeleton } from "./components/Monitor/MonitorSkeleton";

export default function MonitorPatientPage() {
  const {
    patientId,
    setPatientId,
    selectedYear,
    setSelectedYear,
    loading,
    chartData,
    handleSearch,
  } = useMonitor();

  return (
    <div className="w-full space-y-8 p-6 animate-in fade-in duration-700">


      {/* FILTER SECTION */}
      <MonitorFilters
        patientId={patientId}
        setPatientId={setPatientId}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        loading={loading}
        onSearch={handleSearch}
      />

      {/* ANALYTICS GRID */}
      {loading && chartData.length === 0 ? (
        <MonitorSkeleton />
      ) : chartData && chartData.length > 0 ? (
        <MonitorCharts loading={loading} chartData={chartData} />
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-4xl mb-3">📈</div>
          <p className="text-muted-foreground font-medium">
            No monitoring data available
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Enter a patient ID and select a year to view health trend analytics
          </p>
        </div>
      )}
    </div>
  );
}