import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "@/services/authService";
import { LoginCredentials } from "@/types/auth";
import { getErrorMessage } from "@/utils/errorHandler";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await authService.login(credentials);

      // Save auth data
      if (result.token) {
        localStorage.setItem("token", result.token);
      }

      if (result.role) {
        localStorage.setItem("role", result.role);
      }

      // SUCCESS MESSAGE FIRST
      setSuccess("Login successful. Redirecting...");

      // WAIT BEFORE REDIRECT (UX IMPROVEMENT)
      setTimeout(() => {
        switch (result.role) {
          case "doctor":
            navigate("/doctor/", { replace: true });
            break;

          case "admin":
          case "administrator":
            navigate("/administrator/", { replace: true });
            break;

          default:
            navigate("/", { replace: true });
        }
      }, 2000);

      return result;
    } catch (err) {
      const errorMsg = getErrorMessage(err);
      setError(errorMsg);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ email, password });
  };

  return {
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
    login,
  };
}