import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

import { DosageFilters } from "./DosageFilters";
import { DosageTable } from "./DosageTable";
import { useDosageFilter } from "./useDosageFilter";

export function DosageCard() {
  const { year, month, day, setYear, setMonth, setDay, filtered } =
    useDosageFilter();

  return (
    <Card className="w-full rounded-2xl shadow-sm border bg-card/20 backdrop-blur-xl">
      {/* HEADER */}
      <CardHeader className="border-b pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <CardTitle className="text-base font-bold text-primary">
            Prescription & Medication Plan
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Filter and review issued prescriptions
          </p>
        </div>

        <DosageFilters
          setYear={setYear}
          setMonth={setMonth}
          setDay={setDay}
        />
      </CardHeader>

      {/* TABLE */}
      <CardContent>
        <DosageTable data={filtered} />
      </CardContent>
    </Card>
  );
}