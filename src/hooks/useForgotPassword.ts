import { useState } from "react";
import { authService } from "@/services/authService";
import { getErrorMessage } from "@/utils/errorHandler";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await authService.forgotPassword(email);

      if (res.statusCode === 200) {
        setSuccess(res.message);
        setEmail("");

        // ✅ auto hide success message after 3 seconds
        setTimeout(() => {
          setSuccess(null);
        }, 3000);

      } else {
        setError(res.message);

        // ✅ auto hide error message after 3 seconds
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    } catch (err) {
      const errorMsg = getErrorMessage(err);
      setError(errorMsg);

      // ✅ auto hide error after 3 seconds
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    isLoading,
    success,
    error,
    handleForgotPassword,
  };
};