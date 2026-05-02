import { useManagePatients } from "@/hooks/doctor/useManagePatients";
import { PatientTable } from "@/pages/doctor/components/Manage/PatientTable";

const Manage = () => {
  const { search, setSearch, filtered, onStatusChange } =
    useManagePatients();

  return (
    <div className="space-y-6">
      <div className="flex-1 w-full">
        <PatientTable
          search={search}
          setSearch={setSearch}
          filtered={filtered}
          onStatusChange={onStatusChange}
        />
      </div>
    </div>
  );
};

export default Manage;
