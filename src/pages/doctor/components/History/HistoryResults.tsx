import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { AssessmentHistoryItem } from "@/types/history";

type Props = {
  assessments: AssessmentHistoryItem[];
};

export const HistoryResults: React.FC<Props> = ({ assessments }) => {
  return (
    <div className="space-y-6">

      {assessments.map((assessment, index) => (
        <Card key={index} className="border-muted/40">
          
          <CardHeader>
            <CardTitle className="text-sm flex justify-between">
              <span>Assessment #{index + 1}</span>
              <span className="text-muted-foreground">
                Risk: {assessment.risk_percentage.toFixed(2)}%
              </span>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">

            {/* Risk Level */}
            <div className="text-sm">
              <strong>Risk Level:</strong>{" "}
              <span className="ml-1">{assessment.risk_level}</span>
            </div>

            {/* Feature Importance */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground">
                Feature Impact
              </div>

              {assessment.feature_importance.map((f, i) => (
                <div
                  key={i}
                  className="p-2 text-xs border rounded-md bg-muted/20"
                >
                  {f.feature}: {f.effect} ({f.impact_percentage}%)
                </div>
              ))}
            </div>

          </CardContent>
        </Card>
      ))}

    </div>
  );
};