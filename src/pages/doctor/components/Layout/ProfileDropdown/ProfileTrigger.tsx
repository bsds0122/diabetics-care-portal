import React from "react";
import { Button } from "@/components/ui/button";
import { ProfileAvatar } from "./ProfileAvatar";

interface ProfileTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  doctorProfile: {
    name: string;
    avatar: string;
    initials: string;
    email?: string;
  };
}

export const ProfileTrigger = React.forwardRef<HTMLButtonElement, ProfileTriggerProps>(
  ({ doctorProfile, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        className="relative h-10 w-10 rounded-full p-0 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        {...props}
      >
        <ProfileAvatar {...doctorProfile} />
      </Button>
    );
  }
);

ProfileTrigger.displayName = "ProfileTrigger";