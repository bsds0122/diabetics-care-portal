import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// Modular Components
import { ProfileHeader } from "@/pages/patient/components/profile/header/ProfileHeader";
import { PersonalInfoSection } from "./components/profile/personal/PersonalInfoSection";
import { LocationSection } from "./components/profile/location/LocationSection";
import { ProfileFormData } from "./components/profile/types";

const initialData: ProfileFormData = {
  firstName: "John",
  lastName: "Kamwendo",
  district: "Lilongwe",
  traditionalAuthority: "T/A Tsabango",
  phone: "+265 999 123 456",
  gender: "Male",
  age: "38",
  email: "john.kamwendo@example.com",
  street: "Area 47, Sector 2",
  bloodType: "O+",
  condition: "Type 2 Diabetes",
  lastCheckup: "2024-03-15"
};

export default function PatientProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setProfileImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto pb-20 space-y-8 animate-in fade-in duration-500">
      
      {/* MAIN PROFILE CARD */}
      <Card className="rounded-3xl border-none shadow-2xl overflow-hidden  bg-card/20 backdrop-blur-xl ">
        
        <ProfileHeader 
          formData={formData}
          isEditing={isEditing}
          profileImage={profileImage}
          setIsEditing={setIsEditing}
          handleImageUpload={handleImageUpload}
          handleSave={handleSave}
        />

        <CardContent className="px-6 sm:px-12 relative z-10 pb-12">
          <div className="space-y-8 max-w-4xl">
            <PersonalInfoSection 
              formData={formData}
              isEditing={isEditing}
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
            />

            <Separator className="opacity-50" />

            <LocationSection 
              formData={formData}
              isEditing={isEditing}
              handleInputChange={handleInputChange}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
