import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export const SidebarItem = ({ item }) => {
  /* ONLY DOCTOR ROUTE USES EXACT MATCH */
  const isBaseRoute = item.url === "/doctor";

  return (
    <SidebarMenuItem>
      <NavLink to={item.url} end={isBaseRoute}>
        {({ isActive }) => (
          <SidebarMenuButton asChild isActive={isActive}>
            <div
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 relative overflow-hidden transition-all duration-200 ${
                isActive
                  ? "bg-blue-500/10 text-blue-500 shadow-sm shadow-blue-500/10 backdrop-blur-xl border border-blue-500/10"
                  : "hover:bg-muted/20 text-foreground/90 border border-transparent"
              }`}
            >
              {/* ACTIVE LEFT INDICATOR */}
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-1 bg-blue-500/80 rounded-r-full shadow-md shadow-blue-500/20"></span>
              )}

              {/* ICON */}
              <item.icon
                className={`h-5 w-5 shrink-0 transition-all ${
                  isActive
                    ? "text-blue-400 scale-110 drop-shadow-sm"
                    : "text-muted-foreground/80 group-hover:text-blue-400"
                }`}
              />

              {/* LABEL */}
              <span
                className={`text-sm font-medium tracking-wide transition-all ${
                  isActive ? "font-semibold text-blue-500" : ""
                }`}
              >
                {item.title}
              </span>

              {/* ACTIVE GLOW */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent rounded-xl pointer-events-none" />
              )}
            </div>
          </SidebarMenuButton>
        )}
      </NavLink>
    </SidebarMenuItem>
  );
};