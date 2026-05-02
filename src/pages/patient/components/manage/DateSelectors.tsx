import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DateSelectors({ form, setForm }) {
  return (
    <div className="grid grid-cols-3 gap-4">

      {/* YEAR */}
      <div>
        <Label>Year</Label>
        <Select
          value={form.year}
          onValueChange={(v) => setForm({ ...form, year: v })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2026">2026</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* MONTH */}
      <div>
        <Label>Month</Label>
        <Select
          value={form.month}
          onValueChange={(v) => setForm({ ...form, month: v })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="January">January</SelectItem>
            <SelectItem value="February">February</SelectItem>
            <SelectItem value="March">March</SelectItem>
            <SelectItem value="April">April</SelectItem>
            <SelectItem value="May">May</SelectItem>
            <SelectItem value="June">June</SelectItem>
            <SelectItem value="July">July</SelectItem>
            <SelectItem value="August">August</SelectItem>
            <SelectItem value="September">September</SelectItem>
            <SelectItem value="October">October</SelectItem>
            <SelectItem value="November">November</SelectItem>
            <SelectItem value="December">December</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* WEEK */}
      <div>
        <Label>Week</Label>
        <Select
          value={form.week}
          onValueChange={(v) => setForm({ ...form, week: v })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Week" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week1">Week 1</SelectItem>
            <SelectItem value="week2">Week 2</SelectItem>
            <SelectItem value="week3">Week 3</SelectItem>
            <SelectItem value="week4">Week 4</SelectItem>
          </SelectContent>
        </Select>
      </div>

    </div>
  );
}