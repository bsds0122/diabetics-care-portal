import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AssessmentFormType } from "@/types/assessment";

interface ClinicalVitalsSectionProps {
  form: AssessmentFormType;
  setForm: React.Dispatch<React.SetStateAction<AssessmentFormType>>;
}

export const ClinicalVitalsSection: React.FC<ClinicalVitalsSectionProps> = ({
  form,
  setForm,
}) => {
  const updateField = (field: keyof AssessmentFormType, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value === "" ? "" : Number(value),
    }));
  };

  const inputClass =
    "w-full rounded-md border p-2 " +
    "bg-white text-black border-gray-300 " +
    "dark:bg-gray-900 dark:text-white dark:border-gray-700 " +
    "placeholder:text-gray-400 dark:placeholder:text-gray-500 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="space-y-10 w-full">

      {/* ================= ASSESSMENT INFORMATION ================= */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground">
          Assessment Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <Label>Patient ID</Label>
            <Input
              type="number"
              min={1}
              className={inputClass}
              value={form.patientId ?? ""}
              onChange={(e) => updateField("patientId", e.target.value)}
              placeholder="e.g. 1"
            />
          </div>

          <div>
            <Label>Assessment Day</Label>
            <Input
              type="number"
              min={1}
              max={31}
              className={inputClass}
              value={form.assessmentDay ?? ""}
              onChange={(e) => updateField("assessmentDay", e.target.value)}
              placeholder="1–31"
            />
          </div>

          <div>
            <Label>Assessment Month</Label>
            <Input
              type="number"
              min={1}
              max={12}
              className={inputClass}
              value={form.assessmentMonth ?? ""}
              onChange={(e) => updateField("assessmentMonth", e.target.value)}
              placeholder="1–12"
            />
          </div>

          <div>
            <Label>Assessment Year</Label>
            <Input
              type="number"
              min={2000}
              max={2100}
              className={inputClass}
              value={form.assessmentYear ?? ""}
              onChange={(e) => updateField("assessmentYear", e.target.value)}
              placeholder="2000–2100"
            />
          </div>

          <div>
            <Label>Sex</Label>
            <Input
              type="number"
              min={0}
              max={1}
              className={inputClass}
              value={form.sex ?? ""}
              onChange={(e) => updateField("sex", e.target.value)}
              placeholder="0 = Female, 1 = Male"
            />
          </div>

          <div>
            <Label>Age</Label>
            <Input
              type="number"
              min={1}
              max={120}
              className={inputClass}
              value={form.age ?? ""}
              onChange={(e) => updateField("age", e.target.value)}
              placeholder="1–120 years"
            />
          </div>
        </div>
      </div>

      {/* ================= CLINICAL VITALS ================= */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground">
          Clinical Vitals
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div>
            <Label>Weight (kg)</Label>
            <Input
              type="number"
              min={20}
              max={300}
              className={inputClass}
              value={form.weight ?? ""}
              onChange={(e) => updateField("weight", e.target.value)}
              placeholder="20–300 kg"
            />
          </div>

          <div>
            <Label>Height (cm)</Label>
            <Input
              type="number"
              min={50}
              max={250}
              className={inputClass}
              value={form.height ?? ""}
              onChange={(e) => updateField("height", e.target.value)}
              placeholder="50–250 cm"
            />
          </div>

          <div>
            <Label>Heart Rate (bpm)</Label>
            <Input
              type="number"
              min={30}
              max={220}
              className={inputClass}
              value={form.heartRate ?? ""}
              onChange={(e) => updateField("heartRate", e.target.value)}
              placeholder="30–220 bpm"
            />
          </div>

          <div>
            <Label>Systolic BP</Label>
            <Input
              type="number"
              min={70}
              max={250}
              className={inputClass}
              value={form.systolicBP ?? ""}
              onChange={(e) => updateField("systolicBP", e.target.value)}
              placeholder="70–250 mmHg"
            />
          </div>

          <div>
            <Label>Diastolic BP</Label>
            <Input
              type="number"
              min={40}
              max={150}
              className={inputClass}
              value={form.diastolicBP ?? ""}
              onChange={(e) => updateField("diastolicBP", e.target.value)}
              placeholder="40–150 mmHg"
            />
          </div>

          <div>
            <Label>Cigarettes Per Day</Label>
            <Input
              type="number"
              min={0}
              max={100}
              className={inputClass}
              value={form.cigsPerDay ?? ""}
              onChange={(e) => updateField("cigsPerDay", e.target.value)}
              placeholder="0–100"
            />
          </div>
        </div>
      </div>

      {/* ================= LABORATORY RESULTS ================= */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground">
          Laboratory Results
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <div>
            <Label>Fasting Blood Glucose</Label>
            <Input
              type="number"
              step="0.1"
              min={2}
              max={40}
              className={inputClass}
              value={form.fastingBloodGlucose ?? ""}
              onChange={(e) =>
                updateField("fastingBloodGlucose", e.target.value)
              }
              placeholder="2.0–40.0 mmol/L"
            />
          </div>

          <div>
            <Label>LDL Cholesterol</Label>
            <Input
              type="number"
              min={20}
              max={400}
              className={inputClass}
              value={form.ldlCholesterol ?? ""}
              onChange={(e) => updateField("ldlCholesterol", e.target.value)}
              placeholder="20–400 mg/dL"
            />
          </div>

          <div>
            <Label>HDL Cholesterol</Label>
            <Input
              type="number"
              min={10}
              max={150}
              className={inputClass}
              value={form.hdlCholesterol ?? ""}
              onChange={(e) => updateField("hdlCholesterol", e.target.value)}
              placeholder="10–150 mg/dL"
            />
          </div>

          <div>
            <Label>Triglycerides</Label>
            <Input
              type="number"
              min={20}
              max={1000}
              className={inputClass}
              value={form.triglycerides ?? ""}
              onChange={(e) => updateField("triglycerides", e.target.value)}
              placeholder="20–1000 mg/dL"
            />
          </div>
        </div>
      </div>
    </div>
  );
};