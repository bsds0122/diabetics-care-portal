import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { doctorSettingsService } from "@/services/doctor-settings";
import {
  getErrorMessage,
  parseApiResponse,
  isSuccessResponse,
} from "@/utils/errorHandler";



export const useSettings = () => {
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState<number | null>(null);

  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const { toast } = useToast();

  /**
   * Handle input changes
   */
  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };




  /**
   * Update password
   */
  const handleUpdatePassword = async () => {
    const { newPassword, confirmPassword } =
      passwordData;

    /**
     * Validation
     */
    if (!newPassword || !confirmPassword) {
      toast({
        title: "Validation Error",
        description:
          "Please fill in both password fields.",
        variant: "destructive",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const result =
        await doctorSettingsService.updatePassword(
          newPassword
        );

      const { statusCode: code, details } =
        parseApiResponse(result);

      setStatusCode(code);

      if (isSuccessResponse(result)) {
        toast({
          title: "Success",
          description:
            details ||
            "Password updated successfully.",
        });

        setPasswordData({
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        toast({
          title: "Update Failed",
          description:
            details ||
            "Password update failed.",
          variant: "destructive",
        });
      }
    } catch (err) {
      const msg = getErrorMessage(err);

      toast({
        title: "Update Error",
        description: msg,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    statusCode,
    passwordData,
    handlePasswordChange,
    handleUpdatePassword,
  };
};