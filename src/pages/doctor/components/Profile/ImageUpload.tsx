import React from "react";
import { Camera, Upload, User } from "lucide-react";
import { Label } from "@/components/ui/label";

export const ImageUpload = ({ handleProfileImageUpload, preview }) => {
  return (
    <div className="space-y-3">

      {/* Upload Container */}
      <div className="relative group w-fit">

        {/* Avatar Circle */}
        <div
          className="
            w-28 h-28 rounded-full
            border border-border/60
            bg-gradient-to-br from-muted/30 to-muted/10
            flex items-center justify-center
            overflow-hidden
            shadow-sm
            transition-all duration-300
            group-hover:border-primary/40
            group-hover:shadow-md
          "
        >
          {preview ? (
            <img
              src={preview}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-muted-foreground">
              <User className="w-8 h-8 opacity-60" />
              <span className="text-[10px] mt-1 tracking-wide">
                
              </span>
            </div>
          )}
        </div>

        {/* Upload Button */}
        <label
          className="
            absolute bottom-0 right-0
            w-10 h-10 rounded-full
            bg-primary text-primary-foreground
            flex items-center justify-center
            cursor-pointer
            border-2 border-background
            shadow-md
            hover:bg-primary/90
            active:scale-95
            transition-all duration-200
          "
          title="Upload photo"
        >
          <Upload className="w-4 h-4" />

          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Helper text */}
      <p className="text-[11px] text-muted-foreground">
        JPG, PNG or WEBP. Max 2MB recommended.
      </p>
    </div>
  );
};