import { InfoCard } from "@/pages/doctor/components/Patients/About/InfoCard";

export const PersonalInfoSection = ({ selected }) => {
  return (
    <div className="rounded-2xl border border-border bg-card/20 backdrop-blur-xl shadow-xl p-8">
      
      {/* One Column Layout */}
      <div className="grid grid-cols-1 gap-5 text-sm">
        <InfoCard label="Phone Number" value={selected?.phone || "N/A"} />

        <InfoCard label="Email" value={selected?.email || "N/A"} />

        <InfoCard label="Gender" value={selected?.gender || "N/A"} />

        <InfoCard
          label="Age"
          value={selected?.age ? `${selected.age} years` : "N/A"}
        />
      </div>

    </div>
  );
};