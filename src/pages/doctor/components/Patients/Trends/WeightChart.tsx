import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Weight } from "lucide-react";
import { HealthTrend } from "@/hooks/doctor";

interface WeightChartProps {
  data: HealthTrend[];
  selectedMonth: string;
  selectedYear: string;
}

export const WeightChart: React.FC<WeightChartProps> = ({
  data,
  selectedMonth,
  selectedYear,
}) => {
  return (
    <div className="rounded-3xl border border-border bg-card/90 backdrop-blur-md shadow-xl p-8">
      <h3 className="text-sm font-bold mb-8 flex items-center gap-3 border-b border-border/60 pb-4 tracking-wide text-foreground/90">
        <div className="p-2 rounded-xl bg-purple-500/10">
          <Weight className="h-5 w-5 text-purple-500" />
        </div>
        Weight Trend (kg) - {selectedMonth} {selectedYear}
      </h3>

      <div className="h-[350px] flex items-center justify-center">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="period"
                tick={{ fontSize: 11 }}
              />
              <YAxis tick={{ fontSize: 11 }} domain={['dataMin - 2', 'dataMax + 2']} />
              <Tooltip />
              <Area
                name="Weight"
                type="monotone"
                dataKey="weight"
                stroke="#8b5cf6"
                fillOpacity={1}
                fill="url(#colorWeight)"
                strokeWidth={3}
              />
            </AreaChart>
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
