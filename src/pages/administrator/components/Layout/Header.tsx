import { Moon, Sun, LogOut, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = ({ onSignOut }) => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const notifications = [
    {
      id: 1,
      message: "New patient registered",
      time: "2m ago",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      message: "Assessment completed",
      time: "10m ago",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      message: "New appointment scheduled",
      time: "1h ago",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <header className="fixed top-0 right-0 z-50 h-20 flex items-center justify-between px-8 left-[--sidebar-width] group-data-[state=collapsed]/sidebar-wrapper:left-[--sidebar-width-icon] bg-background/70 backdrop-blur-xl border-b border-border shadow-sm transition-all duration-300">

      {/* LEFT */}
      <div className="text-lg font-semibold text-foreground">
        Admin Dashboard
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">

        {/* 🌙 THEME */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full border-border bg-background hover:bg-muted transition"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="w-4 h-4 text-yellow-500" />
          ) : (
            <Moon className="w-4 h-4 text-primary" />
          )}
        </Button>

        {/* 🔔 NOTIFICATIONS */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="relative rounded-full border-border bg-background hover:bg-muted transition"
            >
              <Bell className="w-4 h-4 text-foreground" />

              {/* Badge (NO RED → softer color) */}
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {notifications.length}
              </span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-80 p-2 rounded-2xl border border-border bg-card shadow-xl"
          >
            <div className="px-3 py-2 text-sm font-semibold text-foreground">
              Notifications
            </div>

            {notifications.map((n) => (
              <DropdownMenuItem
                key={n.id}
                className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-muted transition"
              >
                <img
                  src={n.avatar}
                  alt="avatar"
                  className="w-9 h-9 rounded-full object-cover border border-border"
                />

                <div className="flex flex-col">
                  <span className="text-sm text-foreground">
                    {n.message}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {n.time}
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 🚪 LOGOUT */}
        <Link to="/login" onClick={onSignOut}>
          <Button className="bg-primary hover:bg-primary/90 text-white px-4 flex items-center gap-2 rounded-md transition">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </Link>

      </div>
    </header>
  );
};