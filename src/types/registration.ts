export type FormType = {
  profileImage?: string | File | null;
  firstName?: string;
  lastName?: string;
  phone?: string;
  dateOfBirth?: string;
  sex?: string;
  nextOfKin?: string;
  diagnosisDate?: string;
  diabeticType?: string;
  region?: string;
  district?: string;
  ta?: string;
  village?: string;
};

export interface RegistrationFormProps {
  form: FormType;
  updateForm: (updates: Partial<FormType>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleFileUpload: (file: File) => void;
  loading?: boolean;
  error?: string | null;
  // 🔥 ADD THIS
  success?: string | null;
}

export interface ExcelUploadButtonProps {
  onUpload: (file: File) => void;
  loading?: boolean;
}

export interface FormSubmitButtonProps {
  label?: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

export interface ProfileUploadProps {
  image?: string | File | null;
  onChange: (file: File) => void;
}

export interface PersonalInfoFieldsProps {
  form: FormType;
  updateForm: (updates: Partial<FormType>) => void;
}

export interface MedicalInfoFieldsProps {
  form: FormType;
  updateForm: (updates: Partial<FormType>) => void;
}

export interface LocationInfoFieldsProps {
  form: FormType;
  updateForm: (updates: Partial<FormType>) => void;
}






export interface PatientRegistrationResult {
  statusCode: number;
  message: string;
  data: null;
}
