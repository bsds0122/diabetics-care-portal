import React from "react";

import { PersonalInfoSection } from "@/pages/doctor/components/Patients/About/PersonalInfoSection";
import { LocationInfoSection } from "@/pages/doctor/components/Patients/About/LocationInfoSection";

export const AboutTab = ({ selected }) => {
  return (
    <div className="relative space-y-6">

      {/* soft background glow */}
      <div className="absolute -top-10 left-0 w-40 h-40 bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 blur-3xl rounded-full" />

      {/* One Column Layout */}
      <div className="relative space-y-3 pb-8">
        <LocationInfoSection selected={selected} />
        <PersonalInfoSection selected={selected} />
      </div>

    </div>
  );
};