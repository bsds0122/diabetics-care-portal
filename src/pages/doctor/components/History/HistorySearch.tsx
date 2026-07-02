import React from "react";
import { User, Calendar, Search, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

import { HistorySearchProps } from "@/types/history";

export const HistorySearch: React.FC<HistorySearchProps> = ({
  patientId,
  setPatientId,
  day,
  setDay,
  month,
  setMonth,
  year,
  setYear,
  loading,
  onSearch,
}) => {
  return (
    <Card className="border-border/60 bg-card/20 backdrop-blur-xl shadow-sm overflow-hidden">
      <CardContent>
        <form
          onSubmit={onSearch}
          className="grid gap-6 md:grid-cols-5 items-end"
        >

          {/* ================= PATIENT ID ================= */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-muted-foreground">
              Patient ID
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="e.g. 1"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                className="pl-9 bg-background/50"
              />
            </div>
          </div>

          {/* ================= DAY ================= */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-muted-foreground">
              Day
            </Label>
            <Input
              type="number"
              placeholder="e.g. 15"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="bg-background/50"
              min={1}
              max={31}
            />
          </div>

          {/* ================= MONTH ================= */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-muted-foreground">
              Month
            </Label>
            <Select value={month} onValueChange={setMonth}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* ================= YEAR ================= */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-muted-foreground">
              Year
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="number"
                placeholder="e.g. 2026"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="pl-9 bg-background/50"
              />
            </div>
          </div>

          {/* ================= SEARCH BUTTON ================= */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full shadow-md transition-all active:scale-95"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Searching...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                View Assessment
              </>
            )}
          </Button>

        </form>
      </CardContent>
    </Card>
  );
};