// data.ts
import { CheckupItem, AdviceItem } from "./types";

export const checkups: CheckupItem[] = [
  {
    date: "Monday, May 15, 2026",
    doctor: "Dr. M. Banda",
    clinic: "Cardiology Unit",
    status: "Scheduled",
  },
  {
    date: "Tuesday, June 20, 2026",
    doctor: "Dr. A. Phiri",
    clinic: "Diabetes Clinic",
    status: "Scheduled",
  },
];

export const advices: AdviceItem[] = [
  {
    id: 1,
    text: "Maintain a low-carb diet to stabilize blood glucose levels.",
  },
  {
    id: 2,
    text: "Walk for at least 30 minutes daily to improve insulin sensitivity.",
  },
  {
    id: 3,
    text: "Monitor blood sugar every morning before breakfast.",
  },
  {
    id: 4,
    text: "Avoid sugary drinks and stay hydrated.",
  },
];