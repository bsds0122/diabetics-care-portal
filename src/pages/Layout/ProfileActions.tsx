import { LogOut, User, Settings } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export const ProfileActions = ({
  profile,
  onSignOut,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    onSignOut();
    navigate("/login");
  };

  const isDoctor = location.pathname.startsWith("/doctor");
  const basePath = isDoctor ? "/doctor" : "/administrator";

  return (
    <div className="flex flex-col gap-1 p-1">
      {/* USER HEADER */}
      <DropdownMenuLabel className="font-normal p-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-blue-500/20">
            <AvatarImage
              src={profile.avatar}
              alt={profile.name}
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-500 text-white text-xs font-bold">
              {profile.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-semibold text-foreground truncate">
              {profile.name}
            </span>
            <span className="text-xs text-muted-foreground truncate">
              {profile.email}
            </span>
          </div>
        </div>
      </DropdownMenuLabel>

      <DropdownMenuSeparator className="bg-border/60 my-1" />

      {/* MY PROFILE */}
      <DropdownMenuItem
        asChild
        className="
          cursor-pointer
          rounded-lg
          px-3 py-2
          text-sm
          text-foreground/80
          hover:text-foreground
          hover:bg-accent
          focus:bg-accent
          transition-all
          duration-150
        "
      >
        <Link to={`${basePath}/profile`} className="flex items-center w-full">
          <User className="mr-2.5 h-4 w-4 text-muted-foreground" />
          <span>My Profile</span>
        </Link>
      </DropdownMenuItem>

      {/* SETTINGS */}
      <DropdownMenuItem
        asChild
        className="
          cursor-pointer
          rounded-lg
          px-3 py-2
          text-sm
          text-foreground/80
          hover:text-foreground
          hover:bg-accent
          focus:bg-accent
          transition-all
          duration-150
        "
      >
        <Link to={`${basePath}/settings`} className="flex items-center w-full">
          <Settings className="mr-2.5 h-4 w-4 text-muted-foreground" />
          <span>Settings</span>
        </Link>
      </DropdownMenuItem>

      <DropdownMenuSeparator className="bg-border/60 my-1" />

      {/* SIGN OUT */}
      <DropdownMenuItem
        onClick={handleSignOut}
        className="
          cursor-pointer
          rounded-lg
          px-3 py-2
          text-sm
          text-red-600
          font-medium
          hover:bg-red-500/10
          hover:text-red-700
          focus:bg-red-500/10
          focus:text-red-700
          dark:text-red-400
          dark:hover:bg-red-500/15
          dark:focus:bg-red-500/15
          transition-all
          duration-150
        "
      >
        <LogOut className="mr-2.5 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </div>
  );
};