import React from "react";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { actionBtnClass } from "@/pages/doctor/components/Profile/form-actions/styles";
import { cn } from "@/lib/utils";

interface FormSubmitButtonProps {
  label?: string;
  icon?: React.ReactNode;
}

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  label = "Submit",
  icon = <UserPlus className="w-4 h-4" />,
}) => {
  return (
    <Button
      type="submit"
      className={ cn(actionBtnClass, "text-base") }
    >
      {icon}
      {label}
    </Button>
  );
};