import { Input } from "@/components/ui/input";
import { UserCircle2 } from "lucide-react";

export const PatientInfoSection = ({
  patientId,
  onInputChange,
}) => {
  return (
    <div className="space-y-6">

      {/* ID Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/90">
          Patient ID
        </label>

        <div className="relative group">
          <UserCircle2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />

          <Input
            value={patientId}
            onChange={(e) => onInputChange("patientId", e.target.value)}
            placeholder="Enter patient ID"
            className="h-12 pl-11 rounded-xl border-border/60 bg-background shadow-sm
                       hover:border-primary/40 focus-visible:ring-2
                       focus-visible:ring-primary/20 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};