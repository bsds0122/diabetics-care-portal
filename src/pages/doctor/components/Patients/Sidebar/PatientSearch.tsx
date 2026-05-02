import { SearchInput } from "@/pages/doctor/components/Patients/Sidebar/search/SearchInput";
import { SearchHeaderWrapper } from "@/pages/doctor/components/Patients/Sidebar/search/SearchHeaderWrapper";

export const PatientSearch = ({ search, setSearch }) => {
  return (
    <SearchHeaderWrapper>
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search patient..."
      />
    </SearchHeaderWrapper>
  );
};