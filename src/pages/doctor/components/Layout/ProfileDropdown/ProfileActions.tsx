import { LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

interface ProfileActionsProps {
  onSignOut: () => void;
}

export const ProfileActions = ({ onSignOut }: ProfileActionsProps) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onSignOut();        // clear auth/session
    navigate("/login"); // redirect after logout
  };

  return (
    <>
      <DropdownMenuSeparator className="bg-border/60" />

      <DropdownMenuGroup>
        {/* PROFILE */}
        <DropdownMenuItem
          onClick={() => navigate("/profile")}
          className="cursor-pointer rounded-md hover:bg-accent focus:bg-accent transition-colors"
        >
          <User className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>Profile</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator className="bg-border/60" />

      {/* SIGN OUT */}
      <DropdownMenuItem
        onClick={handleSignOut}
        className="text-destructive cursor-pointer rounded-md hover:bg-destructive/10 focus:bg-destructive/10 transition-colors"
      >
        <LogOut className="mr-2 h-4 w-4" />
        <span>Sign out</span>
      </DropdownMenuItem>
    </>
  );
};