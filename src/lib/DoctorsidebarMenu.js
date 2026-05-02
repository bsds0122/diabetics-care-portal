import {
  LayoutDashboard,
  Users,
  UserPlus,
  ClipboardCheck,
  ClipboardList,
  Activity,
  FileText,
  History,
  User,
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
    title: "Diagnosis",
    url: "/doctor/diagnosis",
    icon: ClipboardCheck,
  },
  {
    title: "Assessment",
    url: "/doctor/assessment",
    icon: Activity,
  },
  {
    title: "Treatment",
    url: "/doctor/Treatment",
    icon: FileText,
  },
  {
    title: "Dosage History",
    url: "/doctor/dosage-history",
    icon: History,
  },
  {
    title: "Profile",
    url: "/doctor/profile",
    icon: User,
  },
];