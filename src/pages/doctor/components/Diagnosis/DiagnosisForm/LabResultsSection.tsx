import { Input } from "@/components/ui/input";
import { Activity, Droplets, TestTube, Pill } from "lucide-react";

export const LabResultsSection = ({
  ogtt,
  hba1c,
  rbg,
  fbg,
  onInputChange,
}) => {
  const updateValue = (field, value) => {
    const num = Number(value);
    if (value === "") {
      onInputChange(field, "");
      return;
    }

    if (!isNaN(num)) {
      onInputChange(field, String(num));
    }
  };

  const Field = ({
    label,
    icon,
    value,
    field,
    placeholder = "0.0",
    unit,
  }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium flex items-center gap-2 text-foreground/90">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
          {icon}
        </span>
        {label}
      </label>

      <div className="relative group">
        <Input
          type="number"
          value={value}
          onChange={(e) => updateValue(field, e.target.value)}
          placeholder={placeholder}
          className="h-12 pr-14 rounded-xl border-border/60 bg-background shadow-sm 
                     hover:border-primary/40 focus-visible:ring-2 
                     focus-visible:ring-primary/20 transition-all duration-200"
        />

        {unit && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground">
            {unit}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 pt-6">
     
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Oral Glucose Tolerance Test"
          icon={<TestTube className="w-4 h-4" />}
          value={ogtt}
          field="ogtt"
          placeholder="Enter OGTT value"
          unit="mg/dL"
        />

        <Field
          label="Glycated Hemoglobin"
          icon={<Activity className="w-4 h-4" />}
          value={hba1c}
          field="hba1c"
          placeholder="Enter HbA1c value"
          unit="%"
        />

        <Field
          label="Random Blood Glucose"
          icon={<Droplets className="w-4 h-4" />}
          value={rbg}
          field="rbg"
          placeholder="Enter random glucose"
          unit="mg/dL"
        />

        <Field
          label="Fasting Blood Glucose"
          icon={<Pill className="w-4 h-4" />}
          value={fbg}
          field="fbg"
          placeholder="Enter fasting glucose"
          unit="mg/dL"
        />
      </div>
    </div>
  );
};