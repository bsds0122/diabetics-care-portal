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
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Area
            type="monotone"
            dataKey="highRisk"
            name="High Risk"
            stroke="#ef4444"
            fill="#ef4444"
            fillOpacity={0.2}
          />

          <Area
            type="monotone"
            dataKey="mediumRisk"
            name="Medium Risk"
            stroke="#f59e0b"
            fill="#f59e0b"
            fillOpacity={0.2}
          />

          <Area
            type="monotone"
            dataKey="lowRisk"
            name="Low Risk"
            stroke="#22c55e"
            fill="#22c55e"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};