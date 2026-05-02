import React, { useMemo, useState } from "react";

import { TrendsFilters } from "@/pages/doctor/components/Patients/Trends/TrendsFilters";
import { TrendsMetricSelector } from "@/pages/doctor/components/Patients/Trends/TrendsMetricSelector";
import { BloodSugarChart } from "@/pages/doctor/components/Patients/Trends/BloodSugarChart";
import { BloodPressureChart } from "@/pages/doctor/components/Patients/Trends/BloodPressureChart";
import { WeightChart } from "@/pages/doctor/components/Patients/Trends/WeightChart";
import { months, years } from "@/pages/doctor/components/Patients/Trends/TrendsConstants";

export const TrendsTab = ({
  activeMetric,
  setActiveMetric,
  trends,
}) => {
  // current date fallback
  const date = new Date();
  const currentYearStr = String(date.getFullYear());
  const currentMonthStr = months[date.getMonth()];

  const [selectedYear, setSelectedYear] = useState(
    years.includes(currentYearStr) ? currentYearStr : years[0]
  );

  // filtered trends
  const filteredData = useMemo(() => {
    if (!trends || !Array.isArray(trends)) return [];

    // Filter only by year to show the full year trend (Jan-Feb, Mar-Apr, etc.)
    return trends
      .filter((item) => String(item.year) === selectedYear);
  }, [trends, selectedYear]);

  return (
    <div className="space-y-8 pb-10">

  
  
      {/* charts */}
      <div className="min-h-[400px] transition-all duration-500">

        {activeMetric === "sugar" && (
          <BloodSugarChart
            data={filteredData}
            selectedMonth=""
            selectedYear={selectedYear}
          />
        )}

        {activeMetric === "bp" && (
          <BloodPressureChart
            data={filteredData}
            selectedMonth=""
            selectedYear={selectedYear}
          />
        )}

        {activeMetric === "weight" && (
          <WeightChart
            data={filteredData}
            selectedMonth=""
            selectedYear={selectedYear}
          />
        )}

      </div>
    </div>
  );
};