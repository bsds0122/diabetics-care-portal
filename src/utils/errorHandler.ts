/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiError } from "@/types/api";

/**
 * Extract user-friendly error message from API error or response
 */
export const getErrorMessage = (error: any): string => {
  // Handle API response with error status
  if (error?.status_code && error?.status_code >= 400) {
    return error?.details || "An error occurred";
  }

  // Axios error with response
  if (error?.response?.data) {
    const data = error.response.data;

    // Try status_code and details (backend standard)
    if (data.status_code && data.status_code >= 400) {
      return data.details || "An error occurred";
    }

    // Try details field first
    if (typeof data.details === "string") {
      return data.details;
    }

    // Try message field
    if (typeof data.message === "string") {
      return data.message;
    }

    // Try detail field
    if (typeof data.detail === "string") {
      return data.detail;
    }

    // Handle array of error objects
    if (Array.isArray(data.detail)) {
      return data.detail.map((e: any) => e?.msg || String(e)).join(", ");
    }

    if (Array.isArray(data.details)) {
      return data.details.map((e: any) => e?.msg || String(e)).join(", ");
    }
  }

  // Generic error message
  if (error?.message) {
    return error.message;
  }

  return "An unexpected error occurred";
};

/**
 * Parse API response and extract status, details, and data
 */
export const parseApiResponse = <T = any>(response: any): {
  statusCode: number;
  details: string;
  data: T | null;
} => {
  const statusCode = response?.status_code || response?.status || 500;
  const details = response?.details || response?.message || "Unknown error";
  const data = response?.data || null;

  return { statusCode, details, data };
};

/**
 * Check if response is successful
 */
export const isSuccessResponse = (response: any): boolean => {
  const statusCode = response?.status_code || response?.status || 0;
  return statusCode >= 200 && statusCode < 300;
};
