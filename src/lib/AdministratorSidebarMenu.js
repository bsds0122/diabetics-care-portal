import {
  LayoutDashboard,
  Users,
  UserPlus,
  User,
  Settings,
  FolderKanban,
} from "lucide-react";

/* ✅ ADMINISTRATOR MENU */
export const menuItems = [
  {
    title: "Dashboard",
    url: "/administrator",
    icon: LayoutDashboard,
  },
  {
    title: "Registration",
    url: "/administrator/registration",
    icon: UserPlus,
  },
  {
    title: "Doctors",
    url: "/administrator/doctor",
    icon: Users,
  },
  {
    title: "Manage",
    url: "/administrator/manage",
    icon: FolderKanban,
  },
  {
    title: "Profile",
    url: "/administrator/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/administrator/settings",
    icon: Settings,
  },
];