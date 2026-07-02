import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export const DashboardSkeleton = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      
      {/* 1. WELCOME SECTION SKELETON */}
      <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm h-32 flex flex-col items-center justify-center space-y-3">
        <Skeleton className="h-10 w-3/4 md:w-1/2" />
        <Skeleton className="h-4 w-5/6 md:w-2/3" />
      </div>

      {/* 2. PATIENT STATISTICS CARDS SKELETON */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl border bg-primary/5 p-5 flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-8 w-24" />
            </div>
            <Skeleton className="h-12 w-12 rounded-xl" />
          </div>
        ))}
      </div>

      {/* 3. DISTRIBUTION SECTION SKELETON */}
      <section className="space-y-6">
        <div className="px-1 space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>
        
        <Card className="p-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-[300px] w-full rounded-xl" />
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* 4. VISUALIZATION SECTION SKELETON */}
      <section className="space-y-6">
        <div className="px-1 space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>
        
        <Card className="p-6 h-[450px] space-y-4">
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-48" />
            <div className="flex gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
            </div>
          </div>
          <Skeleton className="h-full w-full rounded-xl" />
        </Card>
      </section>

    </div>
  );
};
