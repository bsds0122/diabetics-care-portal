import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const PersonalInfoFields = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="space-y-4">
      {/* Name Fields */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label>First Name</Label>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Label>Last Name</Label>
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Label>Phone</Label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};