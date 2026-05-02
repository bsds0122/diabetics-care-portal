// HealthTable.tsx
import { data } from "@/data/doctor/patient-data";

import { HealthTableHeader } from "./HealthTableHeader";
import { HealthTableContent } from "./HealthTableContent";
import { HealthTableProps } from "./types";

export const HealthTable = ({
  items = data,
}: HealthTableProps) => {
  return (
    <div className="w-full rounded-2xl border bg-card/20 backdrop-blur-xl p-4 shadow-sm">
      <HealthTableHeader />
      <HealthTableContent items={items} />
    </div>
  );
};