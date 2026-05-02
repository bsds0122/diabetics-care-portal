import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, Phone, Mail } from "lucide-react";

import { ProfileUpload } from "./ProfileUpload";
import { RegistrationForm as FormType } from "@/hooks/doctor";

interface PersonalInfoFieldsProps {
  form: FormType;
  updateForm: (updates: Partial<FormType>) => void;
}

export const PersonalInfoFields: React.FC<PersonalInfoFieldsProps> = ({
  form,
  updateForm,
}) => {
  return (
    <div className="space-y-7">


      {/* PROFILE UPLOAD (now separated) */}
      <ProfileUpload
        image={form.profileImage}
        onChange={(image) => updateForm({ profileImage: image })}
      />

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="space-y-2">
          <Label>First Name</Label>
          <Input
            value={form.firstName || ""}
            onChange={(e) =>
              updateForm({ firstName: e.target.value })
            }
            placeholder="Enter first name"
          />
        </div>

        <div className="space-y-2">
          <Label>Last Name</Label>
          <Input
            value={form.lastName || ""}
            onChange={(e) =>
              updateForm({ lastName: e.target.value })
            }
            placeholder="Enter last name"
          />
        </div>

      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            Phone Number
          </Label>

          <Input
            value={form.phone || ""}
            onChange={(e) =>
              updateForm({ phone: e.target.value })
            }
            placeholder="+265 888 123 456"
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email Address
          </Label>

          <Input
            type="email"
            value={form.email || ""}
            onChange={(e) =>
              updateForm({ email: e.target.value })
            }
            placeholder="patient@example.com"
          />
        </div>

      </div>
    </div>
  );
};