import React from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useChangePassword } from "@/hooks/useChangePassword";

const SendingText = () => {
  return (
    <span className="flex items-center gap-1">
      Updating
      <span className="animate-pulse">.</span>
      <span className="animate-pulse [animation-delay:150ms]">
        .
      </span>
      <span className="animate-pulse [animation-delay:300ms]">
        .
      </span>
    </span>
  );
};

export default function AccountForm() {
  const {
    defaultPassword,
    setDefaultPassword,

    newPassword,
    setNewPassword,

    showDefaultPassword,
    showNewPassword,

    toggleDefaultPasswordVisibility,
    toggleNewPasswordVisibility,

    isLoading,
    error,
    success,

    handleChangePassword,
  } = useChangePassword();

  return (
    <div className="space-y-6">
      {/* STATUS */}
      <div className="text-center">
        {error && (
          <p className="text-sm font-medium text-red-500">
            {error}
          </p>
        )}

        {success && (
          <p className="text-sm font-medium text-green-500">
            {success}
          </p>
        )}
      </div>

      <form
        onSubmit={handleChangePassword}
        className="space-y-5"
      >
        {/* DEFAULT PASSWORD */}
        <div className="space-y-2">
          <Label htmlFor="defaultPassword">
            Default Password
          </Label>

          <div className="relative">
            <Input
              id="defaultPassword"
              type={
                showDefaultPassword
                  ? "text"
                  : "password"
              }
              value={defaultPassword}
              onChange={(e) =>
                setDefaultPassword(
                  e.target.value
                )
              }
              placeholder="Enter default password"
              disabled={isLoading}
              required
              className="h-11 pr-10"
            />

            <button
              type="button"
              onClick={
                toggleDefaultPasswordVisibility
              }
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showDefaultPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* NEW PASSWORD */}
        <div className="space-y-2">
          <Label htmlFor="newPassword">
            New Password
          </Label>

          <div className="relative">
            <Input
              id="newPassword"
              type={
                showNewPassword
                  ? "text"
                  : "password"
              }
              value={newPassword}
              onChange={(e) =>
                setNewPassword(
                  e.target.value
                )
              }
              placeholder="Enter new password"
              disabled={isLoading}
              required
              className="h-11 pr-10"
            />

            <button
              type="button"
              onClick={
                toggleNewPasswordVisibility
              }
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showNewPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* SUBMIT */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-11"
        >
          {isLoading ? (
            <SendingText />
          ) : (
            "Update Password"
          )}
        </Button>

        {/* RETURN */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Do you want to return?{" "}
            <Link
              to="/login"
              className="font-medium text-primary hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}