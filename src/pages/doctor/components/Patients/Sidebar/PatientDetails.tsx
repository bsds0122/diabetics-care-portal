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
    <Card className="relative flex-1 flex flex-col overflow-hidden rounded-2xl ">
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