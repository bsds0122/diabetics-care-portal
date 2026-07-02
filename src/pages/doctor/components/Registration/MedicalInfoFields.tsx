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

import { FormType, MedicalInfoFieldsProps } from "@/types/registration";

export const MedicalInfoFields: React.FC<MedicalInfoFieldsProps> = ({
  form,
  updateForm,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      
      <div>
        <Label>Date of Diagnosis</Label>

        <Input
          type="date"
          value={form.diagnosisDate || ""}
          onChange={(e) =>
            updateForm({
              diagnosisDate: e.target.value,
            })
          }
        />
      </div>

      <div>
        <Label>Diabetes Type</Label>

        <Select
          value={form.diabeticType}
          onValueChange={(value) =>
            updateForm({
              diabeticType: value,
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select diabetes type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Type 1">
              Type 1 Diabetes
            </SelectItem>

            <SelectItem value="Type 2">
              Type 2 Diabetes
            </SelectItem>

            <SelectItem value="Gestational">
              Gestational Diabetes
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

    </div>
  );
};