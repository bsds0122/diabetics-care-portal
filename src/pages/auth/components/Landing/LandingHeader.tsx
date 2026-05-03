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

      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* LEFT - THEME TOGGLE (MODERN PILL) */}
        <div>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-2 py-1 rounded-full border border-border bg-background shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* ICON CIRCLE */}
            <div
              className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
                theme === "dark"
                  ? "bg-blue-600 text-white"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {theme === "dark" ? (
                <Moon className="w-4.5 h-4.5" />
              ) : (
                <Sun className="w-4.5 h-4.5" />
              )}
            </div>

            {/* LABEL */}
            <span className="text-sm font-medium pr-3">
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
          </button>
        </div>

        {/* CENTER NAVIGATION */}
        <nav className="flex items-center gap-16">

          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 text-lg font-medium transition"
          >
            <Home size={22} />
            Home
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 text-lg font-medium transition"
          >
            <Info size={22} />
            About
          </Link>

          <Link
            to="/contact-us"
            className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 text-lg font-medium transition"
          >
            <Phone size={22} />
            Contact
          </Link>

        </nav>

        {/* RIGHT - GET STARTED */}
        <div>
          <Link
            to="/login"
            className={`${actionBtnClass} text-base px-5 py-2.5`}
          >
            Get Started
          </Link>
        </div>

      </div>

    </header>
  );
};