// SymptomReportCard.tsx
import { useState } from "react";
import { doctors } from "./data";
import { Doctor } from "@/pages/patient/components/dashboard/symptoms/types";
import { DoctorSearchCard } from "./DoctorSearchCard";
import { SymptomFormCard } from "./SymptomFormCard";

export function SymptomReportCard() {
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] =
    useState<Doctor | null>(null);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full bg-card/20 backdrop-blur-xl">
      <DoctorSearchCard
        doctors={filteredDoctors}
        search={search}
        setSearch={setSearch}
        selectedDoctor={selectedDoctor}
        setSelectedDoctor={setSelectedDoctor}
      />

      <SymptomFormCard selectedDoctor={selectedDoctor} />
    </div>
  );
}