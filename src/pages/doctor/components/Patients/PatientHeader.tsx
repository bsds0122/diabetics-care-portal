import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Patient } from "@/types/patient";

interface PatientHeaderProps {
  selected: Patient | null;
}

export const PatientHeader = ({ selected }: PatientHeaderProps) => {

  const initials =
    (selected?.firstName?.[0] || "") +
    (selected?.lastName?.[0] || "");

  return (
    <div className="h-32 bg-gradient-to-r from-blue-900/30 via-blue-700/15 to-transparent relative">

      {/* avatar + info */}
      <div className="absolute -bottom-12 left-6 flex gap-4 items-end">

        <Avatar className="h-24 w-24 border-4 border-white/80 shadow-xl">
          <AvatarImage
            src={selected?.avatar}
            alt={`${selected?.firstName || ""} ${selected?.lastName || ""}`}
            className="object-cover"
          />
          <AvatarFallback className="bg-white/90 text-primary text-2xl font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="pb-2 space-y-1">
          <h2 className="text-2xl font-bold text-white drop-shadow-sm">
            {selected?.firstName} {selected?.lastName}
          </h2>
        </div>

      </div>

    </div>
  );
};