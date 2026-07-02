import { Users, Stethoscope, ActivitySquare, HeartPulse } from "lucide-react";

const stats = [
  { icon: Users, label: "Total Patients", value: "12,480+" },
  { icon: Stethoscope, label: "High Risk", value: "85" },
  { icon: ActivitySquare, label: "Normal", value: "9,320" },
  { icon: HeartPulse, label: "Low Risk", value: "3,150" },
];

export function Stats() {
  return (
    <section className="bg-primary-deep text-primary-foreground py-20 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,white,transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">

                {/* ICON */}
                <div className="p-3 rounded-full bg-white/10 group-hover:scale-110 transition">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* VALUE */}
                <div className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {value}
                </div>

                {/* LABEL */}
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-white/60">
                  {label}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}