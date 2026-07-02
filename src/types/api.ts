/**
 * Unified API Response structure used by backend
 */
export interface ApiResponse<T = unknown> {
  status_code: number;
  details: string;
  data: T;
}

/**
 * Generic paginated response
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
}

/**
 * API Error structure
 */
export interface ApiError {
  response?: {
    data?: {
      message?: string;
      detail?: string | { msg: string }[];
      details?: string | { msg: string }[];
      status_code?: number;
    };
    status?: number;
  };
  message?: string;
}

/**
 * Hook state for API requests
 */
export interface ApiRequestState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  statusCode: number | null;
}

/**
 * Hook return type for standard async operations
 */
export interface UseAsyncReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  statusCode: number | null;
  execute: () => Promise<T | null>;
  reset: () => void;
}

/**
 * Hook return type for mutations (POST, PUT, DELETE)
 */
export interface UseMutationReturn<T, V = any> {
  data: T | null;
  loading: boolean;
  error: string | null;
  statusCode: number | null;
  mutate: (variables?: V) => Promise<T | null>;
  reset: () => void;
}
