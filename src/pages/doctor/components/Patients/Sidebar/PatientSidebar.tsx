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
    <Card className="relative w-[350px] flex flex-col rounded-2xl overflow-hidden">

      <PatientSearch search={search} setSearch={setSearch} />

      <PatientList
        filtered={filtered}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />

    </Card>
  );
};