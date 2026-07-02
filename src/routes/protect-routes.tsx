import { Navigate, Outlet } from "react-router-dom";

import { ProtectedRouteProps } from "@/types/common";

const ProtectedRoute = ({ allowedRole }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // not logged in
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // wrong role - check if role is allowed
  if (allowedRole && role) {
    const roleLower = role.toLowerCase().trim();
    const allowedLower = allowedRole.toLowerCase().trim();
    
    // Check if user's role matches the allowed role
    if (roleLower !== allowedLower && !roleLower.includes(allowedLower)) {
      return <Navigate to="/" replace />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;