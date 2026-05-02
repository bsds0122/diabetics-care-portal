import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const TreatmentSearch = ({ value, onChange }) => {
  return (
    <div className="relative w-64">
      
      {/* Icon */}
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

      {/* Input */}
      <Input
        placeholder="Search patient..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9 rounded-xl text-sm"
      />

    </div>
  );
};