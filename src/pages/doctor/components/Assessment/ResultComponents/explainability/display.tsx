import { Activity } from "lucide-react";

export const FeatureImpact = ({ feature, impact, value = 0 }) => {
  return (
    <div className="space-y-2">

      {/* Label Row */}
      <div className="flex items-center justify-between text-xs">
        
        <span className="flex items-center gap-2 text-muted-foreground font-medium">
          <span className="w-6 h-6 rounded-md bg-primary/10 text-primary flex items-center justify-center">
            <Activity className="w-3.5 h-3.5" />
          </span>
          {feature}
        </span>

        <span className="text-primary font-semibold">
          {impact}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full rounded-full bg-muted/40 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>

    </div>
  );
};