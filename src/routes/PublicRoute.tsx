import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token && role) {
    const roleLower = role.toLowerCase();
    
    if (roleLower.includes("admin")) {
      return <Navigate to="/admin" replace />;
    }
    if (roleLower.includes("doctor")) {
      return <Navigate to="/doctor" replace />;
    }
    if (roleLower.includes("patient")) {
      return <Navigate to="/patient" replace />;
    }

    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
