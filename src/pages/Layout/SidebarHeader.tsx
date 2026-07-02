import React from "react";
import { HospitalTitle } from "./HospitalTitle";

export const SidebarHeader = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <div className="flex items-center gap-4">
      {!collapsed && <HospitalTitle />}
    </div>
  );
};