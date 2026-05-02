import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { loginApi } from "@/services/authService";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const data = await loginApi(email, password);
      console.log("API Response Data:", data);

      // Robust data extraction
      const tokenData = data.token && typeof data.token === "object" ? data.token : data;
      
      const role = (
        data.role || 
        tokenData.role || 
        data.user?.role || 
        tokenData.user?.role || 
        data.user_type ||
        ""
      ).toString().toLowerCase();

      const token = typeof data.token === "string" 
        ? data.token 
        : (data.access_token || tokenData.access_token || data.token?.access_token || tokenData.token);

      const id = data.id || tokenData.id || data.user?.id || tokenData.user?.id;
      const expireTime = data.expire_time || data["expire time"] || tokenData.expire_time || tokenData["expire time"];

      if (!token) {
        throw new Error("No authentication token received");
      }

      // Store auth data
      localStorage.setItem("token", String(token));
      if (role) localStorage.setItem("role", role);
      if (id) localStorage.setItem("userId", String(id));
      if (expireTime) localStorage.setItem("expireTime", String(expireTime));

      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });

      // Redirect based on role
      if (role.includes("admin")) {
        navigate("/admin");
      } else if (role.includes("doctor")) {
        navigate("/doctor");
      } else if (role.includes("patient")) {
        navigate("/patient");
      } else {
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: `Unknown role: ${role}. Please contact support.`,
        });
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Login failed";

      toast({
        variant: "destructive",
        title: "Login Failed",
        description: message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
