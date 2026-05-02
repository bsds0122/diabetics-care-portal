import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Wind, Cigarette, Activity } from "lucide-react";

export const LifestyleSection = ({ form, setForm }) => {
  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const SelectField = ({
    label,
    icon,
    value,
    field,
    placeholder,
    children,
  }) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-foreground/90 flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </span>
        {label}
      </Label>

      <Select value={value} onValueChange={(v) => updateField(field, v)}>
        <SelectTrigger
          className="h-12 rounded-xl border-border/60 bg-background shadow-sm
                     hover:border-primary/40 focus:ring-2
                     focus:ring-primary/20 transition-all duration-200"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>{children}</SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="space-y-6">
     

      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Smoking */}
        <SelectField
          label="Smoking History"
          icon={<Cigarette className="w-4 h-4" />}
          value={form.smokingStatus}
          field="smokingStatus"
          placeholder="Select smoking status"
        >
          <SelectItem value="Never">Never</SelectItem>
          <SelectItem value="Former">Former</SelectItem>
          <SelectItem value="Current">Current</SelectItem>
        </SelectField>

        {/* Activity */}
        <SelectField
          label="Physical Activity"
          icon={<Activity className="w-4 h-4" />}
          value={form.physicalActivity}
          field="physicalActivity"
          placeholder="Select activity level"
        >
          <SelectItem value="Low">Low</SelectItem>
          <SelectItem value="Moderate">Moderate</SelectItem>
          <SelectItem value="High">High</SelectItem>
        </SelectField>
      </div>
    </div>
  );
};