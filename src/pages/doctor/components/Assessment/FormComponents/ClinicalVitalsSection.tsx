import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Activity, Gauge } from "lucide-react";

export const ClinicalVitalsSection = ({ form, setForm }) => {

  const updateField = (field, value) => {
    const numericValue = value === "" ? "" : Number(value);

    setForm((prev) => ({
      ...prev,
      [field]: numericValue,
    }));
  };

  const InputField = ({
    label,
    icon,
    value,
    field,
    placeholder,
    unit = "",
    min,
    max,
  }) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-foreground/90 flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </span>
        {label}
      </Label>

      <div className="relative">
        <Input
          type="number"
          value={value ?? ""}
          min={min}
          max={max}
          onChange={(e) => updateField(field, e.target.value)}
          placeholder={placeholder}
          className="h-12 rounded-xl border-border/60 bg-background shadow-sm pr-14
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
    <div className="space-y-6">


      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <InputField
          label="Systolic Blood Pressure"
          icon={<Gauge className="w-4 h-4" />}
          value={form.systolicBP}
          field="systolicBP"
          placeholder="e.g. 120"
          unit="mmHg"
          min={50}
          max={250}
        />

        <InputField
          label="Diastolic Blood Pressure"
          icon={<Gauge className="w-4 h-4" />}
          value={form.diastolicBP}
          field="diastolicBP"
          placeholder="e.g. 80"
          unit="mmHg"
          min={30}
          max={150}
        />

        <div className="md:col-span-2">
          <InputField
            label="Fasting Blood Glucose"
            icon={<Activity className="w-4 h-4" />}
            value={form.sugarLevel}
            field="sugarLevel"
            placeholder="e.g. 5.5"
            unit="mmol/L"
            min={1}
            max={30}
          />
        </div>

      </div>
    </div>
  );
};