import React from "react";
import { User, Calendar, Loader2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MonitorFiltersProps {
  patientId: string;
  setPatientId: (value: string) => void;
  selectedYear: string;
  setSelectedYear: (value: string) => void;
  loading: boolean;
  onSearch: () => void;
}

export const MonitorFilters: React.FC<MonitorFiltersProps> = ({
  patientId,
  setPatientId,
  selectedYear,
  setSelectedYear,
  loading,
  onSearch,
}) => {
  const currentYear = new Date().getFullYear();

  const years = Array.from(
    { length: 10 },
    (_, i) => (currentYear - i).toString()
  );

  return (
    <Card className="border-border/60 bg-card/20 backdrop-blur-xl shadow-sm">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_180px_220px] gap-4 items-center">
          {/* Patient ID */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="patientId"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter Patient ID"
              className="pl-9 h-11"
              disabled={loading}
            />
          </div>

          {/* Year Selection */}
          <Select
            value={selectedYear}
            onValueChange={setSelectedYear}
            disabled={loading}
          >
            <SelectTrigger className="h-11">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Select Year" />
              </div>
            </SelectTrigger>

            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Action Button */}
          <Button
            onClick={onSearch}
            disabled={loading}
            className="h-11 w-full shadow-md transition-all active:scale-95"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              <>
                <TrendingUp className="mr-2 h-4 w-4" />
                View Patient Trends
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};