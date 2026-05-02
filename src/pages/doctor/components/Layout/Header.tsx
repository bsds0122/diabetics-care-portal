import { useState, useRef, useEffect } from "react";
import { Bell, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { ProfileDropdown } from "@/pages/doctor/components/Layout/ProfileDropdown/index";
import { NotificationsPanel } from "@/pages/doctor/components/Layout/NotificationsPanel";

export const Header = ({ doctorProfile, onSignOut }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  /* =========================
     📢 NOTIFICATIONS DATA
  ========================== */
  const notifications = [
    {
      id: 1,
      name: "John Phiri",
      image: "https://i.pravatar.cc/100?img=12",
      message: "reported signs and symptoms",
      time: "2 min ago",
      type: "info",
    },
    {
      id: 2,
      name: "Mary Banda",
      image: "https://i.pravatar.cc/100?img=32",
      message: "reported signs and symptoms",
      time: "8 min ago",
      type: "info",
    },
    {
      id: 3,
      name: "Peter Moyo",
      image: "https://i.pravatar.cc/100?img=15",
      message: "requires urgent follow-up checkup",
      time: "15 min ago",
      type: "urgent",
    },
    {
      id: 4,
      name: "Grace Chirwa",
      image: "https://i.pravatar.cc/100?img=44",
      message: "missed medication schedule",
      time: "30 min ago",
      type: "warning",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="
        fixed top-0 right-0 z-50 
        left-[--sidebar-width] group-data-[state=collapsed]/sidebar-wrapper:left-[--sidebar-width-icon]
        h-20 px-8 flex items-center justify-end
        border-b border-border/60
        bg-card/20 backdrop-blur-xl
        transition-all duration-300 ease-in-out
      "
    >
      <div className="flex items-center gap-4 relative">

        {/* =========================
            🌙 DARK MODE TOGGLE
        ========================== */}
        <button
          onClick={toggleTheme}
          className="
            h-11 w-11 rounded-2xl border border-border/60
            bg-card hover:bg-muted/40
            flex items-center justify-center
            transition
          "
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-muted-foreground" />
          )}
        </button>

        {/* =========================
            🔔 NOTIFICATIONS
        ========================== */}
        <button
          onClick={() => setOpen(!open)}
          className="
            relative h-11 w-11 rounded-2xl border border-border/60
            bg-card hover:bg-muted/40
            flex items-center justify-center
            transition
          "
        >
          <Bell className="h-5 w-5 text-muted-foreground" />

          <span className="
            absolute -top-1 -right-1
            h-[18px] min-w-[18px]
            px-1 rounded-full
            bg-red-500 text-white
            text-[10px] font-semibold
            flex items-center justify-center
          ">
            4
          </span>
        </button>

        {/* Notifications Panel */}
        {open && (
          <NotificationsPanel
            panelRef={panelRef}
            notifications={notifications}
          />
        )}

        {/* =========================
            👤 PROFILE
        ========================== */}
        <ProfileDropdown
          doctorProfile={doctorProfile}
          onSignOut={onSignOut}
        />
      </div>
    </header>
  );
};