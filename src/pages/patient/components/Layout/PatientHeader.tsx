import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

import { ProfileButton } from "./ProfileButton";
import { ProfileDropdown } from "./ProfileDropdown";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface PatientHeaderProps {
  patientProfile?: {
    name?: string;
    avatar?: string;
    initials?: string;
  };
  onSignOut?: () => void;
}

export const PatientHeader = ({ patientProfile, onSignOut }: PatientHeaderProps) => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 right-0 left-[--sidebar-width] group-data-[state=collapsed]/sidebar-wrapper:left-[--sidebar-width-icon] z-50 h-20 flex items-center justify-between px-8 border-b border-sidebar-border bg-card/20 backdrop-blur-xl shadow-sm transition-all duration-300 ease-in-out">
      {/* LEFT SIDE */}
      <div />

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        {/* 🌙 Theme Toggle Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full bg-background/50 border-border/50 hover:bg-muted/50 transition-colors"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="w-4 h-4 text-yellow-500" />
          ) : (
            <Moon className="w-4 h-4 text-primary" />
          )}
        </Button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ProfileButton patientProfile={patientProfile} />
          </DropdownMenuTrigger>

          <ProfileDropdown onSignOut={onSignOut} />
        </DropdownMenu>
      </div>
    </header>
  );
};