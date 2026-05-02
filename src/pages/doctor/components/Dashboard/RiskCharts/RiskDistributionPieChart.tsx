import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export const RiskDistributionPieChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCells = useMemo(() => {
    return data.map((item, i) => (
      <Cell
        key={i}
        fill={item.fill}
        stroke="hsl(var(--background))"
        strokeWidth={2}
        opacity={activeIndex === i ? 1 : 0.75}
        style={{
          cursor: "pointer",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      />
    ));
  }, [data, activeIndex]);

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>

          {/* TOOLTIP (theme-consistent) */}
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "12px",
              fontSize: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
            itemStyle={{
              color: "hsl(var(--foreground))",
            }}
            labelStyle={{
              fontWeight: 600,
              color: "hsl(var(--foreground))",
            }}
            cursor={{
              fill: "rgba(0,0,0,0.04)",
            }}
          />

          {/* PIE */}
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            innerRadius={70}
            paddingAngle={3}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            animationDuration={900}
            animationEasing="ease-out"
          >
            {renderCells}
          </Pie>

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};