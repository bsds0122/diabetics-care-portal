import { Card, CardContent } from "@/components/ui/card";

import { ClinicalImpression } from "@/pages/doctor/components/Assessment/ResultComponents/explainability/ClinicalImpression";
import { ModelExplainability } from "@/pages/doctor/components/Assessment/ResultComponents/explainability/ModelExplainability";

export const AssessmentResult = ({ assessmentResult }) => {
  return (
    <Card className="relative w-full  rounded-2xl bg-card/20  overflow-hidden">

      {/* CONTENT */}
      <CardContent className="relative px-6 py-6 space-y-6">

        {/* Clinical Impression */}
        <ClinicalImpression
          impression={assessmentResult?.clinicalImpression}
        />

        {/* Model Explainability */}
        <ModelExplainability />

      </CardContent>
    </Card>
  );
};