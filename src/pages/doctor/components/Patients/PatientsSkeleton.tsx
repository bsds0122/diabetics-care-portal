import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export const PatientsSkeleton = () => {
  return (
    <div className="flex flex-col space-y-6 h-[calc(100vh-10rem)] animate-in fade-in duration-500">
      <div className="flex-1 flex gap-6 overflow-hidden rounded-2xl border border-border/60 bg-card/20 backdrop-blur-xl p-4 min-h-0 relative">
        
        {/* LEFT SIDEBAR SKELETON */}
        <Card className="relative w-[350px] flex flex-col rounded-3xl border border-border/60 bg-card/20 backdrop-blur-xl shadow-sm overflow-hidden">
          <div className="p-4 space-y-4">
            <Skeleton className="h-10 w-full rounded-xl" /> {/* Search placeholder */}
            <div className="space-y-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center gap-3 p-2">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* RIGHT DETAILS SKELETON */}
        <Card className="relative flex-1 flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/20 backdrop-blur-xl shadow-sm">
          {/* Header Skeleton */}
          <div className="h-32 bg-muted/20 relative">
            <div className="absolute -bottom-12 left-6 flex gap-4 items-end">
              <Skeleton className="h-24 w-24 rounded-full border-4 border-white/80 shadow-xl" />
              <div className="pb-2 space-y-2">
                <Skeleton className="h-8 w-48" />
              </div>
            </div>
          </div>

          {/* Tabs and Content Skeleton */}
          <div className="mt-16 px-6 pb-6 flex-1 flex flex-col space-y-6">
            <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl border bg-card/20 h-12">
              <Skeleton className="h-full w-full rounded-xl" />
              <Skeleton className="h-full w-full rounded-xl" />
            </div>

            <div className="flex-1 rounded-2xl border border-border/60 bg-card/20 p-6 space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-border/40 last:border-0">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-48" />
                </div>
              ))}
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};
