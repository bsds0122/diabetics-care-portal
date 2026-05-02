import React from "react";
import { Card } from "@/components/ui/card";

import { MedicalCheckupBody } from "@/pages/doctor/components/Prescription/Treatment/MedicalCheckupBody";
import { MedicalCheckupFooter } from "@/pages/doctor/components/Prescription/Treatment/MedicalCheckupFooter";

export const MedicalCheckupCard = () => {
  return (
    <Card className="relative rounded-2xl border border-border/60 bg-card/20 backdrop-blur-xl shadow-sm overflow-hidden">

      {/* Accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

     
      <MedicalCheckupBody />
      <MedicalCheckupFooter />

    </Card>
  );
};