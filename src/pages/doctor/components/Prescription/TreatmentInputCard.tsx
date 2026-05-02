import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill } from "lucide-react";


import { PrescriptionBody } from "@/pages/doctor/components/Prescription/Treatment/TreatmentFields";
import { PrescriptionFooter } from "@/pages/doctor/components/Prescription/Treatment/TreatmentFooter";

export const PrescriptionCard = () => {
  return (
    <Card className="rounded-2xl border border-border/60 bg-card/20 backdrop-blur-xl shadow-sm overflow-hidden">

     
     

      {/* Body */}
      <PrescriptionBody />

      {/* Footer */}
      <PrescriptionFooter />

    </Card>
  );
};