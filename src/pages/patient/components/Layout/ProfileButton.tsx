import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  patientProfile?: {
    name?: string;
    avatar?: string;
    initials?: string;
  };
}

export const ProfileButton = React.forwardRef<HTMLButtonElement, ProfileButtonProps>(
  ({ patientProfile, ...props }, ref) => {
    return (
      <Button
        variant="ghost"
        className="flex items-center gap-3 h-12 px-2 rounded-full hover:bg-muted/50 transition-all duration-200"
        ref={ref}
        {...props}
      >
        <div className="relative flex items-center">
          <Avatar className="h-10 w-10 border border-primary/20 shadow-sm transition-transform group-hover:scale-105">
            <AvatarImage src={patientProfile?.avatar} alt={patientProfile?.name} className="object-cover" />
            <AvatarFallback className="bg-primary/10 text-primary font-bold">
              {patientProfile?.initials || patientProfile?.name?.charAt(0) || "P"}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col items-start hidden sm:flex">
          <span className="text-sm font-semibold text-foreground tracking-tight line-clamp-1">
            {patientProfile?.name}
          </span>
        </div>

        <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
      </Button>
    );
  }
);

ProfileButton.displayName = "ProfileButton";