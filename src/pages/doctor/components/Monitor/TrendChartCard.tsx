import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

import { TrendChartCardProps } from "@/types/monitor";

export const TrendChartCard: React.FC<TrendChartCardProps> = ({
  title,
  data,
  lines,
  height = 350,
}) => {
  return (
    <Card className="overflow-hidden rounded-2xl border border-border/40 bg-card/20 backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-bold tracking-tight text-primary-deep">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div style={{ height }} className="w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 20, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--muted))"
                opacity={0.3}
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "hsl(var(--muted-foreground))",
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "hsl(var(--muted-foreground))",
                }}
              />

              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload || !payload.length) return null;

                  const row = payload[0].payload;

                  return (
                    <div
                      style={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "12px",
                        fontSize: "12px",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                        padding: "12px",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          marginBottom: "8px",
                        }}
                      >
                        {label}
                      </p>

                      {payload.map((entry) => (
                        <p
                          key={String(entry.dataKey)}
                          style={{
                            color: entry.color,
                            marginBottom: "4px",
                            fontWeight: 500,
                          }}
                        >
                          {entry.name}: {entry.value}
                        </p>
                      ))}

                      <div
                        style={{
                          marginTop: "8px",
                          paddingTop: "8px",
                          borderTop: "1px solid hsl(var(--border))",
                          fontWeight: 600,
                        }}
                      >
                        Visits: {row.visits}
                      </div>
                    </div>
                  );
                }}
              />

              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                wrapperStyle={{
                  paddingBottom: "20px",
                  fontSize: "12px",
                }}
              />

              {lines.map((line) => (
                <Line
                  key={line.key}
                  type="natural"
                  dataKey={line.key}
                  stroke={line.color}
                  strokeWidth={3}
                  dot={false}
                  activeDot={{
                    r: 6,
                    strokeWidth: 2,
                    fill: line.color,
                  }}
                  name={line.name}
                  animationDuration={1500}
                  animationEasing="ease-in-out"
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};