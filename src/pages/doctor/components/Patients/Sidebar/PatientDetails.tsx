import React from "react";
import { Card } from "@/components/ui/card";
import { PatientHeader } from "@/pages/doctor/components/Patients/About/PatientHeader";
import { PatientTabs } from "@/pages/doctor/components/Patients/About/PatientTabs";

export const PatientDetails = ({
  selected,
  activeMetric,
  setActiveMetric,
  activeTab,
  setActiveTab,
  trends,
}) => {
  return (
    <Card className="relative flex-1 flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/20 backdrop-blur-xl shadow-sm">

      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />

      {/* subtle glow overlay */}
      <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent pointer-events-none" />

      <PatientHeader selected={selected} />

      <PatientTabs
        selected={selected}
        activeMetric={activeMetric}
        setActiveMetric={setActiveMetric}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        trends={trends}
      />

    </Card>
  );
};