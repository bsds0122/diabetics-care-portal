import { useState } from "react";
import FilterCard from "@/pages/patient/components/monitor/FilterCard";
import BloodSugarChart from "@/pages/patient/components/monitor/BloodSugarChart";
import BloodPressureChart from "@/pages/patient/components/monitor/BloodPressureChart";
import WeightChart from "@/pages/patient/components/monitor/WeightChart";
import { monitoringData } from "@/data/doctor/monitor-patient";

export default function MonitoringPage() {
  const [year, setYear] = useState("2026");

  const data = monitoringData?.[year] || [];

  return (
    <div className="space-y-8 p-4 max-w-6xl mx-auto">
      <FilterCard
        year={year}
        setYear={setYear}
      />

      <div className="flex flex-col gap-8">
        <BloodSugarChart data={data} />
        <BloodPressureChart data={data} />
        <WeightChart data={data} />
      </div>
    </div>
  );
}
