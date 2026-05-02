import React from "react";
import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { actionBtnClass } from "@/pages/doctor/components/Profile/form-actions/styles";

export const RegistrationForm = ({
  formData,
  handleChange,
  handleImageUpload,
  handleSubmit,
}) => {
  return (
    <div className="w-full h-full p-6 bg-card/20 backdrop-blur-xl rounded-2xl shadow-lg border border-border">

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* PROFILE IMAGE */}
        <div className="flex items-center gap-6">
          <label className="relative cursor-pointer">
            <div className="w-24 h-24 rounded-full border border-border flex items-center justify-center bg-muted overflow-hidden">
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Upload className="w-6 h-6 text-primary" />
              )}
            </div>
            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>

          <div>
            <p className="font-medium">Profile Image</p>
            <p className="text-sm text-primary">
              Click to upload staff photo
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <Label>Full Name</Label>
            <Input
              className="bg-card"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              className="bg-card"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div>
            <Label>Phone Number</Label>
            <Input
              className="bg-card"
              placeholder="+265 888 123 456"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          {/* 🔥 PROFESSION SELECT */}
          <div>
            <Label>Profession</Label>
            <Select onValueChange={(value) => handleChange("role", value)}>
              <SelectTrigger className="bg-card border border-border text-foreground">
                <SelectValue placeholder="Select profession" />
              </SelectTrigger>
              <SelectContent className="bg-card border border-border">
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="nurse">Nurse</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Medical License Number</Label>
            <Input
              className="bg-card"
              placeholder="Enter license number"
              value={formData.license}
              onChange={(e) => handleChange("license", e.target.value)}
            />
          </div>

          {/* 🔥 SPECIALTY SELECT */}
          <div>
            <Label>Specialty</Label>
            <Select onValueChange={(value) => handleChange("specialty", value)}>
              <SelectTrigger className="bg-card border border-border text-foreground">
                <SelectValue placeholder="Select specialty" />
              </SelectTrigger>
              <SelectContent className="bg-card border border-border">
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="endocrinology">Endocrinology</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Years of Experience</Label>
            <Input
              className="bg-card"
              type="number"
              placeholder="e.g. 5"
              value={formData.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
            />
          </div>

          <div>
            <Label>Hospital / Clinic Name</Label>
            <Input
              className="bg-card"
              placeholder="Enter hospital name"
              value={formData.hospital}
              onChange={(e) => handleChange("hospital", e.target.value)}
            />
          </div>

        </div>

        {/* SUBMIT */}
        <div className="flex justify-end pt-4 border-t border-border">
          <Button type="submit" className={actionBtnClass}>
            Register doctor
          </Button>
        </div>

      </form>
    </div>
  );
};