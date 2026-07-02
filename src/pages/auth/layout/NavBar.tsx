import { NavLink, Link } from "react-router-dom";
import {
  Home,
  Info,
  Phone,
  ArrowRight,
} from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact-us", label: "Contact Us", icon: Phone },
] as const;

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/10 bg-primary-deep/95 backdrop-blur-md text-white">
      
      <div className="container mx-auto grid h-20 grid-cols-3 items-center px-4 lg:px-6">

        {/* ================= LEFT (EMPTY SLOT FOR BALANCE) ================= */}
        <div />

        {/* ================= CENTER NAV LINKS ================= */}
        <ul className="hidden md:flex justify-center items-center gap-2">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive ? "bg-white/10" : "hover:bg-white/5"
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />

                  <span
                    className="
                      bg-gradient-to-r
                      from-cyan-400
                      via-sky-300
                      to-blue-400
                      bg-clip-text
                      text-transparent
                      group-hover:opacity-90
                    "
                  >
                    {link.label}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* ================= RIGHT CTA ================= */}
        <div className="flex justify-end">
          <Link
            to="/get-started"
            className="
              group inline-flex items-center gap-2 rounded-xl
              bg-white px-5 py-2.5 text-sm font-semibold
              transition-all duration-200
              hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-white/40
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-sky-300
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Get Started
            </span>

            <ArrowRight className="h-4 w-4 text-sky-400 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </nav>
  );
}