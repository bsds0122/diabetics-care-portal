import React from "react";
import { User } from "lucide-react";

export const ProfileHeader = ({ profileImage }) => {
  return (
    <div className="flex justify-center py-6">
      <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border bg-muted">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        ) : (
          <User className="h-8 w-8 text-muted-foreground" />
        )}
      </div>
    </div>
  );
};