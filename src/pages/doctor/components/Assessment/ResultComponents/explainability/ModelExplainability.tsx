import { FeatureImpact } from "@/pages/doctor/components/Assessment/ResultComponents/explainability/display";
import { ExplainabilityHeader } from "@/pages/doctor/components/Assessment/ResultComponents/explainability/Header";

export const ModelExplainability = ({ data = [] }) => {
  return (
    <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-muted/30 to-background p-6 shadow-sm space-y-5">

      {/* Header */}
      <ExplainabilityHeader />

      {/* Content */}
      <div className="space-y-4">
        {data.length > 0 ? (
          data.map((item, idx) => (
            <FeatureImpact
              key={idx}
              feature={item.feature}
              impact={item.impact}
              value={item.value}
            />
          ))
        ) : (
          <div className="text-center py-6">
            <p className="text-sm text-muted-foreground">
              No explainability insights available for this assessment
            </p>
          </div>
        )}
      </div>

    </div>
  );
};