import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useForgotPassword } from "@/hooks/useForgotPassword";

const ForgotPasswordForm = () => {
  const {
    email,
    setEmail,
    isLoading,
    success,
    error,
    handleForgotPassword,
  } = useForgotPassword();

  return (
    <form
      onSubmit={handleForgotPassword}
      className="w-full max-w-md mx-auto space-y-6 animate-in fade-in duration-500"
    >
      {/* HEADER */}
      <div className="space-y-2 text-center">
       
        <p className="text-sm text-muted-foreground">
          Enter your email to receive a password reset link
        </p>

        {/* STATUS MESSAGES */}
        <div className="space-y-2 mt-3">
          {error && (
            <p className="text-sm text-red-500 font-medium">
              {error}
            </p>
          )}

          {!error && isLoading && (
            <p className="text-sm text-blue-500 font-medium">
              Sending reset link...
            </p>
          )}

          {success && (
            <p className="text-sm text-green-500 font-medium">
              {success}
            </p>
          )}
        </div>
      </div>

      {/* EMAIL INPUT */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          autoComplete="email"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-10 font-medium"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Reset Link"
        )}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;