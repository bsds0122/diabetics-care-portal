// types.ts
export interface HealthMetric {
    measurement: string;
    value: string;
    status: string;
  }
  
  export interface HealthTableProps {
    items?: HealthMetric[];
  }