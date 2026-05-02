import { HospitalLogo, HospitalTitle } from "@/pages/doctor/components/Layout/Sidebar/Header";

export const SidebarHeader = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <div className="flex items-center gap-4">
      <HospitalLogo />
      {!collapsed && <HospitalTitle />}
    </div>
  );
};