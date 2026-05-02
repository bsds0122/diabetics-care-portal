import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Droplet } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border rounded-lg shadow-lg p-3 border-border">
        <p className="text-sm font-bold mb-1">{label}</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <p className="text-sm">
            <span className="text-muted-foreground">Sugar Level:</span>{" "}
            <span className="font-bold">{payload[0].value} mg/dL</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default function BloodSugarChart({ data }) {
  return (
    <Card className="rounded-2xl shadow-sm border bg-card/20 backdrop-blur-xl  overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl font-bold text-blue-600">
              <Droplet className="w-5 h-5 fill-blue-600/20" />
              Blood Sugar
            </CardTitle>
            <CardDescription>Glucose levels trend over time</CardDescription>
          </div>
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
            mg/dL
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-80 px-0 pb-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSugar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="hsl(var(--muted))" 
              opacity={0.4} 
            />
            <XAxis 
              dataKey="period" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={11}
              tickLine={false}
              axisLine={false}
              dy={10}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={11}
              tickLine={false}
              axisLine={false}
              dx={-10}
              domain={['auto', 'auto']}
            />
         
            <Area 
              type="monotone" 
              dataKey="sugar" 
              stroke="#3b82f6" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorSugar)"
              animationDuration={1500}
              dot={{ r: 4, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
