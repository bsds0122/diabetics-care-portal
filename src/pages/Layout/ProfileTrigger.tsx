import React from "react";
import { Button } from "@/components/ui/button";
import { ProfileAvatar } from "./ProfileAvatar";

type ProfileTriggerProps = React.ComponentPropsWithoutRef<
  typeof Button
> & {
  profile: {
    avatar: string;
    name: string;
    initials: string;
  };
};

export const ProfileTrigger = React.forwardRef<
  HTMLButtonElement,
  ProfileTriggerProps
>(({ profile, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      className="
        relative
        h-10
        w-10
        rounded-full
        p-0
        hover:bg-transparent
        focus-visible:ring-0
        focus-visible:ring-offset-0
        transition-transform
        duration-300
        hover:scale-105
        active:scale-95
      "
      {...props}
    >
      <ProfileAvatar
        avatar={profile.avatar}
        name={profile.name}
        initials={profile.initials}
      />
    </Button>
  );
});

ProfileTrigger.displayName = "ProfileTrigger";