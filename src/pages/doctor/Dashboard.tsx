import React from "react";

import { WelcomeBanner } from "@/pages/doctor/components/Dashboard/WelcomeBanner";
import { StatsGrid } from "@/pages/doctor/components/Dashboard/StatsGrid";
import { RiskCharts } from "@/pages/doctor/components/Dashboard/RiskCharts";
import PatientStatisticsPage from "@/pages/doctor/components/Dashboard/stastics";
import { DashboardSkeleton } from "@/pages/doctor/components/Dashboard/DashboardSkeleton";

import { useDashboard } from "@/hooks/useDashboard";

const Dashboard = () => {
  const { 
    activeChart, 
    handleChartChange,
    greeting,
    doctorName,
    patientOverviewStats,
    diabetesTypeStats,
    riskLevelStats,
    totalAssessments,
  
    loading,
  } = useDashboard();

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      
      {/* 1. WELCOME SECTION */}

      <WelcomeBanner
       greeting={greeting}
       doctorName={doctorName}
      />

      {/* 2. PATIENT STATISTICS CARDS */}
      <PatientStatisticsPage stats={patientOverviewStats} />

      {/* 3. DISTRIBUTION SECTION */}
      <section className="space-y-6">

        <div className="flex items-center justify-between px-1">

          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Patient Distribution
            </h2>

            <p className="text-muted-foreground">
              Detailed breakdown of patient demographics and categories.
            </p>
          </div>

        </div>

        <StatsGrid
          diabetesTypeStats={diabetesTypeStats}
          totalAssessments={totalAssessments}
          riskLevelStats={riskLevelStats}
        />

      </section>

      {/* 4. VISUALIZATION SECTION */}
      <section className="space-y-6">

        <div className="flex items-center justify-between px-1">

          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Percentage Distribution Charts
            </h2>

            <p className="text-muted-foreground">
              This are percentage of diabetics patient and assessment risk Levels.
            </p>
          </div>

        </div>

        <RiskCharts
          activeChart={activeChart}
          setActiveChart={handleChartChange}
          riskDistributionData={riskLevelStats}
          diabetesTypeStats={diabetesTypeStats}
        />

      </section>

    </div>
  );
};

export default Dashboard;