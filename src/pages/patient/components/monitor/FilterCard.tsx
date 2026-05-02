import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity } from "lucide-react";

export default function FilterCard({ year, setYear }) {
  const years = ["2026", "2025", "2024", "2023", "2022"];

  return (
    <Card className="rounded-2xl shadow-sm border bg-card/20 backdrop-blur-xl  mb-6">
      <CardHeader className="pb-3 border-b mb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-bold text-primary">
          <Activity className="w-5 h-5" />
           Monitor your health
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col sm:flex-row gap-4 sm:items-center">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-muted-foreground ml-1">Filter by Year</label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-full sm:w-[220px] rounded-xl border-border/50 bg-muted/20">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              {years.map((y) => (
                <SelectItem key={y} value={y} className="rounded-lg">
                  {y} 
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
