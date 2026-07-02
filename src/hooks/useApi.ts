/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import { getErrorMessage, parseApiResponse, isSuccessResponse } from "@/utils/errorHandler";

/**
 * Generic hook for async API operations with proper error handling
 * Handles state for data, loading, error, and status code
 */
export const useAsync = <T = any>(
  asyncFunction: () => Promise<any>,
  immediate = true
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    setStatusCode(null);

    try {
      const response = await asyncFunction();
      const { statusCode: code, details, data: parsedData } = parseApiResponse(response);

      setStatusCode(code);

      if (isSuccessResponse(response)) {
        setData(parsedData as T);
        return parsedData;
      } else {
        const errorMsg = details || "An error occurred";
        setError(errorMsg);
        return null;
      }
    } catch (err: any) {
      const errorMsg = getErrorMessage(err);
      setError(errorMsg);
      return null;
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
    setStatusCode(null);
  }, []);

  // Execute on mount if immediate
  // Note: This uses a simplified effect to avoid dependencies
  if (immediate && !loading && !data && !error) {
    execute();
  }

  return {
    data,
    loading,
    error,
    statusCode,
    execute,
    reset,
  };
};

/**
 * Generic hook for mutation operations (POST, PUT, DELETE)
 */
export const useMutation = <T = any, V = any>(
  mutationFunction: (variables?: V) => Promise<any>
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);

  const mutate = useCallback(
    async (variables?: V) => {
      setLoading(true);
      setError(null);
      setStatusCode(null);

      try {
        const response = await mutationFunction(variables);
        const { statusCode: code, details, data: parsedData } = parseApiResponse(response);

        setStatusCode(code);

        if (isSuccessResponse(response)) {
          setData(parsedData as T);
          return parsedData;
        } else {
          const errorMsg = details || "An error occurred";
          setError(errorMsg);
          return null;
        }
      } catch (err: any) {
        const errorMsg = getErrorMessage(err);
        setError(errorMsg);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [mutationFunction]
  );

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
    setStatusCode(null);
  }, []);

  return {
    data,
    loading,
    error,
    statusCode,
    mutate,
    reset,
  };
};
