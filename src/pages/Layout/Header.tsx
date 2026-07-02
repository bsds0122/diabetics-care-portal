import React from "react";
import { Search } from "lucide-react";
import { ProfileDropdown } from "./index";
import { useSearchStore } from "@/store/useSearchStore";
import { HeaderProps } from "@/types/layout";

export const Header = ({
  profile,
  onSignOut,
}: HeaderProps) => {
  const { searchQuery, setSearchQuery } = useSearchStore();

  return (
    <header
      className="
        fixed top-0 right-0 z-50
        left-0
        md:left-[var(--sidebar-width)]
        md:group-data-[state=collapsed]/sidebar-wrapper:left-[var(--sidebar-width-icon)]
        h-20
        px-4 md:px-8
        flex items-center justify-end gap-6
        border-b border-black/15
        bg-card/20
        backdrop-blur-xl
        transition-all duration-300 ease-in-out
      "
    >
      {/* Search */}
      <div className="relative w-full max-w-xs transition-all duration-300 focus-within:max-w-sm">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search patient..."
          className="
            peer
            w-full
            h-11
            pl-11
            pr-12
            rounded-xl
            border border-border/60
            bg-muted/40
            hover:bg-muted/60
            focus:bg-background
            text-sm
            text-foreground
            placeholder:text-muted-foreground/70
            outline-none
            shadow-inner
            focus:ring-2
            focus:ring-blue-500/20
            focus:border-blue-500
            transition-all
            duration-300
          "
        />

        <Search
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            h-4
            w-4
            text-muted-foreground
            transition-colors
            duration-300
            peer-focus:text-blue-500
            z-10
            pointer-events-none
          "
        />
      </div>

      {/* Profile */}
      <ProfileDropdown
        profile={profile}
        onSignOut={onSignOut}
      />
    </header>
  );
};