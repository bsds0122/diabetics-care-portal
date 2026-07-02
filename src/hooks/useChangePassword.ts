import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { changePasswordService } from "@/services/changePasswordService";

export const useChangePassword = () => {
  const navigate = useNavigate();

  const [defaultPassword, setDefaultPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showDefaultPassword, setShowDefaultPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const toggleDefaultPasswordVisibility = () =>
    setShowDefaultPassword((prev) => !prev);

  const toggleNewPasswordVisibility = () =>
    setShowNewPassword((prev) => !prev);

  const handleChangePassword = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      setIsLoading(true);

      const response =
        await changePasswordService({
          default_password: defaultPassword,
          new_password: newPassword,
        });

      setSuccess(response.details);

      setDefaultPassword("");
      setNewPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(
        err?.response?.data?.detail ||
          err?.response?.data?.details ||
          "Failed to update password."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
  };
};