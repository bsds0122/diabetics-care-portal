import React from "react";
import { User } from "lucide-react";

export const ProfileHeader = ({ profileImage }) => {
  return (
    <div className="relative h-36 bg-gradient-to-r from-primary/25 via-primary/10 to-transparent rounded-t-2xl overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />

      {/* Avatar */}
      <div className="absolute -bottom-16 left-6">

        <div className="relative">

          <div className="w-32 h-32 rounded-full border-4 border-background bg-muted/30
                          flex items-center justify-center overflow-hidden shadow-xl
                          ring-2 ring-primary/10">

            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-10 h-10 text-muted-foreground" />
            )}

          </div>

        </div>

      </div>

    </div>
  );
};