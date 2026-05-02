import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";
import { actionBtnClass } from "@/pages/doctor/components/Profile/form-actions/styles";

export const DiagnosisFormActions = ({
  onAnalyze,
  disabled = false,
}) => {
  return (
    <CardFooter className="flex justify-end items-end px-6 py-4 border-t border-border/40 bg-card/20 backdrop-blur-xl">
      <Button
        type="button"
        onClick={onAnalyze}
        disabled={disabled}
        className={actionBtnClass}
      >
        <FlaskConical className="w-4 h-4" />
        Diagnose Diabetes
      </Button>
    </CardFooter>
  );
};