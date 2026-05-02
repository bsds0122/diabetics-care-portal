import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone, Calendar, Contact } from "lucide-react";
import { Section } from "@/pages/patient/components/profile/location/Section";
import { InfoField } from "@/pages/patient/components/profile/location/InfoField";
import { ProfileFormData } from "@/pages/patient/components/profile/types";

interface PersonalInfoSectionProps {
  formData: ProfileFormData;
  isEditing: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

export function PersonalInfoSection({
  formData,
  isEditing,
  handleInputChange,
  handleSelectChange,
}: PersonalInfoSectionProps) {
  return (
    <Section title="General Information" icon={<Contact className="w-5 h-5" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <InfoField 
          id="firstName"
          label="First Name" 
          value={formData.firstName} 
          isEditing={isEditing}
          icon={<User className="w-4 h-4" />}
        >
          <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="h-11 bg-muted/30" />
        </InfoField>

        <InfoField 
          id="lastName"
          label="Last Name" 
          value={formData.lastName} 
          isEditing={isEditing}
          icon={<User className="w-4 h-4" />}
        >
          <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="h-11 bg-muted/30" />
        </InfoField>

        <InfoField 
          id="email"
          label="Email Address" 
          value={formData.email} 
          isEditing={isEditing}
          icon={<Mail className="w-4 h-4" />}
        >
          <Input id="email" name="email" value={formData.email} onChange={handleInputChange} className="h-11 bg-muted/30" />
        </InfoField>

        <InfoField 
          id="phone"
          label="Phone Number" 
          value={formData.phone} 
          isEditing={isEditing}
          icon={<Phone className="w-4 h-4" />}
        >
          <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="h-11 bg-muted/30" />
        </InfoField>

        <InfoField 
          id="age"
          label="Age" 
          value={formData.age} 
          isEditing={isEditing}
          icon={<Calendar className="w-4 h-4" />}
        >
          <Input id="age" name="age" value={formData.age} onChange={handleInputChange} className="h-11 bg-muted/30" />
        </InfoField>

        <InfoField 
          id="gender"
          label="Gender" 
          value={formData.gender} 
          isEditing={isEditing}
          icon={<User className="w-4 h-4" />}
        >
          <Select value={formData.gender} onValueChange={(v) => handleSelectChange("gender", v)}>
            <SelectTrigger id="gender" className="h-11 bg-muted/30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
        </InfoField>
      </div>
    </Section>
  );
}
