import React from "react";
import { Droplet, Activity, Scale } from "lucide-react";

interface TrendsMetricSelectorProps {
  activeMetric: string;
  setActiveMetric: (metric: string) => void;
}

export const TrendsMetricSelector: React.FC<TrendsMetricSelectorProps> = ({
  activeMetric,
  setActiveMetric,
}) => {
  const metrics = [
    { id: "sugar", label: "Blood Sugar", icon: Droplet, color: "text-rose-500" },
    { id: "bp", label: "Blood Pressure", icon: Activity, color: "text-blue-500" },
    { id: "weight", label: "Weight", icon: Scale, color: "text-emerald-500" },
  ];

  return (
    <div className="flex p-1.5 bg-muted/30 backdrop-blur-md border border-border/50 rounded-2xl shadow-inner h-full items-center">
      <div className="flex w-full gap-1">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const isActive = activeMetric === metric.id;
          
          return (
            <button
              key={metric.id}
              onClick={() => setActiveMetric(metric.id)}
              className={`
                flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                text-[11px] font-bold uppercase tracking-wider transition-all duration-300
                ${isActive 
                  ? "bg-card text-foreground shadow-sm ring-1 ring-border/50 scale-[1.02]" 
                  : "text-muted-foreground hover:bg-card/50 hover:text-foreground"
                }
              `}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? metric.color : "text-muted-foreground/60"}`} />
              <span className="hidden sm:inline">{metric.label}</span>
              <span className="sm:hidden">{metric.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
