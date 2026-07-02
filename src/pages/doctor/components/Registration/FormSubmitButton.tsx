import React from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, Loader2 } from "lucide-react";
import { actionBtnClass } from "@/pages/doctor/components/Profile/styles";
import { cn } from "@/lib/utils";

import { FormSubmitButtonProps } from "@/types/registration";

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  label = "Submit",
  icon = <UserPlus className="w-4 h-4" />,
  loading = false,
}) => {
  return (
    <Button
      type="submit"
      disabled={loading}
      className={ cn(actionBtnClass, "text-base min-w-[180px]") }
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          {label}
        </>
      ) : (
        <>
          {icon}
          {label}
        </>
      )}
    </Button>
  );
};