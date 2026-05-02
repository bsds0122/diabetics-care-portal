import React from "react";
import { Calendar, Clock } from "lucide-react";
import { years, months } from "@/pages/doctor/components/Patients/Trends/TrendsConstants";

export interface TrendsFiltersProps {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

export const TrendsFilters = ({
  selectedYear,
  setSelectedYear,
}: TrendsFiltersProps) => {
  return (
    <div className="flex p-1.5 bg-muted/30 backdrop-blur-md border border-border/50 rounded-2xl shadow-inner h-full items-center">
      <div className="flex w-full gap-4 px-3">
        {/* YEAR */}
        <div className="flex items-center gap-2.5 w-full">
          <Calendar className="h-3.5 w-3.5 text-muted-foreground/60" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 mr-2">Select Year:</span>
          <select
            className="bg-transparent border-none text-[11px] font-bold uppercase tracking-wider text-foreground focus:outline-none cursor-pointer hover:text-primary transition-colors flex-1"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((y) => (
              <option key={y} value={y} className="bg-card text-foreground">
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
