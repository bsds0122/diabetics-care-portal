import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill } from "lucide-react";


import { PrescriptionBody } from "@/pages/doctor/components/Prescription/Treatment/TreatmentFields";
import { PrescriptionFooter } from "@/pages/doctor/components/Prescription/Treatment/TreatmentFooter";

export const PrescriptionCard = () => {
  return (
    <Card className="rounded-2xl bg-card/20  overflow-hidden">

     
     

      {/* Body */}
      <PrescriptionBody />

      {/* Footer */}
      <PrescriptionFooter />

    </Card>
  );
};