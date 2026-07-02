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

import { ProfileUpload } from "./ProfileUpload";
import { FormType, PersonalInfoFieldsProps } from "@/types/registration";

export const PersonalInfoFields: React.FC<
  PersonalInfoFieldsProps
> = ({
  form,
  updateForm,
}) => {
  return (
    <div className="space-y-4">
      {/* Profile Image */}
      <ProfileUpload
        image={form.profileImage}
        onChange={(image) =>
          updateForm({
            profileImage: image,
          })
        }
      />

      {/* First Name & Last Name */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label>First Name</Label>

          <Input
            value={form.firstName || ""}
            onChange={(e) =>
              updateForm({
                firstName: e.target.value,
              })
            }
            placeholder="Enter first name"
          />
        </div>

        <div>
          <Label>Last Name</Label>

          <Input
            value={form.lastName || ""}
            onChange={(e) =>
              updateForm({
                lastName: e.target.value,
              })
            }
            placeholder="Enter last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label>Date of Birth</Label>

          <Input
            type="date"
            value={form.dateOfBirth || ""}
            onChange={(e) =>
              updateForm({
                dateOfBirth: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Sex</Label>

          <Select
            value={form.sex || ""}
            onValueChange={(value) =>
              updateForm({
                sex: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select sex" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

  
      {/* Phone & Next of Kin */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label>Phone Number</Label>

          <Input
            value={form.phone || ""}
            onChange={(e) =>
              updateForm({
                phone: e.target.value,
              })
            }
            placeholder="+265 888 123 456"
          />
        </div>

        <div>
          <Label>Next of Kin Number</Label>

          <Input
            value={form.nextOfKin || ""}
            onChange={(e) =>
              updateForm({
                nextOfKin: e.target.value,
              })
            }
            placeholder="+265 999 000 111"
          />
        </div>
      </div>
    </div>
  );
};