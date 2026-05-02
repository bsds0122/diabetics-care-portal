import {
  LayoutDashboard,
  ClipboardList,
  User,
  Activity,
} from "lucide-react";

/* ✅ PATIENT MENU CONFIG */
export const Items = [
  {
    title: "Dashboard",
    url: "/patient",
    icon: LayoutDashboard,
  },

  {
    title: "Monitor",
    url: "/patient/monitor",
    icon: Activity,
  },
  {
    title: "Profile",
    url: "/patient/profile",
    icon: User,
  },
];