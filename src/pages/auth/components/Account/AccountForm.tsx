import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { actionBtnClass } from "@/pages/doctor/components/Profile/form-actions/styles";

export const AccountForm = () => {
  const [form, setForm] = useState({
    email: "",
    defaultPassword: "",
    newPassword: "",
  });

  const [showDefaultPassword, setShowDefaultPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(form);
    // Simulate loading like in LoginForm
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleCreateAccount}
      className="space-y-4 mt-5 bg-card/70 backdrop-blur-md border border-border/40 rounded-xl p-5 md:p-6 shadow-sm"
    >
      {/* Email */}
      <div className="space-y-1">
        <Label htmlFor="email" className="text-xs md:text-sm font-medium">
          Email Address
        </Label>

        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          className="h-9 text-sm"
          required
          disabled={isLoading}
        />
      </div>

      {/* Default Password */}
      <div className="space-y-1">
        <Label htmlFor="defaultPassword" className="text-xs md:text-sm font-medium">
          Default Password
        </Label>

        <div className="relative">
          <Input
            id="defaultPassword"
            type={showDefaultPassword ? "text" : "password"}
            name="defaultPassword"
            placeholder="Default password"
            value={form.defaultPassword}
            onChange={handleChange}
            className="h-9 pr-14 text-sm"
            required
            disabled={isLoading}
          />

          <button
            type="button"
            onClick={() => setShowDefaultPassword(!showDefaultPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-muted-foreground hover:text-foreground transition"
            disabled={isLoading}
          >
            {showDefaultPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* New Password */}
      <div className="space-y-1">
        <Label htmlFor="newPassword" className="text-xs md:text-sm font-medium">
          New Password
        </Label>

        <div className="relative">
          <Input
            id="newPassword"
            type={showNewPassword ? "text" : "password"}
            name="newPassword"
            placeholder=" new password"
            value={form.newPassword}
            onChange={handleChange}
            className="h-9 pr-14 text-sm"
            required
            disabled={isLoading}
          />

          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-muted-foreground hover:text-foreground transition"
            disabled={isLoading}
          >
            {showNewPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* Button */}
      <Button
        type="submit"
        className={`w-full ${actionBtnClass} h-10`}
        disabled={isLoading}
      >
        {isLoading ? (
          "Creating account..."
        ) : (
          <>
            <span>sign up</span>
           
          </>
        )}
      </Button>
    </form>
  );
};