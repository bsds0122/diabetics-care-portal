import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase } from "lucide-react";

export const ProfessionalInfoFields = ({
  isEditing,
  formData,
  handleInputChange,
}) => {
  const DisplayField = ({ value }) => (
    <div className="px-3 py-2 rounded-xl border border-border/50 bg-muted/20 text-sm text-foreground/90">
      {value || <span className="text-muted-foreground">—</span>}
    </div>
  );

  const Field = ({ label, name, type = "text" }) => (
    <div className="space-y-2">
      <Label className="text-xs font-medium text-muted-foreground">
        {label}
      </Label>

      {isEditing ? (
        <Input
          name={name}
          type={type}
          value={formData[name]}
          onChange={handleInputChange}
          className="h-11 rounded-xl border-border/60 bg-background shadow-sm
                     hover:border-primary/40 focus-visible:ring-2
                     focus-visible:ring-primary/20 transition-all"
        />
      ) : (
        <DisplayField value={formData[name]} />
      )}
    </div>
  );

  return (
    <div className="space-y-5">

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <Field label="Specialization" name="specialization" />

        <Field label="Experience (Years)" name="experience" type="number" />

        <Field label="Hospital" name="hospital" />

        <Field label="License Number" name="licenseNumber" />

      </div>
    </div>
  );
};