import {
  LayoutDashboard,
  Users,
  UserPlus,
  Activity,
  User,
  LineChart,
  Settings,
  FolderKanban,
  History,
} from "lucide-react";

/* ✅ DOCTOR MENU */
export const menuItems = [
  {
    title: "Dashboard",
    url: "/doctor",
    icon: LayoutDashboard,
  },
  {
    title: "Registration",
    url: "/doctor/registration",
    icon: UserPlus,
  },
  {
    title: "Patients",
    url: "/doctor/patients",
    icon: Users,
  },
  {
    title: "Manage",
    url: "/doctor/manage",
    icon: FolderKanban,
  },
  {
    title: "Assessment",
    url: "/doctor/assessment",
    icon: Activity,
  },


  {
    title: "Monitor",
    url: "/doctor/monitor",
    icon: LineChart,
  },
  {
    title: "History",
    url: "/doctor/history",
    icon: History,
  },
  {
    title: "Profile",
    url: "/doctor/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/doctor/settings",
    icon: Settings,
  },
];