
import { ApiError } from "@/types/api";

/**
 * Extract readable error message from API response
 */
export const getErrorMessage = (error: ApiError): string => {
    const data = error.response?.data;
    if (typeof data?.details === "string") {
      return data.details;
    }
    if (typeof data?.detail === "string") {
      return data.detail;
    }
    if (typeof data?.message === "string") {
      return data.message;
    }
    return "Unable to load dashboard data";
  };