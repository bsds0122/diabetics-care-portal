import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const MonitorSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 animate-in fade-in duration-500">
      {[1, 2].map((i) => (
        <Card key={i} className="overflow-hidden rounded-2xl border border-border/40 bg-card/20 backdrop-blur-xl shadow-sm">
          <CardHeader className="pb-2">
            <Skeleton className="h-5 w-48" />
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full flex items-end gap-2 pt-10">
                {[1, 2, 3, 4, 5, 6].map((j) => (
                    <Skeleton key={j} className="flex-1 h-full opacity-20" style={{ height: `${Math.random() * 60 + 20}%` }} />
                ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
