import { useState } from "react";

export const useDashboard = () => {
  const [activeChart, setActiveChart] = useState("pie");

  const handleChartChange = (chartType) => {
    setActiveChart(chartType);
  };

  return {
    activeChart,
    handleChartChange,
  };
};
