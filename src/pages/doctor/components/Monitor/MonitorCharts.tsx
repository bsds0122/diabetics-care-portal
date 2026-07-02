import React from "react";
import { TrendChartCard } from "./TrendChartCard";
import { MonitorData } from "@/types/monitor";

export interface MonitorChartsProps {
  loading: boolean;
  chartData: MonitorData[];
}

export const MonitorCharts: React.FC<MonitorChartsProps> = ({
  loading,
  chartData,
}) => {
  return (
    <div
      className={`grid grid-cols-1 gap-8 lg:grid-cols-2 transition-all duration-500 ${
        loading ? "opacity-40 blur-[1px] pointer-events-none" : "opacity-100"
      }`}
    >
      <TrendChartCard
        title="Monthly Average Blood Pressure Trend (mmHg)"
        data={chartData}
        lines={[
          { key: "systolic", color: "#F43F5E", name: "Systolic" },
          { key: "diastolic", color: "#3B82F6", name: "Diastolic" },
        ]}
      />

      <TrendChartCard
        title="Monthly Average Blood Glucose Trend (mmol/L)"
        data={chartData}
        lines={[
          { key: "sugar", color: "#10B981", name: "Blood Glucose" },
        ]}
      />
    </div>
  );
};