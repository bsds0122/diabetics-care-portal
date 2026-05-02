import { useState, useMemo } from "react";
import { samplePatients } from "@/data/doctor/patientsData";

const initialForm = {
  patientId: "",
  firstName: "",
  lastName: "",
  symptoms: "",
  diagnosis: "",
  notes: "",
  severity: "",
  ogtt: "",
  hba1c: "",
  rbg: "",
  fbg: "",
};

export const useDiagnosis = () => {
  const [form, setForm] = useState(initialForm);
  const [search, setSearch] = useState("");

  const handleInputChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredPatients = useMemo(() => {
    const q = search.toLowerCase();
    return samplePatients.filter((p) => 
      p.id.toLowerCase().includes(q) ||
      p.firstName.toLowerCase().includes(q) ||
      p.lastName.toLowerCase().includes(q)
    );
  }, [search]);

  const getStatusColor = (status) => {
    switch (status) {
      case "diabetic":
        return "text-red-600 bg-red-50 border-red-200";
      case "prediabetic":
        return "text-amber-600 bg-amber-50 border-amber-200";
      case "normal":
        return "text-emerald-600 bg-emerald-50 border-emerald-200";
      default:
        return "text-muted-foreground bg-muted/50 border-border";
    }
  };

  const onRowClick = (patient) => {
    setForm((prev) => ({
      ...prev,
      patientId: patient.id,
      firstName: patient.firstName,
      lastName: patient.lastName,
    }));
  };

  return {
    form,
    setForm,
    handleInputChange,
    search,
    onSearchChange,
    filteredPatients,
    getStatusColor,
    onRowClick,
  };
};
