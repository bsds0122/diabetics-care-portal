import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  TooltipProps,
} from "recharts";

import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";



interface DiabetesCardiovascularTrendChartProps {
  data;
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border bg-background p-4 shadow-lg">
      <p className="mb-2 text-sm font-semibold text-foreground">
        {label}
      </p>

      {payload.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: item.color }}
          />

          <span className="text-muted-foreground">
            {item.name}:
          </span>

          <span className="font-semibold text-foreground">
            {item.value} patients
          </span>
        </div>
      ))}
    </div>
  );
};

export const DiabetesCardiovascularTrendChart = ({
  data,
}: DiabetesCardiovascularTrendChartProps) => {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="hsl(var(--border))"
            opacity={0.5}
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 12,
            }}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 12,
            }}
            label={{
              value: "Patients",
              angle: -90,
              position: "insideLeft",
              style: {
                textAnchor: "middle",
                fill: "hsl(var(--muted-foreground))",
                fontSize: 12,
              },
            }}
          />

          <Tooltip content={<CustomTooltip />} />

          <Legend
            verticalAlign="top"
            iconType="circle"
            wrapperStyle={{
              paddingBottom: "20px",
            }}
          />

          <Line
            type="monotone"
            dataKey="diabetics"
            name="Diabetic Patients"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{
              r: 4,
              fill: "#2563eb",
              stroke: "#ffffff",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 7,
            }}
          />

          <Line
            type="monotone"
            dataKey="cardiovascular"
            name="Cardiovascular Cases"
            stroke="#dc2626"
            strokeWidth={3}
            dot={{
              r: 4,
              fill: "#dc2626",
              stroke: "#ffffff",
              strokeWidth: 2,
              }}
            activeDot={{
              r: 7,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};