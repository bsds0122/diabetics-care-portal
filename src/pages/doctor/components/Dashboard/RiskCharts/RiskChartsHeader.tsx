import { CardHeader } from "@/components/ui/card";

export const RiskChartsHeader = ({ activeChart, setActiveChart }) => {
  const chartTypes = [
    { type: "pie", label: "Distribution of Risk" },
    { type: "line", label: "Trends Over Time" },
  ];

  return (
    <CardHeader className="border-b border-border/40 bg-secondary/10 px-8 py-6 rounded-t-lg">

      <div className="w-full bg-card border-border/40 shadow-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">

        {/* Toggle Buttons */}
        <div className="flex p-1.5 rounded-lg bg-muted/60 border border-border/50 shadow-inner w-full md:w-auto">

          {chartTypes.map((t) => (
            <button
              key={t.type}
              onClick={() => setActiveChart(t.type)}
              className={`flex-1 md:flex-none px-8 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md transition-all duration-300 transform ${
                activeChart === t.type
                  ? "bg-card text-primary shadow-sm scale-[1.02] border border-border/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {t.label}
            </button>
          ))}

        </div>

      </div>

    </CardHeader>
  );
};