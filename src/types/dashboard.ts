export interface RiskLevelStat {
  level: string;
  count: number;
  percentage: string;
}

export interface DashboardData {
  greeting: string;
  doctor_name: string;

  patientOverviewStats: {
    title: string;
    value: number;
    type: string;
  }[];

  diabetesTypeStats: {
    type: string;
    male: number;
    female: number;
    percentage: string;
  }[];

  riskLevelStats: RiskLevelStat[];

  totalAssessments: number;
}

export interface DashboardResult {
  statusCode: number;
  message: string;
  data: DashboardData;
}