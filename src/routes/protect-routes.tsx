import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  allowedRole?: string;
}

const ProtectedRoute = ({ allowedRole }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // not logged in
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // wrong role
  if (allowedRole && role) {
    const roleLower = role.toLowerCase();
    const allowedLower = allowedRole.toLowerCase();
    
    if (!roleLower.includes(allowedLower)) {
      return <Navigate to="/" replace />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;