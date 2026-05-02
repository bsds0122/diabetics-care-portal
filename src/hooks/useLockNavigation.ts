import { useEffect } from "react";

/**
 * Hook to effectively "disable" the browser's back and forward buttons
 * by trapping the history state.
 */
export const useLockNavigation = () => {
  useEffect(() => {
    // 1. Push a dummy state so there's always something "forward" or "back" to trap
    window.history.pushState(null, "", window.location.href);

    const handlePopState = (event: PopStateEvent) => {
      // 2. When the user clicks back/forward, push them back to the current state
      window.history.pushState(null, "", window.location.href);
    };

    // Listen for the popstate event (back/forward clicks)
    window.addEventListener("popstate", handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
};
