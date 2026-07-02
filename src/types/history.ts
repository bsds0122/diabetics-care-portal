export interface HistoryData {
  patientId?: string;
  patientName?: string;
  age?: number | string;
  riskLevel?: string;
  predictedRisk?: string;
  diabetesType?: string;
  assessmentMonth?: string;
  explanation?: string;
  recommendation?: string;
  aiSummary?: string;
  [key: string]: unknown;
}

export interface HistorySummaryProps {
  patientName: string;
  age: number | string;
  riskLevel: string;
  predictedRisk: string;
  diabetesType: string;
  assessmentMonth: string;
}

export interface HistoryResultsProps {
  explanation?: string;
  recommendation?: string;
  loading: boolean;
}




export interface HistorySearchProps {
  patientId: string;
  setPatientId: (val: string) => void;

  day: string;
  setDay: (val: string) => void;

  month: string;
  setMonth: (val: string) => void;

  year: string;
  setYear: (val: string) => void;

  loading: boolean;
  onSearch: (e: React.FormEvent) => void;
}




// types/history.ts
export type FeatureImportance = {
  feature: string;
  effect: string;
  impact_percentage: number;
};

export type AssessmentHistoryItem = {
  risk_level: string;
  risk_percentage: number;
  feature_importance: FeatureImportance[];
};

export type AssessmentHistoryResponse = {
  status_code: number;
  status: string;
  details: string;
  data: AssessmentHistoryItem[];
};