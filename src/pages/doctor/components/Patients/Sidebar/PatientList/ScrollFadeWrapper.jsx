import { CardContent } from "@/components/ui/card";

export const ScrollFadeWrapper = ({ children }) => {
  return (
    <div className="relative flex-1 min-h-0 overflow-hidden">

      {/* top fade */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-card/95 via-card/50 to-transparent z-10" />

      {/* bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card/95 via-card/50 to-transparent z-10" />

      <CardContent className="h-full p-2 overflow-y-auto space-y-1 no-scrollbar custom-scrollbar relative">
        {children}
      </CardContent>

    </div>
  );
};