import React from "react";

export const HospitalLogo: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/Ld6jX0px/Screenshot-2026-04-03-185141.png"
        alt="Hospital Logo"
        className="h-12 w-12 object-cover rounded-full border-2 border-blue-500 p-0.5 bg-blue-500/10 shadow-xl shadow-blue-500/30"
      />

      {/* BLUE GLOW */}
      <div className="absolute inset-0 rounded-full border border-blue-500/40 blur-[1px]" />
    </div>
  );
};
