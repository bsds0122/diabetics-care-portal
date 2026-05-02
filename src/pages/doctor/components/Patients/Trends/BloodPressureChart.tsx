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
import { Heart } from "lucide-react";
import { HealthTrend } from "@/hooks/doctor";

interface BloodPressureChartProps {
  data: HealthTrend[];
  selectedMonth: string;
  selectedYear: string;
}

export const BloodPressureChart: React.FC<BloodPressureChartProps> = ({
  data,
  selectedMonth,
  selectedYear,
}) => {
  return (
    <div className="rounded-3xl border border-border bg-card/20 backdrop-blur-xl shadow-xl p-8">
     
      <div className="h-[350px] flex items-center justify-center">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="period"
                tick={{ fontSize: 12, fontWeight: 500 }}
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis 
                tick={{ fontSize: 12, fontWeight: 500 }} 
                domain={[0, 'auto']}
                tickLine={false}
                axisLine={false}
                dx={-10}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: 'none', 
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' 
                }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Line 
                name="Systolic"
                type="monotone" 
                dataKey="systolic" 
                stroke="#3b82f6" 
                strokeWidth={4} 
                dot={{ r: 6, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 8, strokeWidth: 0 }}
              />
              <Line 
                name="Diastolic"
                type="monotone" 
                dataKey="diastolic" 
                stroke="#10b981" 
                strokeWidth={4} 
                dot={{ r: 6, fill: "#10b981", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 8, strokeWidth: 0 }}
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
