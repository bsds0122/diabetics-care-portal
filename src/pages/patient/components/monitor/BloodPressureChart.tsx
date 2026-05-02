import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/20 backdrop-blur-xl  border rounded-lg shadow-lg p-3 border-border">
        <p className="text-sm font-bold mb-2 border-b pb-1">{label}</p>
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-xs text-muted-foreground">Systolic:</span>
            </div>
            <span className="text-sm font-bold text-red-600">{payload[0].value}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground">Diastolic:</span>
            </div>
            <span className="text-sm font-bold text-green-600">{payload[1].value}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function BloodPressureChart({ data }) {
  return (
    <Card className="rounded-2xl shadow-sm border bg-card/20 backdrop-blur-xl  overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl font-bold text-red-600">
              <Activity className="w-5 h-5" />
              Blood Pressure
            </CardTitle>
            <CardDescription>Systolic vs Diastolic trend</CardDescription>
          </div>
          <div className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold border border-red-100">
            mmHg
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-80 px-0 pb-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSystolic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorDiastolic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
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
    
            <Legend 
              verticalAlign="top" 
              align="right" 
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: '12px', fontWeight: '500', paddingRight: '30px' }}
            />
            <Area 
              type="monotone" 
              dataKey="systolic" 
              name="Systolic"
              stroke="#ef4444" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorSystolic)"
              dot={{ r: 4, fill: "#ef4444", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            <Area 
              type="monotone" 
              dataKey="diastolic" 
              name="Diastolic"
              stroke="#22c55e" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorDiastolic)"
              dot={{ r: 4, fill: "#22c55e", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
