import { useState } from "react";
import { useHistory } from "@/hooks/useHistory";
import { HistorySearch } from "./components/History/HistorySearch";

import { HistoryResults } from "./components/History/HistoryResults";
import { HistorySkeleton } from "./components/History/HistorySkeleton";


export default function CardiovascularRiskResults() {
  const [patientId, setPatientId] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(new Date().getFullYear().toString());

  const { loading, history, fetchAssessmentHistory } = useHistory();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    fetchAssessmentHistory(
      patientId,
      year,
      month,
      day
    );
  };

  const assessments = history || [];

  return (
    <div className="w-full space-y-8 p-6">

      <HistorySearch
        patientId={patientId}
        setPatientId={setPatientId}
        day={day}
        setDay={setDay}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        loading={loading}
        onSearch={handleSearch}
      />

      {loading ? (
        <HistorySkeleton />
      ) : assessments.length > 0 ? (
        <HistoryResults assessments={assessments} />
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-4xl mb-3">📊</div>
          <p className="text-muted-foreground font-medium">
            No assessment history available
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Search by patient ID, day, month, and year
          </p>
        </div>
      )}
    </div>
  );
}