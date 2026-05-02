import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone } from "lucide-react";

export const PersonalInfoFields = ({
  isEditing,
  formData,
  handleInputChange,
}) => {
  const DisplayField = ({ value }) => (
    <div className="px-3 py-2 rounded-xl border border-border/50 bg-muted/20 text-sm text-foreground/90">
      {value || <span className="text-muted-foreground">—</span>}
    </div>
  );

  const FieldWrapper = ({ label, icon: Icon, children }) => (
    <div className="space-y-2">
      <Label className="text-xs font-medium text-muted-foreground flex items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-primary/10 text-primary flex items-center justify-center">
          <Icon className="w-3.5 h-3.5" />
        </span>
        {label}
      </Label>
      {children}
    </div>
  );

  return (
    <div className="space-y-5">
      
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <FieldWrapper label="First Name *" icon={User}>
          {isEditing ? (
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="h-11 rounded-xl border-border/60 bg-background shadow-sm
                         hover:border-primary/40 focus-visible:ring-2
                         focus-visible:ring-primary/20 transition-all"
            />
          ) : (
            <DisplayField value={formData.firstName} />
          )}
        </FieldWrapper>

        <FieldWrapper label="Last Name *" icon={User}>
          {isEditing ? (
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="h-11 rounded-xl border-border/60 bg-background shadow-sm
                         hover:border-primary/40 focus-visible:ring-2
                         focus-visible:ring-primary/20 transition-all"
            />
          ) : (
            <DisplayField value={formData.lastName} />
          )}
        </FieldWrapper>

      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <FieldWrapper label="Email" icon={Mail}>
          {isEditing ? (
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="h-11 rounded-xl border-border/60 bg-background shadow-sm
                         hover:border-primary/40 focus-visible:ring-2
                         focus-visible:ring-primary/20 transition-all"
            />
          ) : (
            <DisplayField value={formData.email} />
          )}
        </FieldWrapper>

        <FieldWrapper label="Phone" icon={Phone}>
          {isEditing ? (
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="h-11 rounded-xl border-border/60 bg-background shadow-sm
                         hover:border-primary/40 focus-visible:ring-2
                         focus-visible:ring-primary/20 transition-all"
            />
          ) : (
            <DisplayField value={formData.phone} />
          )}
        </FieldWrapper>

      </div>
    </div>
  );
};