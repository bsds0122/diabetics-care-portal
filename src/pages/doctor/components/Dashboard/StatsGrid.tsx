import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

export const StatsGrid = ({
  diabetesTypeStats = [],
  riskLevelStats = [],
  totalAssessments = 0,
}) => {
  const riskColors = {
    High: "#7c3aed", // Purple
    Medium: "#f59e0b", // Amber
    Low: "#16a34a", // Green
  };

  return (
    <Card className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">
          Patient Statistics
        </h3>

        <div className="flex items-center gap-2 rounded-xl border border-border/50 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground">
          Total Assessments:
          <span className="font-bold text-foreground">
            {totalAssessments}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* =========================================
            DIABETES TYPE DISTRIBUTION
        ========================================= */}
        <div>
          <h3 className="mb-3 font-semibold">
            Diabetes Type Distribution
          </h3>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={diabetesTypeStats}
              margin={{
                top: 10,
                right: 20,
                left: 0,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="type"
                tick={{ fontSize: 12 }}
              />

              <YAxis
                allowDecimals={false}
                tick={{ fontSize: 12 }}
              />

              <Tooltip />

              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                wrapperStyle={{
                  paddingTop: "20px",
                }}
              />

              <Bar
                dataKey="male"
                stackId="gender"
                fill="#2563eb"
                name="Male"
                radius={[4, 4, 0, 0]}
              />

              <Bar
                dataKey="female"
                stackId="gender"
                fill="#14b8a6"
                name="Female"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* =========================================
            CARDIOVASCULAR RISK LEVEL
        ========================================= */}
        <div>
          <h3 className="mb-3 font-semibold">
            Cardiovascular Risk Level
          </h3>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={riskLevelStats}
              margin={{
                top: 10,
                right: 20,
                left: 0,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="level"
                tick={{ fontSize: 12 }}
              />

              <YAxis
                allowDecimals={false}
                tick={{ fontSize: 12 }}
              />

              <Tooltip />

              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                wrapperStyle={{
                  paddingTop: "20px",
                }}
                payload={[
                  {
                    value: "High Risk",
                    type: "circle",
                    color: riskColors.High,
                  },
                  {
                    value: "Medium Risk",
                    type: "circle",
                    color: riskColors.Medium,
                  },
                  {
                    value: "Low Risk",
                    type: "circle",
                    color: riskColors.Low,
                  },
                ]}
              />

              <Bar
                dataKey="count"
                name="Patients"
                radius={[6, 6, 0, 0]}
              >
                {riskLevelStats.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      riskColors[entry.level] || "#2563eb"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};