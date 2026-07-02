import { CardHeader } from "@/components/ui/card";

export const RiskChartsHeader = ({
  activeChart,
  setActiveChart,
}) => {
  const chartTypes = [
    { type: "diabetics_pie", label: "Diabetics Percentage" },
    { type: "pie", label: " Risk Level percentage" },

  ];

  return (
    <CardHeader
      className="
        border-b border-border/50
        bg-card/60
        backdrop-blur-xl
        px-8 py-6
        transition-all duration-500 ease-out
      "
    >
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

        {/* TOGGLE BUTTONS */}
        <div
          className="
            flex items-center
            gap-3               /* ✅ increased spacing */
            rounded-2xl
            border border-border/50
            bg-muted/40
            p-2                 /* ✅ more padding for breathing room */
            shadow-sm
            backdrop-blur-lg
          "
        >
          {chartTypes.map((t) => (
            <button
              key={t.type}
              onClick={() => setActiveChart(t.type)}
              className={`
                rounded-xl
                px-6 py-2.5       /* ✅ wider buttons */
                text-xs
                font-semibold
                tracking-wide
                transition-all duration-300 ease-out
                whitespace-nowrap  /* ✅ prevents label breaking */

                ${
                  activeChart === t.type
                    ? `
                      border border-border/50
                      bg-background
                      text-foreground
                      shadow-md
                    `
                    : `
                      text-muted-foreground
                      hover:bg-background/70
                      hover:text-foreground
                    `
                }
              `}
            >
              {t.label}
            </button>
          ))}
        </div>

      </div>
    </CardHeader>
  );
};