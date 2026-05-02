import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserSearch } from "lucide-react";

export const PatientIdentifier = ({ patientId, setForm }) => {
  const updateField = (value) => {
    setForm((prev) => ({
      ...prev,
      patientId: value,
    }));
  };

  return (
    <div className="space-y-3">
      {/* Label */}
      <Label className="text-sm font-medium text-foreground/90 flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          <UserSearch className="w-4 h-4" />
        </span>
        Patient ID
      </Label>

      {/* Input */}
      <Input
        value={patientId}
        onChange={(e) => updateField(e.target.value)}
        placeholder="Enter Patient ID"
        className="h-12 rounded-xl border-border/60 bg-background shadow-sm
                   hover:border-primary/40 focus-visible:ring-2
                   focus-visible:ring-primary/20 transition-all duration-200"
      />
    </div>
  );
};