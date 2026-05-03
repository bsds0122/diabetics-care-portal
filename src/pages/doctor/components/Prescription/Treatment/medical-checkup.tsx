import React from "react";
import { Card } from "@/components/ui/card";

import { MedicalCheckupBody } from "@/pages/doctor/components/Prescription/Treatment/MedicalCheckupBody";
import { MedicalCheckupFooter } from "@/pages/doctor/components/Prescription/Treatment/MedicalCheckupFooter";

export const MedicalCheckupCard = () => {
  return (
    <Card className="relative rounded-2xl  bg-card/20  overflow-hidden">
      <MedicalCheckupBody />
      <MedicalCheckupFooter />

    </Card>
  );
};