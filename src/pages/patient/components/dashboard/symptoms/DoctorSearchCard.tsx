// DoctorSearchCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { Doctor } from "@/pages/patient/components/dashboard/symptoms/types";

interface Props {
  doctors: Doctor[];
  search: string;
  setSearch: (value: string) => void;
  selectedDoctor: Doctor | null;
  setSelectedDoctor: (doctor: Doctor) => void;
}

export function DoctorSearchCard({
  doctors,
  search,
  setSearch,
  selectedDoctor,
  setSelectedDoctor,
}: Props) {
  return (
    <Card className="rounded-2xl border shadow-sm bg-card/20 backdrop-blur-xl lg:col-span-1">
    
      <CardContent className="pt-5 space-y-5">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search doctor..."
            className="pl-10 bg-muted/30 border-muted focus-visible:ring-primary"
          />
        </div>

        <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
          {doctors.map((doctor) => (
            <button
              key={doctor.id}
              onClick={() => setSelectedDoctor(doctor)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all hover:bg-muted/40 ${
                selectedDoctor?.id === doctor.id
                  ? "border-primary bg-primary/5"
                  : "border-border"
              }`}
            >
              <Avatar className="h-12 w-12">
                <AvatarImage src={doctor.image} alt={doctor.name} />
                <AvatarFallback>
                  {doctor.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="font-medium text-sm">{doctor.name}</p>
                <p className="text-xs text-muted-foreground">
                  {doctor.specialty}
                </p>
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}