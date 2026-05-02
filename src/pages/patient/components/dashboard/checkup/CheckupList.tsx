// CheckupList.tsx
import { Calendar, UserRound, Building2, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CheckupItem } from "./types";

interface Props {
  items: CheckupItem[];
}

export function CheckupList({ items }: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-4 h-4 text-primary" />
        <h3 className="font-bold text-sm">Upcoming Checkups</h3>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border bg-muted/30 space-y-2"
          >
            <div className="flex justify-between items-center">
              <p className="font-medium text-primary flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {item.date}
              </p>

              <Badge className="bg-blue-100 text-blue-700 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                {item.status}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <UserRound className="w-4 h-4" />
              {item.doctor}
            </p>

            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              {item.clinic}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}