import { FileText } from "lucide-react";

export const ClinicalImpression = ({ impression }) => {
  return (
    <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-muted/40 to-background shadow-sm p-6 space-y-4">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        
        <div>
          <h4 className="text-sm font-semibold text-foreground tracking-tight">
            Clinical Assessment
          </h4>
          <p className="text-xs text-muted-foreground">
            AI-generated cardiovascular risk interpretation
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="rounded-xl border border-border/40 bg-card/60 p-5">
        <p className="text-sm leading-relaxed text-foreground/80">
          {impression ||
            "Patient presents with a moderate cardiovascular risk profile based on current clinical parameters and lifestyle factors."}
        </p>
      </div>
    </div>
  );
};