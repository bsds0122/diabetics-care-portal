import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { actionBtnClass } from "@/pages/doctor/components/Profile/form-actions/styles";

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Reset link sent to:", email);

    await new Promise((resolve) => setTimeout(resolve, 700));

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleReset} className="space-y-4 mt-4">

      {/* Email */}
      <div className="space-y-1">
        <Label htmlFor="email" className="text-xs font-medium text-muted-foreground">
          Email Address
        </Label>

        <Input
          id="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-9 text-sm"
          required
          disabled={isLoading}
        />
      </div>

      {/* Button */}
      <Button
        type="submit"
        className={`w-full h-9 text-sm ${actionBtnClass}`}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Reset Link"}
      </Button>

    </form>
  );
};