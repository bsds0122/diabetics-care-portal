import React from "react";

export const HospitalTitle: React.FC = () => {
  return (
    <div className="flex flex-col leading-tight">
      <span className="text-[10px] font-extrabold text-blue-400 tracking-[0.25em] uppercase">
        Mzuzu Central
      </span>

      <span className="text-xs text-muted-foreground font-medium tracking-wide">
        Hospital Diabetes Care
      </span>

      {/* subtle accent line */}
      <div className="mt-1 h-[2px] w-10 bg-gradient-to-r from-blue-500/60 to-transparent rounded-full"></div>
    </div>
  );
};
