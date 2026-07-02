import React from "react";

export const HospitalTitle: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center leading-tight">
      <span className="text-[10px] font-extrabold text-blue-700 tracking-[0.25em] uppercase">
        Diabetics Care Portal
      </span>

      {/* subtle accent line */}
      <div className="mt-1 h-[2px] w-10 bg-gradient-to-r from-blue-500/70 to-transparent rounded-full"></div>
    </div>
  );
};