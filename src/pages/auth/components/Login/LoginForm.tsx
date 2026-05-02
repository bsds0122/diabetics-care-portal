import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { actionBtnClass } from "@/pages/doctor/components/Profile/form-actions/styles";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const cleanEmail = email.trim().toLowerCase();
      const cleanPassword = password.trim();

      let role = "";
      const token = "mock-token-123";

      if (cleanEmail === "admin@hospital.com" && cleanPassword === "Admin_Care_2026_Secure!") {
        role = "admin";
      } else if (cleanEmail === "doctor@hospital.com" && cleanPassword === "Doctor_Care_2026_Secure#") {
        role = "doctor";
      } else if (cleanEmail === "patient@hospital.com" && cleanPassword === "Patient_Care_2026_Secure@") {
        role = "patient";
      } else {
        setIsLoading(false);
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      await delay(800);

      const routes: Record<string, string> = {
        admin: "/admin",
        doctor: "/doctor",
        patient: "/patient",
      };

      navigate(routes[role], { replace: true });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-4 mt-6 bg-card border border-border rounded-xl p-5 md:p-6 shadow-sm"
      autoComplete="off"
    >
      {/* EMAIL */}
      <div className="space-y-1.5">
        <Label className="text-sm">Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
          autoComplete="off"
          placeholder="example@hospital.com"
          className="h-9 text-sm"
        />
      </div>

      {/* PASSWORD */}
      <div className="space-y-1.5">
        <Label className="text-sm">Password</Label>

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            required
            autoComplete="off"
            placeholder="Enter your password"
            className="h-9 text-sm pr-14"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-[11px] text-muted-foreground hover:text-primary transition"
            disabled={isLoading}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* FORGOT PASSWORD */}
        <div className="text-right mt-1">
          <Link
            to="/forgot-password"
            className="text-[11px] text-primary/80 hover:text-primary hover:underline transition"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      {/* LOGIN BUTTON */}
      <Button
        type="submit"
        className={`w-full ${actionBtnClass}`}
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Log in"}
      </Button>

      {/* DIVIDER */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">or continue with</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* SOCIAL LOGIN */}
      <div className="grid grid-cols-2 gap-3">

        {/* GOOGLE */}
        <Button
          type="button"
          onClick={handleGoogleLogin}
          className="h-9 text-sm bg-white text-black border border-border hover:bg-gray-50 transition flex items-center justify-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-4 h-4"
            alt="Google"
          />
          Google
        </Button>

        {/* FACEBOOK */}
        <Button
          type="button"
          onClick={handleFacebookLogin}
          className="h-9 text-sm bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/30 hover:bg-[#1877F2]/15 transition flex items-center justify-center gap-2"
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