import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const HistorySkeleton = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Summary Skeleton */}
      <Card className="border-border/60 bg-card/20 backdrop-blur-xl shadow-sm">
        <CardHeader className="pb-4">
          <Skeleton className="h-6 w-48" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-5 w-32" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8 lg:grid-cols-1">
        <div className="space-y-8">
          {[1, 2].map((i) => (
            <Card key={i} className="border-border/60 bg-card/20 backdrop-blur-xl shadow-sm">
              <CardHeader className="pb-4">
                <Skeleton className="h-6 w-48" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="rounded-xl border border-border/40 bg-background/40 p-4 flex gap-4">
                      <Skeleton className="h-2 w-2 rounded-full mt-1.5 shrink-0" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
