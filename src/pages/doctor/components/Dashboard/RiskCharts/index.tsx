import { Card, CardContent } from "@/components/ui/card";

import { RiskChartsHeader } from "@/pages/doctor/components/Dashboard/RiskCharts/RiskChartsHeader";
import { RiskDistributionPieChart } from "@/pages/doctor/components/Dashboard/RiskCharts/RiskDistributionPieChart";
import { PatientTrendsLineChart } from "@/pages/doctor/components/Dashboard/RiskCharts/PatientTrendsLineChart";

export const RiskCharts = ({
  activeChart,
  setActiveChart,
  riskDistributionData,
  patientTrendsData,
}) => {
  return (
    <Card className="w-full bg-card/20 backdrop-blur-xl">

      {/* HEADER */}
      <RiskChartsHeader
        activeChart={activeChart}
        setActiveChart={setActiveChart}
      />

      <CardContent>

        {/* CHART CONTAINER */}
        <div className="w-full h-[420px]">

          {/* PIE CHART */}
          {activeChart === "pie" && (
            <div className="w-full h-full flex items-center justify-center">
              <RiskDistributionPieChart data={riskDistributionData} />
            </div>
          )}

          {/* LINE / 12-MONTH CHART */}
          {activeChart === "line" && (
            <div className="w-full h-full">
              <PatientTrendsLineChart data={patientTrendsData} />
            </div>
          )}

        </div>

      </CardContent>

    </Card>
  );
};