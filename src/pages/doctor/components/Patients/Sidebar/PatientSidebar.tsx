import React from "react";
import { Card } from "@/components/ui/card";

import { PatientSearch } from "@/pages/doctor/components/Patients/Sidebar/PatientSearch";
import { PatientList } from "@/pages/doctor/components/Patients/Sidebar/PatientList";

export const PatientSidebar = ({
  search,
  setSearch,
  filtered,
  selectedId,
  setSelectedId,
}) => {
  return (
    <Card className="relative w-[350px] flex flex-col rounded-3xl border border-border/60 bg-card/20 backdrop-blur-xl shadow-sm overflow-hidden">

      {/* top accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* glow background */}
      <div className="absolute inset-0 opacity-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <PatientSearch search={search} setSearch={setSearch} />

      <PatientList
        filtered={filtered}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />

    </Card>
  );
};