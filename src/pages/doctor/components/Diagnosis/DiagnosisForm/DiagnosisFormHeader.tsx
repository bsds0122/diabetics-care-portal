import { CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

export const DiagnosisFormHeader = () => {
  return (
    <CardHeader className="relative border-b border-border/40 px-8 py-5 bg-card/20 backdrop-blur-xl">

      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* title */}
      <CardTitle className="flex items-center gap-3 text-sm font-semibold text-foreground tracking-wide">
       
       
      </CardTitle>

    </CardHeader>
  );
};