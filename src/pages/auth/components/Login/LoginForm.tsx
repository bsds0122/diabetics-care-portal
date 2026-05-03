import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { actionBtnClass } from "@/pages/doctor/components/Profile/form-actions/styles";

export const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const email = form.email.trim().toLowerCase();
      const password = form.password.trim();

      const credentials: Record<string, string> = {
        "admin@hospital.com": "admin",
        "doctor@hospital.com": "doctor",
        "patient@hospital.com": "patient",
      };

      const validPasswords: Record<string, string> = {
        admin: "Admin_Care_2026_Secure!",
        doctor: "Doctor_Care_2026_Secure#",
        patient: "Patient_Care_2026_Secure@",
      };

      const role = credentials[email];

      if (!role || validPasswords[role] !== password) {
        setLoading(false);
        return;
      }

      localStorage.setItem("token", "mock-token-123");
      localStorage.setItem("role", role);

      await delay(600);

      navigate(`/${role}`, { replace: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-5 mt-6 bg-card border border-border rounded-xl p-6 shadow-sm"
      autoComplete="off"
    >
      {/* EMAIL */}
      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@hospital.com"
          disabled={loading}
          required
          className="h-10 text-sm"
        />
      </div>

      {/* PASSWORD */}
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>

        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            disabled={loading}
            required
            className="h-10 text-sm pr-16"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-2.5 text-xs text-muted-foreground hover:text-primary"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* LINKS */}
        <div className="flex items-center justify-between text-xs mt-1">
          <Link
            to="/"
            className="text-primary hover:text-primary transition"
          >
            Back to home
          </Link>

          <Link
            to="/forgot-password"
            className="text-primary/80 hover:text-primary transition"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      {/* LOGIN BUTTON */}
      <Button
        type="submit"
        disabled={loading}
        className={`w-full ${actionBtnClass}`}
      >
        {loading ? "Signing in..." : "Sign in"}
      </Button>

      {/* DIVIDER */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">
          or continue with
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* SOCIAL LOGIN */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          className="h-10 text-sm bg-white text-black border hover:bg-gray-50 flex items-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-4 h-4"
            alt="Google"
          />
          Google
        </Button>

        <Button
          type="button"
          className="h-10 text-sm bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/30 hover:bg-[#1877F2]/15 flex items-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
            className="w-4 h-4"
            alt="Facebook"
          />
          Facebook
        </Button>
      </div>
    </form>
  );
};