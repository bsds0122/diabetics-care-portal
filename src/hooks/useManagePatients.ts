import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { managePatientService } from "@/services/management";
import { useSearchStore } from "@/store/useSearchStore";

export const useManagePatients = () => {
  const { searchQuery } = useSearchStore();

  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [isEditOpen, setIsEditOpen] = useState(false);

  const [selectedPatientId, setSelectedPatientId] =
    useState<number | null>(null);

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      sex: "",
      phone: "",
      nextOfKinNumber: "",
      diabetesType: "",
      dateOfDiagnosis: "",
      region: "",
      district: "",
      traditionalAuthority: "",
      village: "",
      avatar: "",
    },
  });

  // =====================================================
  // LOAD PATIENTS
  // =====================================================

  const loadPatients = async () => {
    try {
      setLoading(true);

      const response =
        await managePatientService.getPatients();

      const transformed = response.data.map(
        (patient) => ({
          patient_id: patient.patient_id,
          firstName: patient.first_name,
          lastName: patient.last_name,
          avatar: patient.patient_image,
        })
      );

      setPatients(transformed);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // SEARCH PATIENTS
  // =====================================================

  const searchPatients = async (name: string) => {
    try {
      setLoading(true);

      const response =
        await managePatientService.searchPatients(
          name
        );

      const transformed = response.data.map(
        (patient) => ({
          patient_id: patient.patient_id,
          firstName: patient.first_name,
          lastName: patient.last_name,
          avatar: patient.patient_image,
        })
      );

      setPatients(transformed);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // LOAD OR SEARCH
  // =====================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery?.trim()) {
        searchPatients(searchQuery);
      } else {
        loadPatients();
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // =====================================================
  // EDIT PATIENT
  // =====================================================

  const handleEditClick = async (
    patient
  ) => {
    try {
      setLoading(true);

      const response =
        await managePatientService.getPatientById(
          patient.patient_id
        );

      const data = response.data;

      setSelectedPatientId(data.patient_id);

      form.reset({
        firstName: data.first_name || "",
        lastName: data.last_name || "",
        sex: data.sex || "",
        phone: data.phone_number || "",
        nextOfKinNumber:
          data.next_of_kin_number || "",
        diabetesType:
          data.diabetes_type || "",
        dateOfDiagnosis:
          data.date_of_diagnosis || "",
        region: data.region || "",
        district: data.district || "",
        traditionalAuthority:
          data.traditional_authority || "",
        village: data.village || "",
        avatar: data.patient_image || "",
      });

      setIsEditOpen(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // SAVE PATIENT
  // =====================================================
  const handleSave = async (values) => {
    try {
      if (!selectedPatientId) return;
  
      setLoading(true);
      setSuccess(null);
      setError(null);
  
      await managePatientService.updatePatient(
        selectedPatientId,
        {
          first_name: values.firstName,
          last_name: values.lastName,
          sex: values.sex,
          phone_number: values.phone,
          next_of_kin_number: values.nextOfKinNumber,
          date_of_diagnosis: values.dateOfDiagnosis,
          diabetes_type: values.diabetesType,
          region: values.region,
          district: values.district,
          traditional_authority: values.traditionalAuthority,
          village: values.village,
          profile_image: values.avatar,
        }
      );
  
      setSuccess("Patient updated successfully");
  
      setIsEditOpen(false);
  
      if (searchQuery?.trim()) {
        await searchPatients(searchQuery);
      } else {
        await loadPatients();
      }
  
      // auto hide
      setTimeout(() => setSuccess(null), 3000);
  
    } catch (error) {
      console.error(error);
  
      setError(
        error?.response?.data?.detail ||
        "Failed to update patient"
      );
  
      setTimeout(() => setError(null), 3000);
  
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // IMAGE
  // =====================================================

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      form.setValue(
        "avatar",
        reader.result as string
      );
    };

    reader.readAsDataURL(file);
  };


  return {
    patients,
    loading,
  
    isEditOpen,
    setIsEditOpen,
  
    form,
  
    handleEditClick,
    handleSave,
    handleImageUpload,
  
    success,
    error,
  };
};