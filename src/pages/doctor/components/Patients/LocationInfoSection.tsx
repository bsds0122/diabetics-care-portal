import { InfoCard } from "@/pages/doctor/components/Patients/InfoCard";

export const LocationInfoSection = ({ selected }) => {
  return (
    <div className="rounded-2xl border border-border bg-card/20 backdrop-blur-xl shadow-xl p-8">
      
      {/* One Column Layout */}
      <div className="grid grid-cols-1 gap-5 text-sm">
        <InfoCard label="Region" value={selected?.region || "N/A"} />

        <InfoCard label="District" value={selected?.district || "N/A"} />

        <InfoCard
          label="Traditional Authority"
          value={selected?.traditionalAuthority || "N/A"}
        />

        <InfoCard label="Village" value={selected?.village || "N/A"} />
      </div>

    </div>
  );
};