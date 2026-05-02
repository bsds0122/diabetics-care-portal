import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ClipboardList, CheckCircle2 } from "lucide-react";

const recommendations = [
  "Maintain a consistent schedule for blood sugar monitoring, especially before meals.",
  "Continue with your prescribed dosage of Metformin and monitor for any side effects.",
  "Aim for at least 150 minutes of moderate-intensity aerobic activity per week.",
  "Follow the diabetic diet plan, focusing on whole grains, lean proteins, and plenty of vegetables.",
  "Schedule your next eye exam and foot check as part of your routine diabetic care.",
  "Keep hydrated by drinking at least 8 glasses of water daily."
];

export function ClinicalRecommendationsModal({ isOpen, onOpenChange }) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl border-none bg-card/95 backdrop-blur-xl shadow-2xl">
        <DialogHeader className="flex flex-row items-center gap-3 border-b border-border/50 pb-4">
          <div className="p-2 rounded-xl bg-primary/10 text-primary">
            <ClipboardList className="w-5 h-5" />
          </div>
          <DialogTitle className="text-xl font-bold tracking-tight">Clinical Recommendations</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <p className="text-sm text-muted-foreground font-medium px-1">
            Based on your recent health trends, your doctor recommends the following:
          </p>
          <ul className="space-y-3">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex gap-3 p-3 rounded-xl bg-muted/30 border border-border/20 transition-all hover:bg-muted/50">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed font-medium">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
