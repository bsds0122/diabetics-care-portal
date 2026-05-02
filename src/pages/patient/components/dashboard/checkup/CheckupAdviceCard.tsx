// CheckupAdviceCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";

import { checkups, advices } from "@/pages/patient/components/dashboard/checkup/data";
import { CheckupList } from "@/pages/patient/components/dashboard/checkup/CheckupList";
import { AdviceList } from "@/pages/patient/components/dashboard/checkup/AdviceList";

export function CheckupAdviceCard() {
  return (
    <Card className="w-full rounded-2xl shadow-sm border bg-card/20 backdrop-blur-xl">
      <CardHeader className="border-b pb-4">
        <CardTitle className="text-base font-bold text-primary flex items-center gap-2">
          <Stethoscope className="w-4 h-4" />
          Follow-up Care & Medical Advice
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        <CheckupList items={checkups} />
        <AdviceList items={advices} />
      </CardContent>
    </Card>
  );
}