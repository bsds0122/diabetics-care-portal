import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}) => {
  return (
    <div className={`relative w-72 ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-9 h-10 bg-background border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/10 rounded-lg transition-all"
      />
    </div>
  );
};