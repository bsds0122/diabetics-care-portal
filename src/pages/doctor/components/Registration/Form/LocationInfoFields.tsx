import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { RegistrationForm as FormType } from "@/hooks/doctor";

/** REGIONS */
const regions = ["Northern", "Central", "Southern"];

/** DISTRICTS BY REGION */
const districtMap: Record<string, string[]> = {
  Northern: ["Mzimba", "Karonga", "Rumphi", "Nkhata Bay"],
  Central: ["Lilongwe", "Kasungu", "Dedza", "Nkhotakota"],
  Southern: ["Blantyre", "Zomba", "Mangochi", "Chikwawa"],
};

interface LocationInfoFieldsProps {
  form: FormType;
  updateForm: (updates: Partial<FormType>) => void;
}

export const LocationInfoFields: React.FC<LocationInfoFieldsProps> = ({
  form,
  updateForm,
}) => {
  const districts = form.region ? districtMap[form.region] : [];

  return (
    <div className="space-y-7 border-t border-border/40 pt-6">

      {/* Grid Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Region */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground/90">
            Region
          </Label>

          <Select
            value={form.region || ""}
            onValueChange={(v) => {
              updateForm({
                region: v,
                district: "", // reset district when region changes
              });
            }}
          >
            <SelectTrigger className="h-12 rounded-xl border-border/60 bg-background shadow-sm hover:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all duration-200">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>

            <SelectContent>
              {regions.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* District */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground/90">
            District
          </Label>

          <Select
            value={form.district || ""}
            onValueChange={(v) => updateForm({ district: v })}
            disabled={!form.region}
          >
            <SelectTrigger className="h-12 rounded-xl border-border/60 bg-background shadow-sm hover:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all duration-200">
              <SelectValue placeholder="Select district" />
            </SelectTrigger>

            <SelectContent>
              {districts.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      </div>
    </div>
  );
};