import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  
  import { ProfileTrigger } from "@/pages/doctor/components/Layout/ProfileDropdown/ProfileTrigger";
  import { ProfileHeader } from "@/pages/doctor/components/Layout/ProfileDropdown/ProfileHeader";
  import { ProfileActions } from "@/pages/doctor/components/Layout/ProfileDropdown/ProfileActions";
  
  interface ProfileDropdownProps {
  doctorProfile: {
    name: string;
    avatar: string;
    initials: string;
    email: string;
  };
  onSignOut: () => void;
}

export const ProfileDropdown = ({ doctorProfile, onSignOut }: ProfileDropdownProps) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ProfileTrigger doctorProfile={doctorProfile} />
        </DropdownMenuTrigger>
  
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="w-56 rounded-xl border border-border shadow-2xl backdrop-blur-md bg-card/95 z-[100]"
        >
          <ProfileHeader 
            name={doctorProfile.name} 
            email={doctorProfile.email}
          />
          <ProfileActions onSignOut={onSignOut} />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };