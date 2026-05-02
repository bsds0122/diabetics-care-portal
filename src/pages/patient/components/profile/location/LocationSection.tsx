import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { Section } from "./Section";
import { InfoField } from "./InfoField";
import { ProfileFormData } from "../types";

interface LocationSectionProps {
  formData: ProfileFormData;
  isEditing: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LocationSection({
  formData,
  isEditing,
  handleInputChange,
}: LocationSectionProps) {
  return (
    <Section title="Address & Location" icon={<MapPin className="w-5 h-5" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <InfoField 
          id="district"
          label="District" 
          value={formData.district} 
          isEditing={isEditing}
        >
          <Input id="district" name="district" value={formData.district} onChange={handleInputChange} className="h-11 bg-muted/30" />
        </InfoField>

        <InfoField 
          id="traditionalAuthority"
          label="Traditional Authority" 
          value={formData.traditionalAuthority} 
          isEditing={isEditing}
        >
          <Input id="traditionalAuthority" name="traditionalAuthority" value={formData.traditionalAuthority} onChange={handleInputChange} className="h-11 bg-muted/30" />
        </InfoField>

        <InfoField 
          id="street"
          label="Village" 
          value={formData.street} 
          isEditing={isEditing}
          className="md:col-span-2"
        >
          <Input id="street" name="street" value={formData.street} onChange={handleInputChange} className="h-11 bg-muted/30" />
        </InfoField>
      </div>
    </Section>
  );
}
