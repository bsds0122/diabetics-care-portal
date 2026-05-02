import { useMemo, useState } from "react";
import { dosages } from "./data";

export function useDosageFilter() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const filtered = useMemo(() => {
    return dosages.filter((item) => {
      const date = new Date(item.dateIssued);

      const matchYear = year
        ? date.getFullYear().toString() === year
        : true;

      const matchMonth = month
        ? (date.getMonth() + 1).toString().padStart(2, "0") === month
        : true;

      const matchDay = day
        ? date.getDate().toString().padStart(2, "0") === day
        : true;

      return matchYear && matchMonth && matchDay;
    });
  }, [year, month, day]);

  return {
    year,
    month,
    day,
    setYear,
    setMonth,
    setDay,
    filtered,
  };
}