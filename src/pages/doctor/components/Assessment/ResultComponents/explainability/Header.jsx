import { Brain } from "lucide-react";

export const ExplainabilityHeader = () => {
  return (
    <div className="flex items-center gap-3 mb-4">

      {/* Text */}
      <div className="space-y-0.5">
        <h4 className="text-sm font-semibold text-foreground tracking-tight">
          AI Explanation
        </h4>
        <p className="text-xs text-muted-foreground">
          Feature contribution to prediction outcome
        </p>
      </div>

    </div>
  );
};