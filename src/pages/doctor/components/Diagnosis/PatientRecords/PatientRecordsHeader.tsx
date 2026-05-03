import { CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Database } from "lucide-react";

export const PatientRecordsHeader = ({ search, onSearchChange }) => {
  return (
    <CardHeader className="relative px-6 md:px-8 py-5 border-b border-border/40 bg-card/20 backdrop-blur-xl">
     
     

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-3">
      
        </div>

        {/* Right Side Search */}
        <div className="relative w-full md:w-72 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />

          <Input
            placeholder="Search patient history..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-11 pl-11 rounded-xl border-border/60 bg-background shadow-sm
                       hover:border-primary/40 focus-visible:ring-2
                       focus-visible:ring-primary/20 transition-all duration-200"
          />
        </div>
      </div>
    </CardHeader>
  );
};