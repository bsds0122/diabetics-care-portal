import React from "react";
import { Button } from "@/components/ui/button";
import { actionBtnClass } from "@/pages/doctor/components/Profile/form-actions/styles";

export const MedicalCheckupFooter = () => {
  return (
    <div className="px-6 py-4 border-t border-border/60 bg-card/20 backdrop-blur-xl flex justify-end">
      <Button className={actionBtnClass}>
        Schedule Checkup
      </Button>
    </div>
  );
};