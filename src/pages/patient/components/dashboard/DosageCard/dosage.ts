export type DosageSchedule = {
    morning: number;
    afternoon: number;
    evening: number;
  };
  
  export type DosageStatus = "pharmacy" | "hospital";
  
  export interface DosageItem {
    drug: string;
    schedule: DosageSchedule;
    total: number;
    instruction: string;
    dateIssued: string;
    status: DosageStatus;
  }