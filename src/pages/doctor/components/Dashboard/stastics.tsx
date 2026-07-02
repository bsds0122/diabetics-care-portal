import {
    Users,
    User,
    UserRound,
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  
  const iconMap = {
    total: Users,
    male: User,
    female: UserRound,
  };

  export default function PatientStatisticsPage({ stats }) {
    return (
      <div className="w-full">
  
        {/* SMALL CARDS ROW */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
  
          {stats.map((item, index) => {
            const Icon = iconMap[item.type] || Users;
  
            return (
              <div
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border bg-white/40 p-5 backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  "border-primary/20",
                  "bg-primary/5"
                )}
              >
                {/* GLOW EFFECT */}


                <div className="relative z-10 flex items-center justify-between">
  
                  {/* TEXT */}
                  <div>
  
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                      {item.title}
                    </p>
  
                    <h2 className={cn("mt-2 text-3xl font-black tracking-tight", "text-primary")}>
                      {item.value.toLocaleString()}
                    </h2>
  
                  </div>
  
                  {/* ICON */}
                  <div
                    className={cn("flex h-12 w-12 items-center justify-center rounded-xl shadow-inner transition-transform duration-300 group-hover:scale-110", "bg-primary/10")}
                  >
                    <Icon className={cn("h-6 w-6", "text-primary")} />
                  </div>
  
                </div>
  
              </div>
            );
          })}
  
        </div>
      </div>
    );
  }