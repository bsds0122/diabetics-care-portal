import axios from "axios";
import { BASE_URL } from "@/apis/base";
import { LoginCredentials } from "@/types/auth";

/**
 * Clean login result returned to hooks
 */
export interface LoginResult {
  statusCode: number;
  message: string;
  token: string | null;
  role: string | null;
  
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResult> => {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, {
      email: credentials.email.trim().toLowerCase(),
      password: credentials.password.trim(),
    });

    const api = response.data;

    return {
      statusCode: api.status_code,
      message: api.details,
      token: api?.data?.access_token,
      role: api?.data?.role,
     
    };
  },

  forgotPassword: async (email: string) => {
    const response = await axios.post(
      `${BASE_URL}/api/auth/forgot-password`,
      { email: email.trim().toLowerCase() }
    );

    const api = response.data;
    return {
      statusCode: api.status_code,
      message: api.details,
    };


  },
};