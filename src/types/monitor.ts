
export interface MonitorLineConfig {
  key: string;
  color: string;
  name: string;
}

export interface MonitorData {
  month: string;
  systolic?: number;
  diastolic?: number;
  sugar?: number;
  [key: string]: string | number | undefined;
}

export interface TrendChartCardProps {
  title: string;
  data: MonitorData[];
  lines: MonitorLineConfig[];
  height?: number;
}

export interface MonitorChartsProps {
  loading: boolean;
  chartData: MonitorData[];
}

export interface MonitorFiltersProps {
  loading: boolean;
  patientId: string;
  setPatientId: (id: string) => void;
  period: string;
  setPeriod: (period: string) => void;
  onRefresh: () => void;
}


export interface YearlyMonitoringApiItem {
  month: number;
  number_of_visits: number;
  average_systolic_bp: number;
  average_diastolic_bp: number;
  average_glucose: number; // ✅ FIXED
}

export interface MonitorChartPoint {
  month: string;
  systolic: number;
  diastolic: number;
  sugar: number;
  visits: number;
}




