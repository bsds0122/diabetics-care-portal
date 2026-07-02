import { Card, CardContent } from "@/components/ui/card";

import { RiskChartsHeader } from "@/pages/doctor/components/Dashboard/RiskChartsHeader";
import { RiskDistributionPieChart } from "@/pages/doctor/components/Dashboard/RiskDistributionPieChart";

export const RiskCharts = ({
  activeChart,
  setActiveChart,
  riskDistributionData,
  diabetesTypeStats,
}) => {

  // =========================
  // RISK COLORS (NO RED)
  // =========================
  const riskColors = ["#7c3aed", "#f59e0b", "#16a34a"];

  const riskData = riskDistributionData
    ? riskDistributionData.map((item, index) => ({
        name: item.level,
        value: parseFloat(item.percentage),
        fill: riskColors[index % riskColors.length],
      }))
    : [];

  // =========================
  // DIABETES COLORS (NEW CONSISTENT PALETTE)
  // =========================
  const diabetesColors = ["#2563eb", "#14b8a6", "#6366f1"];

  const diabeticsPieData = diabetesTypeStats
    ? diabetesTypeStats.map((item, index) => ({
        name: item.type,
        value:
          parseInt(String(item.percentage || "0")) ||
          item.male + item.female,
        fill: diabetesColors[index % diabetesColors.length],
      }))
    : [];

  return (
    <Card>
      <RiskChartsHeader
        activeChart={activeChart}
        setActiveChart={setActiveChart}
      />

      <CardContent className="p-6">
        <div className="h-[400px] w-full">

          {/* =========================
              RISK PIE
          ========================== */}
          {activeChart === "pie" && (
            <div className="h-full flex flex-col">
              <div className="flex-1">
                <RiskDistributionPieChart data={riskData} />
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-4">
                {riskData.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.fill }}
                    />
                    <span>
                      {item.name} ({item.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================
              DIABETES PIE (UPDATED COLORS)
          ========================== */}
          {activeChart === "diabetics_pie" && (
            <div className="h-full flex flex-col">
              <div className="flex-1">
                <RiskDistributionPieChart data={diabeticsPieData} />
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-4">
                {diabeticsPieData.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.fill }}
                    />
                    <span>
                      {item.name} ({item.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </CardContent>
    </Card>
  );
};