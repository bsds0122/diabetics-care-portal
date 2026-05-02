import React from "react";
import { Home, Info, Phone, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { actionBtnClass } from "@/pages/doctor/components/Profile/form-actions/styles";


export const LandingHeader = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LEFT - THEME TOGGLE (BIGGER & CLEAN) */}
        <div className="flex items-center gap-4">

          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-4 py-2 rounded-lg border border-border bg-background hover:bg-muted transition"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Dark Mode</span>
              </>
            )}
          </button>

        </div>

        {/* CENTER NAVIGATION (LARGER TEXT) */}
        <nav className="flex items-center gap-14">

          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 text-base font-medium transition"
          >
            <Home size={20} />
            Home
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 text-base font-medium transition"
          >
            <Info size={20} />
            About
          </Link>

          <Link
            to="/contact-us"
            className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 text-base font-medium transition"
          >
            <Phone size={20} />
            Contact
          </Link>

        </nav>

        {/* RIGHT - GET STARTED (BIGGER BUTTON) */}
        <div>

          <Link
            to="/login"
            className={actionBtnClass }
          >
            Get Started
          </Link>

        </div>

      </div>

    </header>
  );
};