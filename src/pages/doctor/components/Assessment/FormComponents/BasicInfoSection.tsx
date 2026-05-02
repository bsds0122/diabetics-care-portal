import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Weight,
  Ruler,
  UserRound,
} from "lucide-react";

export const BasicInfoSection = ({ form, setForm }) => {
  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const InputField = ({
    label,
    icon,
    value,
    field,
    placeholder,
    type = "text",
    step = "any",
    unit = "",
  }) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-foreground/90 flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </span>
        {label}
      </Label>

      <div className="relative">
        <Input
          type={type}
          step={step}
          value={value}
          onChange={(e) => updateField(field, e.target.value)}
          placeholder={placeholder}
          className="h-12 rounded-xl border-border/60 bg-background shadow-sm pr-12
                     hover:border-primary/40 focus-visible:ring-2
                     focus-visible:ring-primary/20 transition-all duration-200"
        />

        {unit && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground">
            {unit}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
    
      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField
          label="Patient Age"
          icon={<Calendar className="w-4 h-4" />}
          value={form.age}
          field="age"
          type="number"
          placeholder="Enter age"
          unit="yrs"
        />

        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground/90 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <UserRound className="w-4 h-4" />
            </span>
            Patient Sex
          </Label>

          <Select
            value={form.gender}
            onValueChange={(value) => updateField("gender", value)}
          >
            <SelectTrigger className="h-12 rounded-xl border-border/60 bg-background shadow-sm hover:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all duration-200">
              <SelectValue placeholder="Select sex" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <InputField
          label="Body Weight"
          icon={<Weight className="w-4 h-4" />}
          value={form.weight}
          field="weight"
          type="number"
          step="0.1"
          placeholder="Enter weight"
          unit="kg"
        />

        <InputField
          label="Patient Height"
          icon={<Ruler className="w-4 h-4" />}
          value={form.height}
          field="height"
          type="number"
          placeholder="Enter height"
          unit="cm"
        />
      </div>
    </div>
  );
};