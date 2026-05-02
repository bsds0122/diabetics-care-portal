// AdviceList.tsx
import { Pill, CheckCircle2 } from "lucide-react";
import { AdviceItem } from "./types";

interface Props {
  items: AdviceItem[];
}

export function AdviceList({ items }: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Pill className="w-4 h-4 text-primary" />
        <h3 className="font-bold text-base">Doctor’s Advice</h3>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex gap-3 p-3 rounded-lg bg-muted/20 border"
          >
            <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
            <p className="text-sm text-muted-foreground">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}