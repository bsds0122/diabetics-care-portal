import React from "react";
import { Button } from "@/components/ui/button";
import { Activity, Loader2 } from "lucide-react";
import { actionBtnClass } from "@/pages/doctor/components/Profile/styles";
import { AssessmentExcelUpload } from "./AssessmentExcelUpload";

interface FormActionsProps {
  onUpload: (file: File) => void;
  disabled?: boolean;
  loading?: boolean;
}

export const FormActions: React.FC<FormActionsProps> = ({ 
  onUpload, 
  disabled = false, 
  loading = false 
}) => {
  return (
    <div className="flex items-center justify-end gap-3 pt-6 border-t border-border/40 mt-6">

      <Button
        type="submit"
        disabled={disabled}
        className={`${actionBtnClass} h-11 px-6 rounded-xl shadow-sm 
                    hover:shadow-md transition-all duration-200 min-w-[180px]`}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Calculating risk...
          </>
        ) : (
          <>
            <Activity className="w-4 h-4 mr-2" />
            Assess CVD Risk
          </>
        )}
      </Button>
    </div>
  );
};