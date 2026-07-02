import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ProfessionalInfoFields = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label>Specialization</Label>
          <Input
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Label>Experience (Years)</Label>
          <Input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Label>Hospital</Label>
          <Input
            name="hospital"
            value={formData.hospital}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Label>License Number</Label>
          <Input
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};