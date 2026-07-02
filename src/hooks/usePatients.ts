/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { patientsService } from "@/services/patients";
import { useSearchStore } from "@/store/useSearchStore";

export const usePatients = () => {
  const { searchQuery } = useSearchStore();

  const [patients, setPatients] = useState<any[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("medical");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // -----------------------------
  // FETCH ALL PATIENTS
  // -----------------------------
  const fetchPatients = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await patientsService.getPatients();

      const transformed = response.data.map((patient: any) => ({
        id: patient.patient_id,
        firstName: patient.first_name,
        lastName: patient.last_name,
        avatar: patient.patient_image,
      }));

      setPatients(transformed);

      if (transformed.length > 0) {
        setSelectedId(transformed[0].id);
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.details ||
          err?.message ||
          "Failed to load patients"
      );
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // SEARCH PATIENTS
  // -----------------------------
  const searchPatients = async (name: string) => {
    try {
      setLoading(true);
      setError("");

      const response = await patientsService.searchPatients(name);

      const transformed = response.data.map((patient: any) => ({
        id: patient.patient_id,
        firstName: patient.first_name,
        lastName: patient.last_name,
        avatar: patient.patient_image,
      }));

      setPatients(transformed);

      if (transformed.length > 0) {
        setSelectedId(transformed[0].id);
      } else {
        setSelectedPatient(null);
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.details ||
          err?.message ||
          "Search failed"
      );
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // LOAD LIST OR SEARCH
  // -----------------------------
  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchQuery?.trim()) {
        searchPatients(searchQuery);
      } else {
        fetchPatients();
      }
    }, 400); // debounce

    return () => clearTimeout(delay);
  }, [searchQuery]);

  // -----------------------------
  // FETCH SELECTED PATIENT DETAILS
  // -----------------------------
  const fetchPatientDetails = async (patientId: number) => {
    try {
      setLoading(true);

      const response = await patientsService.getPatientById(patientId);
      const patient = response.data;

      setSelectedPatient({
        id: patient.patient_id,
        firstName: patient.first_name,
        lastName: patient.last_name,
        avatar: patient.patient_image,

        sex: patient.sex,
        phone: patient.phone_number,
        nextOfKinNumber: patient.next_of_kin_number,
        dateOfDiagnosis: patient.date_of_diagnosis,
        diabetesType: patient.diabetes_type,

        district: patient.district,
        region: patient.region,
        traditionalAuthority:
          patient.traditional_authority,
        village: patient.village,
      });
    } catch (err: any) {
      setError(
        err?.response?.data?.details ||
          err?.message ||
          "Failed to load patient details"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedId) {
      fetchPatientDetails(selectedId);
    }
  }, [selectedId]);

  return {
    selectedId,
    setSelectedId,

    activeTab,
    setActiveTab,

    filteredPatients: patients,
    selectedPatient,

    loading,
    error,
  };
};