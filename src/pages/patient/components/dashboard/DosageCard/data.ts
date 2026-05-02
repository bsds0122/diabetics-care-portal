import { DosageItem } from "./dosage";

export const dosages: DosageItem[] = [
  {
    drug: "Metformin",
    schedule: { morning: 2, afternoon: 1, evening: 2 },
    total: 30,
    instruction: "Take after meal",
    dateIssued: "2026-04-10",
    status: "hospital",
  },
  {
    drug: "Lisinopril",
    schedule: { morning: 1, afternoon: 0, evening: 1 },
    total: 30,
    instruction: "Take after meal",
    dateIssued: "2026-04-12",
    status: "pharmacy",
  },
  {
    drug: "Atorvastatin",
    schedule: { morning: 0, afternoon: 0, evening: 1 },
    total: 30,
    instruction: "Take before sleep",
    dateIssued: "2026-04-15",
    status: "hospital",
  },
];