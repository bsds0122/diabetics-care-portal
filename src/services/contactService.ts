import axios from "axios";
import { BASE_URL } from "@/apis/base";

export interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  statusCode: number;
  message: string;
}

export const contactService = {
  submitContactForm: async (
    data: ContactFormData
  ): Promise<ContactResponse> => {
    const response = await axios.post(
      `${BASE_URL}/api/admin/dashboard/contact`,
      {
        email: data.email.trim().toLowerCase(),
        subject: data.subject.trim(),
        message: data.message.trim(),
      }
    );

    const api = response.data;

    return {
      statusCode: api.status_code,
      message: api.details,
    };
  },
};