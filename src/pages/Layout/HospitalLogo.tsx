import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import hospitalLogo from "@/images/Gemini_Generated_Image_l8lkkml8lkkml8lk.png";

export const HospitalLogo: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative block cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group">
          <img
            src={hospitalLogo}
            alt="Hospital Logo"
            className="h-12 w-12 object-cover rounded-full border-2 border-blue-500 p-0.5 bg-blue-500/10 shadow-xl shadow-blue-500/30 transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-blue-400/40"
          />

          {/* BLUE GLOW */}
          <div className="absolute inset-0 rounded-full border border-blue-500/40 blur-[1px] transition-all duration-300 group-hover:border-blue-400/60" />
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-transparent border-none shadow-none flex items-center justify-center p-0">
        <div className="relative max-w-full max-h-[85vh] overflow-hidden rounded-2xl border-4 border-blue-500 bg-background/90 backdrop-blur-md p-2 shadow-2xl shadow-blue-500/30">
          <img
            src={hospitalLogo}
            alt="Hospital Logo Large"
            className="max-w-[280px] sm:max-w-[360px] h-auto object-contain rounded-xl"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};