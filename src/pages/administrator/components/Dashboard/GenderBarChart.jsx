import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const GenderBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} barCategoryGap="30%">

        <XAxis
          dataKey="name"
          tick={{ fill: "#9CA3AF", fontSize: 12 }}
        />

        <YAxis
          tick={{ fill: "#9CA3AF", fontSize: 12 }}
        />

        <Tooltip
          cursor={{
            fill: "rgba(99, 102, 241, 0.08)",
            radius: 6,
          }}
          contentStyle={{
            backgroundColor: "#1F2937",
            border: "1px solid #374151",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "12px",
          }}
        />

        <Bar
          dataKey="value"
          barSize={28}
          fill="hsl(var(--primary))"
          radius={[6, 6, 0, 0]}
          activeBar={{
            fill: "hsl(var(--primary) / 0.8)",
            stroke: "hsl(var(--primary))",
            strokeWidth: 1,
          }}
        />

      </BarChart>
    </ResponsiveContainer>
  );
};