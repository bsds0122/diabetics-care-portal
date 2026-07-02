import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormType, LocationInfoFieldsProps } from "@/types/registration";

const regions = ["Northern Region"];

const districts = [
  "Mzimba",
  "Nkhata Bay",
  "kalonga",
  "chitipa"
];

const tas = [
  "M'Mbelwa",
  "Mzukuzuku",
  "Kampingo Sibande",
  "Mtwalo",
  "Jalavikuba",
  "Mpherembe",
  "Chindi",
];

const villages = [
  "Jenda",
  "Euthini",
  "Bwengu",
  "Edingeni",
  "Embangweni",
  "Choma",
  "Kafukule",
  "Luwerezi",
  "Viphya",
  "Ezondweni",
  "Jalawe",
  "Mabulabo",
  "Kanyerere",
  "Kaboko",
  "Zombwe",
  "Mzalangwe",
  "Champhira",
  "Mzikubola",
  "Lupaso",
  "Luwuchi",
  "Manyamula",
  "Luhomero",
  "Mbalachanda",
  "Chibavi",
];

export const LocationInfoFields: React.FC<LocationInfoFieldsProps> = ({
  form,
  updateForm,
}) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {/* Region */}
        <div className="space-y-2">
          <Label>Region</Label>

          <Select
            value={form.region || ""}
            onValueChange={(value) =>
              updateForm({ region: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>

            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* District */}
        <div className="space-y-2">
          <Label>District</Label>

          <Select
            value={form.district || ""}
            onValueChange={(value) =>
              updateForm({ district: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select District" />
            </SelectTrigger>

            <SelectContent>
              {districts.map((district) => (
                <SelectItem key={district} value={district}>
                  {district}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Traditional Authority */}
        <div className="space-y-2">
          <Label>Traditional Authority</Label>

          <Select
            value={form.ta || ""}
            onValueChange={(value) =>
              updateForm({ ta: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select TA" />
            </SelectTrigger>

            <SelectContent>
              {tas.map((ta) => (
                <SelectItem key={ta} value={ta}>
                  {ta}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Village */}
        <div className="space-y-2">
          <Label>Village</Label>

          <Select
            value={form.village || ""}
            onValueChange={(value) =>
              updateForm({ village: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Village" />
            </SelectTrigger>

            <SelectContent>
              {villages.map((village) => (
                <SelectItem key={village} value={village}>
                  {village}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      </div>
    </div>
  );
};