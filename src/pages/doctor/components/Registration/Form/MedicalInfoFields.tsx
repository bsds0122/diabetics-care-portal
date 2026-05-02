import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, ActivitySquare, UserRound } from "lucide-react";
import { RegistrationForm as FormType } from "@/hooks/doctor";

interface MedicalInfoFieldsProps {
  form: FormType;
  updateForm: (updates: Partial<FormType>) => void;
}

export const MedicalInfoFields: React.FC<MedicalInfoFieldsProps> = ({
  form,
  updateForm,
}) => {
  return (
    <div className="space-y-7 border-t border-border/40 pt-6">

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Diagnosis Date */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground/90">
            Date of Diagnosis
          </Label>

          <Input
            type="date"
            value={form.diagnosisDate}
            onChange={(e) => updateForm({ diagnosisDate: e.target.value })}
            className="
                       h-12 rounded-xl border-border/60 bg-background shadow-sm
                       hover:border-primary/40 focus-visible:ring-2
                       focus-visible:ring-primary/20 transition-all duration-200
                       pr-10
                       date-blue-icon
                     "
          />
        </div>

        {/* Diabetes Type */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground/90">
            Diabetes Type
          </Label>

          <Select
            value={form.diabeticType}
            onValueChange={(v) => updateForm({ diabeticType: v })}
          >
            <SelectTrigger
              className="h-12 rounded-xl border-border/60 bg-background shadow-sm
                         hover:border-primary/40 focus:ring-2
                         focus:ring-primary/20 transition-all duration-200"
            >
              <SelectValue placeholder="Select diabetes type" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Type 1">Type 1 Diabetes</SelectItem>
              <SelectItem value="Type 2">Type 2 Diabetes</SelectItem>
              <SelectItem value="Gestational">Gestational Diabetes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground/90 flex items-center gap-2">
           
           
           
            <UserRound className="w-4 h-4 " />
            Gender
          </Label>

          <Select
            value={form.gender}
            onValueChange={(v) => updateForm({ gender: v })}
          >
            <SelectTrigger
              className="h-12 rounded-xl border-border/60 bg-background shadow-sm
                         hover:border-primary/40 focus:ring-2
                         focus:ring-primary/20 transition-all duration-200"
            >
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Age */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground/90 flex items-center gap-2">
            <ActivitySquare className="w-4 h-4" />
            Age (years)
          </Label>

          <Input
            type="number"
            value={form.age}
            onChange={(e) => updateForm({ age: e.target.value })}
            placeholder="Enter age"
            className="h-12 rounded-xl border-border/60 bg-background shadow-sm
                       hover:border-primary/40 focus-visible:ring-2
                       focus-visible:ring-primary/20 transition-all duration-200"
          />
        </div>

      </div>
    </div>
  );
};