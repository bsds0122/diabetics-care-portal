import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface ProfileDropdownProps {
  onSignOut?: () => void;
}

export const ProfileDropdown = ({ onSignOut }: ProfileDropdownProps) => {
  return (
    <DropdownMenuContent
      align="end"
      className="w-64 mt-2 p-2 rounded-2xl border border-border bg-card shadow-xl"
    >
      {/* Profile */}
      <Link to="/profile">
        <DropdownMenuItem className="flex items-center gap-3 font-medium p-3 cursor-pointer m-1 rounded-xl">
         
         
        </DropdownMenuItem>
      </Link>

      <DropdownMenuSeparator className="mx-2" />

      {/* Sign Out */}
      <DropdownMenuItem
        onClick={onSignOut}
        className="p-0 m-1 rounded-xl overflow-hidden"
      >
        <Link
          to="/login"
          className="flex items-center gap-3 font-medium p-3 w-full text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};