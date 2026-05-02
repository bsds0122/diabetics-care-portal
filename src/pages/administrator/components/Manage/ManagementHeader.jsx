import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const ManagementHeader = ({ search, setSearch }) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">

      {/* LEFT: TITLE */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-foreground">
          Doctors Management
        </h2>   
      </div>

      {/* RIGHT: SEARCH */}
      <div className="w-80">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search doctors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-10 text-sm"
          />
        </div>
      </div>

    </div>
  );
};