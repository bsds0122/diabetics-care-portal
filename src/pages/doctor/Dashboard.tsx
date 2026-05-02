import React from "react";

import { WelcomeBanner } from "@/pages/doctor/components/Dashboard/WelcomeBanner";
import { StatsGrid } from "@/pages/doctor/components/Dashboard/StatsGrid";
import { RiskCharts } from "@/pages/doctor/components/Dashboard/RiskCharts";

import { useDashboard } from "@/hooks/doctor/useDashboard";
import {
  diabetesTypeStats,
  riskLevelStats,
  riskDistributionData,
  patientTrendsData,
} from "@/data/doctor/dashboardData";

const Dashboard = () => {
  const { activeChart, handleChartChange } = useDashboard();

  return (
    <div className="space-y-6">

      {/* Banner */}
      <WelcomeBanner />

      {/* Stats */}
      <StatsGrid
        diabetesTypeStats={diabetesTypeStats}
        riskLevelStats={riskLevelStats}
      />

      {/* Charts */}
      <RiskCharts
        activeChart={activeChart}
        setActiveChart={handleChartChange}
        riskDistributionData={riskDistributionData}
        patientTrendsData={patientTrendsData}
      />

    </div>
  );
};

export default Dashboard;