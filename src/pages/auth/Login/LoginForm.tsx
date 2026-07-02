import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useLogin } from "@/hooks/useLogin";

/* ================= LOADING TEXT ================= */
const SendingText = () => {
  return (
    <span className="flex items-center gap-1">
      Sending
      <span className="animate-pulse">.</span>
      <span className="animate-pulse [animation-delay:150ms]">.</span>
      <span className="animate-pulse [animation-delay:300ms]">.</span>
    </span>
  );
};

export const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    isLoading,
    error,
    success,
    handleLogin,
  } = useLogin();

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <ShieldCheck className="h-6 w-6 text-primary" />
        </div>

        <h2 className="text-2xl font-semibold">
          Welcome Back
        </h2>

        {/* STATUS MESSAGES */}
        {error && (
          <p className="mt-2 text-sm font-medium text-red-500">
            {error}
          </p>
        )}

        {!error && isLoading && (
          <p className="mt-2 text-sm font-medium text-blue-500">
            <SendingText />
          </p>
        )}

        {success && (
          <p className="mt-2 text-sm font-medium text-green-500">
            {success}
          </p>
        )}

        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to access the Diabetes Management dashboard.
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleLogin}
        className="space-y-5"
        autoComplete="off"
      >
        {/* EMAIL */}
        <div className="space-y-2">
          <Label htmlFor="email" className="font-medium">
            Email Address
          </Label>

          <Input
            id="email"
            type="email"
            placeholder="doctor@hospital.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required
            autoComplete="email"
            className="h-11"
          />
        </div>

        {/* PASSWORD */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="font-medium">
              Password
            </Label>

            <Link
              to="/forgot-password"
              className="text-xs font-medium text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
              autoComplete="current-password"
              className="h-11 pr-10"
            />

            <button
              type="button"
              onClick={togglePasswordVisibility}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? (
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
          className="h-11 w-full font-medium"
        >
          {isLoading ? <SendingText /> : "Sign In"}
        </Button>

        {/* SECONDARY ACTIONS */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between text-xs">
            <Link
            
              to="/get-started"
              className="font-medium text-primary transition-colors hover:underline"
            > Return to Previous
             
            </Link>

            <Link
              to="/account"
              className="font-medium text-primary transition-colors hover:underline"
            >
              Update Password
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;