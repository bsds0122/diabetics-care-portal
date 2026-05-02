import {
  LayoutDashboard,
  Users,
  UserPlus,
  ClipboardList
} from "lucide-react";

/* ✅ ADMIN MENU */
export const menuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard
  },
  {
    title: "Registration",
    url: "/admin/registration",
    icon: UserPlus
  },
  {
    title: "Manage Patients",
    url: "/admin/manage",
    icon: Users
  },
   
];