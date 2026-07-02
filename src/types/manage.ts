import { Patient } from "./patient";

export interface PatientListProps {
  patients: Patient[];
  onEditClick: (patient: Patient) => void;
}

export interface EditPatientProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  patient: Patient | null;
  onSave: (updatedPatient: Patient) => void;
  loading?: boolean;
}
