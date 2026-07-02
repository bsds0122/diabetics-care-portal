
export interface AssessmentFormType {
  patientId: string;

  // Assessment Date
  assessmentDay: number | "";
  assessmentMonth: number | "";
  assessmentYear: number | "";

  // DEMOGRAPHICS (FIXED)
  sex: number | "";
  age: number | "";

  // Clinical Vitals
  weight: number | "";
  height: number | "";
  heartRate: number | "";
  systolicBP: number | "";
  diastolicBP: number | "";
  cigsPerDay: number | "";

  // Laboratory Results
  fastingBloodGlucose: number | "";
  ldlCholesterol: number | "";
  hdlCholesterol: number | "";
  triglycerides: number | "";
}

export interface AssessmentResult {
  message?: string;
  prediction?: string;
  risk_score?: number;
  [key: string]: unknown;
}

export interface AssessmentExcelUploadProps {
  onUpload: (file: File) => void;
  loading?: boolean;
}


export interface AssessmentFormProps {
  form: AssessmentFormType;
  setForm: React.Dispatch<React.SetStateAction<AssessmentFormType>>;
  handleAssess: (e: React.FormEvent) => Promise<void>;
  handleFileUpload: (file: File) => void;
  loading: boolean;
  error?: string | null;
  success?: string | null;
}

export interface ClinicalVitalsSectionProps {
  form: AssessmentFormType;
  setForm: React.Dispatch<React.SetStateAction<AssessmentFormType>>;
}

export interface FormActionsProps {
  onUpload: (file: File) => void;
  disabled: boolean;
  loading: boolean;
}






export interface AssessmentResultData {
  patient_id: number;
  risk_score: number;
  risk_percentage: number;
  risk_category: string;
  explanation: string[];
  recommendations: string[];
}

export interface AssessmentApiResponse {
  status_code: number;
  status: string;
  details: string;
  data: AssessmentResultData;
}


export interface FeatureImportance {
  feature: string;
  effect: "Increase Risk" | "Decrease Risk";
  impact_percentage: number;
}

export interface AssessmentResultData {
  risk_level: string;
  risk_percentage: number;
  feature_importance: FeatureImportance[];
}







export interface FeatureImportance {
  feature: string;
  effect: "Increase Risk" | "Decrease Risk";
  impact_percentage: number;
}

export interface AssessmentResultData {
  risk_level: string;
  risk_percentage: number;
  feature_importance: FeatureImportance[];
}

export interface AssessmentApiResponse {
  status_code: number;
  status: string;
  details: string;
  data: AssessmentResultData;
}