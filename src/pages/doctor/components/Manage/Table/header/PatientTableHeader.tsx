import { HeaderWrapper } from "./HeaderWrapper";
import { SectionTitle } from "./SectionTitle";
import { SearchInput } from "./SearchInput";

export const PatientTableHeader = ({ search, setSearch }) => {
  return (
    <HeaderWrapper>
      <SectionTitle>Patients</SectionTitle>

      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search patient..."
      />
    </HeaderWrapper>
  );
};