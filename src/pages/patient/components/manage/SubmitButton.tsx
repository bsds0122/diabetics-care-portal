import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { actionBtnClass } from "@/pages/doctor/components/Profile/form-actions/styles";

export default function SubmitButton() {
  return (
    <div className="flex justify-end pt-4 border-t border-border">
      <Button type="submit" className={`gap-2 ${actionBtnClass}`}>
        <Save className="w-4 h-4" />
        Save Health Data
      </Button>
    </div>
  );
}