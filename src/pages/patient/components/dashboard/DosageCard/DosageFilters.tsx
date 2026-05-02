import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  interface Props {
    setYear: (v: string) => void;
    setMonth: (v: string) => void;
    setDay: (v: string) => void;
  }
  
  export function DosageFilters({ setYear, setMonth, setDay }: Props) {
    return (
      <div className="flex gap-2 flex-wrap">
  
        {/* YEAR */}
        <Select onValueChange={setYear}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2026">2026</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
          </SelectContent>
        </Select>
  
        {/* MONTH */}
        <Select onValueChange={setMonth}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="04">April</SelectItem>
            <SelectItem value="05">May</SelectItem>
            <SelectItem value="06">June</SelectItem>
          </SelectContent>
        </Select>
  
        {/* DAY */}
        <Select onValueChange={setDay}>
          <SelectTrigger className="w-[90px]">
            <SelectValue placeholder="Day" />
          </SelectTrigger>
          <SelectContent>
            {[...Array(31)].map((_, i) => {
              const d = (i + 1).toString().padStart(2, "0");
              return (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    );
  }