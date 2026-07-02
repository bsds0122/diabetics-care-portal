import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  
  import { ProfileTrigger } from "./ProfileTrigger";

  import { ProfileActions } from "./ProfileActions";



export const ProfileDropdown = ({ profile, onSignOut }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ProfileTrigger profile={profile} />
        </DropdownMenuTrigger>
  
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="w-64 rounded-2xl border border-border shadow-2xl backdrop-blur-md bg-card/95 z-[100]"
        >
          <ProfileActions profile={profile} onSignOut={onSignOut} />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };