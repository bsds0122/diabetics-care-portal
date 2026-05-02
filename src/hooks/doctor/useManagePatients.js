import { useState, useMemo } from "react";
import { samplePatients as initialPatients } from "@/data/doctor/patientsData";

export const useManagePatients = () => {
  const [search, setSearch] = useState("");
  const [patients, setPatients] = useState(initialPatients);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();

    return patients.filter((p) => {
      return (
        p.id.toLowerCase().includes(q) ||
        p.firstName.toLowerCase().includes(q) ||
        p.lastName.toLowerCase().includes(q) ||
        p.email.toLowerCase().includes(q)
      );
    });
  }, [search, patients]);

  const onStatusChange = (id, status) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    );
  };

  return {
    search,
    setSearch,
    filtered,
    onStatusChange,
  };
};