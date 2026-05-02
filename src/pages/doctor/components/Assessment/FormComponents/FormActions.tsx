import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { actionBtnClass } from "@/pages/doctor/components/Profile/form-actions/styles";

export const FormActions = ({ disabled = false }) => {
  return (
    <div className="flex items-center justify-end pt-6 border-t border-border/40 mt-6">
      <Button
        type="submit"
        disabled={disabled}
        className={`${actionBtnClass} h-11 px-6 rounded-xl shadow-sm 
                    hover:shadow-md transition-all duration-200`}
      >
        <Activity className="w-4 h-4 mr-2" />
        Assess CVD Risk
      </Button>
    </div>
  );
};