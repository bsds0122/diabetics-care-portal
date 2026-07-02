import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu as BaseSidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { MenuItem, SidebarMenuProps } from "@/types/layout";

export const SidebarMenu = ({
  menuItems,
  collapsed,
}: SidebarMenuProps) => {
  const location = useLocation();

  return (
    <SidebarContent className="pt-3 overflow-hidden no-scrollbar bg-card/20 backdrop-blur-xl h-full transition-all duration-300">
      <SidebarGroup>
        <SidebarGroupContent>
          <BaseSidebarMenu
            className={`space-y-1 px-2 transition-all duration-300 ${
              collapsed ? "items-center" : ""
            }`}
          >
            {menuItems.map((item) => {
              /* DOCTOR AND ADMINISTRATOR ROUTES ONLY USES EXACT MATCH */
              const isBaseRoute = ["/doctor", "/administrator"].includes(item.url);

              /* ACTIVE ROUTE LOGIC */
              const isActive = isBaseRoute
                ? location.pathname === item.url
                : location.pathname.startsWith(item.url + "/") ||
                  location.pathname === item.url;

              const Icon = item.icon;

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <NavLink
                      to={item.url}
                      end={isBaseRoute}
                      title={collapsed ? item.title : ""}
                      className={`group flex items-center ${
                        collapsed ? "justify-center" : "gap-3"
                      } rounded-xl px-3 py-2.5 relative overflow-hidden transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary shadow-sm shadow-primary/10 backdrop-blur-xl"
                          : "hover:bg-muted/40 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {/* ACTIVE LEFT INDICATOR */}
                      {isActive && !collapsed && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-primary rounded-r-full shadow-md shadow-primary/20"></span>
                      )}

                      {/* ICON */}
                      {Icon && (
                        <Icon
                          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                            isActive
                              ? "text-primary scale-110 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        />
                      )}

                      {/* LABEL */}
                      {!collapsed && (
                        <span
                          className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                            isActive ? "font-bold text-foreground" : ""
                          }`}
                        >
                          {item.title}
                        </span>
                      )}

                      {/* ACTIVE GLOW */}
                      {isActive && !collapsed && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent rounded-xl" />
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </BaseSidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
};