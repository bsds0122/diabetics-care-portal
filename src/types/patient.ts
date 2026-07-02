export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  phone: string;
  nextOfKinNumber: string;
  traditionalAuthority: string;
  village: string;
  diabetesType: string;
  dateOfDiagnosis: string;
  sex: string;
  region?: string;
  district?: string;
}

export interface PatientDetailsProps {
  selected: Patient | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface PatientHeaderProps {
  selected: Patient | null;
}

export interface PatientTabsProps {
  selected: Patient | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface PatientPayload {
  first_name: string;
  last_name: string;
  sex: string;
  phone_number: string;
  date_of_birth: string;
  next_of_kin_number: string;
  date_of_diagnosis: string;
  diabetes_type: string;
  region: string;
  district: string;
  traditional_authority: string;
  village: string;
  profile_image: string | null;
}

export interface UpdatePatientPayload {
  first_name?: string;
  last_name?: string;
  sex?: string;
  phone_number?: string;
  next_of_kin_number?: string;
  diabetes_type?: string;
  district?: string;
  region?: string;
  traditional_authority?: string;
  village?: string;
  profile_image?: string;
  date_of_diagnosis?: string;
}

export interface PatientApiResponse extends Partial<PatientPayload> {
  id?: string | number;
  patient_id?: string | number;
}








