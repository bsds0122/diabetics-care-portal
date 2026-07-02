import React from "react";

export interface MenuItem {
  title: string;
  url: string;
  icon?: React.ElementType;
}

export interface AppSidebarProps {
  menuItems: MenuItem[];
}

export interface SidebarMenuProps {
  menuItems: MenuItem[];
  collapsed: boolean;
}

import { UserProfile } from "./profile";

export interface HeaderProps {
  profile: UserProfile;
  onSignOut: () => void;
}

export interface SidebarFooterProps {
  collapsed: boolean;
}
