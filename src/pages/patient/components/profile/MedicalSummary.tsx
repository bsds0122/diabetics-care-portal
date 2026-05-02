import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Droplets, Heart, ArrowRight } from "lucide-react";
import { ProfileFormData } from "@/pages/patient/components/profile/types";

interface MedicalSummaryProps {
  formData: ProfileFormData;
}

export function MedicalSummary({ formData }: MedicalSummaryProps) {
  return (
    <Card className="bg-primary/5 border-none rounded-2xl p-6 h-fit sticky top-6">
      <div className="flex items-center gap-2 text-primary font-bold mb-6">
        <Activity className="w-5 h-5" />
        Medical Summary
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between p-3 rounded-xl bg-white/50 border border-primary/10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <Droplets className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-semibold">Blood Type</p>
              <p className="text-lg font-black text-foreground">{formData.bloodType}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-white/50 border border-primary/10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Heart className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-semibold">Condition</p>
              <p className="text-sm font-bold text-foreground">{formData.condition}</p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-primary text-primary-foreground shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <p className="text-xs font-bold uppercase tracking-wider opacity-80">Last Checkup</p>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10">Recent</Badge>
          </div>
          <p className="text-2xl font-black mb-1">{formData.lastCheckup}</p>
          <p className="text-xs opacity-80 flex items-center gap-1">
             Next appointment in 12 days <ArrowRight className="w-3 h-3" />
          </p>
        </div>

        <div className="pt-4">
          <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/10 rounded-xl justify-between group">
            View Medical History
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
