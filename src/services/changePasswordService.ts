import axios from "axios";
import { BASE_URL } from "@/apis/base";

export interface ChangePasswordPayload {
  default_password: string;
  new_password: string;
}

export const changePasswordService = async (
  payload: ChangePasswordPayload
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/change-password`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Change password error:",
      error.response?.data || error.message
    );
    throw error;
  }
};