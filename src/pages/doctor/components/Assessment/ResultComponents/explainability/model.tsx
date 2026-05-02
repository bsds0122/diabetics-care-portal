import { FeatureImpact } from "@/pages/doctor/components/Assessment/ResultComponents/explainability/display";
import { ExplainabilityHeader } from "@/pages/doctor/components/Assessment/ResultComponents/explainability/Header";

export const ModelExplainability = ({ explainabilityData = [] }) => {
  return (
    <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-muted/30 to-background p-6 shadow-sm space-y-5">

      <ExplainabilityHeader />

      {/* Feature list */}
      <div className="space-y-4">
        {explainabilityData.length > 0 ? (
          explainabilityData.map((item, idx) => (
            <FeatureImpact key={idx} {...item} />
          ))
        ) : (
          <p className="text-sm text-muted-foreground">
            No explainability data available.
          </p>
        )}
      </div>

    </div>
  );
};