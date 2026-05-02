import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Scale } from "lucide-react";
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
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          <p className="text-sm">
            <span className="text-muted-foreground">Weight:</span>{" "}
            <span className="font-bold">{payload[0].value} kg</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default function WeightChart({ data }) {
  return (
    <Card className="rounded-2xl shadow-sm border bg-card/20 backdrop-blur-xl  overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl font-bold text-purple-600">
              <Scale className="w-5 h-5 fill-purple-600/20" />
              Weight
            </CardTitle>
            <CardDescription>Body mass tracking</CardDescription>
          </div>
          <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-bold border border-purple-100">
            kg
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-80 px-0 pb-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
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
              dataKey="weight" 
              stroke="#a855f7" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorWeight)"
              animationDuration={1500}
              dot={{ r: 4, fill: "#a855f7", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
