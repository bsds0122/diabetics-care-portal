import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export const MedicalCheckupBody = () => {
  return (
    <div className="p-6 space-y-7">

      {/* Patient ID */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground/90">
          Patient ID
        </Label>

        <Input
          placeholder="e.g. P001"
          className="h-12 rounded-xl border-border/60 bg-background shadow-sm
                     hover:border-primary/40 focus-visible:ring-2
                     focus-visible:ring-primary/20 transition-all duration-200"
        />
      </div>

      {/* Type of Checkup */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground/90">
          Type of Checkup
        </Label>

        <Select>
          <SelectTrigger
            className="h-12 rounded-xl border-border/60 bg-background shadow-sm
                       hover:border-primary/40 focus:ring-2
                       focus:ring-primary/20 transition-all duration-200"
          >
            <SelectValue placeholder="Select checkup type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="routine">Routine Checkup</SelectItem>
            <SelectItem value="diabetes">Diabetes Review</SelectItem>
            <SelectItem value="bp">Blood Pressure Follow-up</SelectItem>
            <SelectItem value="emergency">Emergency Review</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Date */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground/90">
          Date of Visit
        </Label>

        <Input
          type="date"
          className="h-12 rounded-xl border-border/60 bg-background shadow-sm
                     hover:border-primary/40 focus-visible:ring-2
                     focus-visible:ring-primary/20 transition-all duration-200"
        />
      </div>

    </div>
  );
};