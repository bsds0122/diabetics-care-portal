import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export const PatientTrendsLineChart = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto">

      <div className="min-w-[900px] h-[400px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
          >

            {/* GRADIENTS (SOFTER MEDICAL THEME) */}
            <defs>
              <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="colorMedium" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.22} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.22} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* GRID */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={false}
              opacity={0.25}
            />

            {/* X AXIS */}
            <XAxis
              dataKey="month"
              interval={0}
              tick={{
                fontSize: 12,
                fontWeight: 500,
                fill: "hsl(var(--muted-foreground))",
              }}
              angle={-25}
              textAnchor="end"
              height={60}
              axisLine={false}
              tickLine={false}
            />

            {/* Y AXIS */}
            <YAxis
              tick={{
                fontSize: 12,
                fontWeight: 500,
                fill: "hsl(var(--muted-foreground))",
              }}
              axisLine={false}
              tickLine={false}
              dx={-10}
            />

            {/* TOOLTIP */}
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                padding: "12px",
              }}
              labelStyle={{
                fontWeight: 700,
                marginBottom: "6px",
              }}
              cursor={{
                stroke: "hsl(var(--primary))",
                strokeWidth: 1.5,
                strokeDasharray: "4 4",
              }}
            />

            {/* LEGEND */}
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={8}
            />

            {/* HIGH RISK */}
            <Area
              type="monotone"
              dataKey="highRisk"
              name="High Risk"
              stroke="#f43f5e"
              strokeWidth={2}
              fill="url(#colorHigh)"
              animationDuration={1200}
            />

            {/* MEDIUM RISK */}
            <Area
              type="monotone"
              dataKey="mediumRisk"
              name="Medium Risk"
              stroke="#f59e0b"
              strokeWidth={2}
              fill="url(#colorMedium)"
              animationDuration={1200}
            />

            {/* LOW RISK */}
            <Area
              type="monotone"
              dataKey="lowRisk"
              name="Low Risk"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#colorLow)"
              animationDuration={1200}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
};