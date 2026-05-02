import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Droplet } from "lucide-react";
import { HealthTrend } from "@/hooks/doctor";

interface BloodSugarChartProps {
  data: HealthTrend[];
  selectedMonth: string;
  selectedYear: string;
}

export const BloodSugarChart: React.FC<BloodSugarChartProps> = ({
  data,
  selectedMonth,
  selectedYear,
}) => {
  return (
    <div className="rounded-3xl border border-border bg-card/20 backdrop-blur-xl shadow-xl p-8">
      <h3 className="text-sm font-bold mb-8 flex items-center gap-3 border-b border-border/60 pb-4 tracking-wide text-foreground/90">
        <div className="p-2 rounded-xl bg-red-500/10">
          <Droplet className="h-5 w-5 text-red-500" />
        </div>
        Blood Glucose Trend (mg/dL) - {selectedMonth} {selectedYear}
      </h3>

      <div className="h-[350px] flex items-center justify-center">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="period"
                tick={{ fontSize: 11 }}
              />
              <YAxis tick={{ fontSize: 11 }} domain={[0, 'auto']} />
              <Tooltip />
              <Legend />
              <Line 
                name="Blood Glucose"
                type="monotone" 
                dataKey="sugar" 
                stroke="#ef4444" 
                strokeWidth={4} 
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-muted-foreground text-sm italic">
            No health data recorded for this period.
          </div>
        )}
      </div>
    </div>
  );
};
