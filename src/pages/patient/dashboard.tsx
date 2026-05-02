import { WelcomeBanner } from "@/pages/patient/components/welcome/index";
import { HealthTable } from "@/pages/patient/components/dashboard/health/HealthTable";
import { DosageCard } from "@/pages/patient/components/dashboard/DosageCard/DosageCard";
import { CheckupAdviceCard } from "@/pages/patient/components/dashboard/checkup/CheckupAdviceCard";
import { SymptomReportCard } from "@/pages/patient/components/dashboard/symptoms/SymptomReportCard";

export default function PatientDashboard() {
  return (
    <div className="space-y-6 p-4">
      <WelcomeBanner />
      <HealthTable />
      <SymptomReportCard />

      <div className="flex flex-col gap-6">
        <DosageCard />
        <CheckupAdviceCard />
      </div>
    </div>
  );
}