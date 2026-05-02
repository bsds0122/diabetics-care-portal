import {
    CheckCircle2,
    AlertTriangle,
    Clock3,
  } from "lucide-react";
  
  import { Card } from "@/components/ui/card";
  
  export const NotificationsPanel = ({ panelRef, notifications }) => {
    const getIcon = (type) => {
      if (type === "urgent")
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      if (type === "warning")
        return <Clock3 className="h-4 w-4 text-amber-500" />;
      return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
    };
  
    return (
      <div ref={panelRef} className="absolute top-14 right-0 w-[360px] z-50">
        <Card className="rounded-2xl border shadow-xl overflow-hidden bg-card">
  
          {/* Header */}
          <div className="px-5 py-4 border-b bg-muted/20">
            <h3 className="text-sm font-semibold">Notifications</h3>
            <p className="text-xs text-muted-foreground">
              Patient updates & alerts
            </p>
          </div>
  
          {/* Scrollable Content */}
          <div className="max-h-[320px] overflow-y-auto">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="
                  flex gap-3 px-5 py-3
                  hover:bg-muted/20 transition
                  border-b border-border/30
                "
              >
                {/* Avatar */}
                <img
                  src={item.image}
                  className="h-10 w-10 rounded-full object-cover border"
                />
  
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium truncate">
                      {item.name}
                    </p>
                    <span className="text-[11px] text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
  
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.message}
                  </p>
  
                  <div className="mt-2 flex items-center gap-1.5">
                    {getIcon(item.type)}
                    <span className="text-[11px] capitalize text-muted-foreground">
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
        </Card>
      </div>
    );
  };