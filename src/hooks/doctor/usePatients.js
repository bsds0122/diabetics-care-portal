import { useState, useMemo } from "react";
import { SAMPLE_PATIENTS } from "@/data/doctor/patientsDashboardData";

/* ---------------- Avatar fallback ---------------- */
const getAvatar = (patient, index = 0) => {
  if (patient?.avatar) return patient.avatar;

  const baseIndex = index + 10;

  return patient?.gender === "Female"
    ? `https://randomuser.me/api/portraits/women/${baseIndex}.jpg`
    : `https://randomuser.me/api/portraits/men/${baseIndex}.jpg`;
};

/* ---------------- Main Hook ---------------- */
export const usePatients = () => {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState("P001");
  const [activeMetric, setActiveMetric] = useState("sugar");
  const [activeTab, setActiveTab] = useState("about");

  /* ---------------- Filter patients ---------------- */
  const filteredPatients = useMemo(() => {
    const query = search.trim().toLowerCase();

    return SAMPLE_PATIENTS
      .filter((p) => {
        if (!query) return true;

        return (
          p.firstName?.toLowerCase().includes(query) ||
          p.lastName?.toLowerCase().includes(query) ||
          p.id?.toLowerCase().includes(query)
        );
      })
      .map((p, index) => ({
        ...p,
        avatar: getAvatar(p, index),
      }));
  }, [search]);

  /* ---------------- Selected patient ---------------- */
  const selectedPatient = useMemo(() => {
    if (!filteredPatients.length) return null;

    const match =
      filteredPatients.find((p) => p.id === selectedId) ||
      filteredPatients[0];

    return {
      ...match,
      avatar: match?.avatar || getAvatar(match),
    };
  }, [filteredPatients, selectedId]);

  /* ---------------- 🔥 Extract trends ---------------- */
  const trends = useMemo(() => {
    return selectedPatient?.trends || [];
  }, [selectedPatient]);

  /* ---------------- Return API ---------------- */
  return {
    search,
    setSearch,

    selectedId,
    setSelectedId,

    selectedPatient,

    activeMetric,
    setActiveMetric,

    activeTab,
    setActiveTab,

    filteredPatients,

    /* 👇 now you can use this directly */
    trends,
  };
};