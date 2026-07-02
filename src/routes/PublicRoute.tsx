import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // If user is already logged in → redirect to dashboard
  if (token && role) {
    const roleLower = role.toLowerCase();

    if (roleLower.includes("admin")) {
      return <Navigate to="/administrator" replace />;
    }

    if (roleLower.includes("doctor")) {
      return <Navigate to="/doctor" replace />;
    }

    // fallback (unknown role)
    return <Navigate to="/" replace />;
  }

  // not logged in → allow access to login/register
  return <Outlet />;
};

export default PublicRoute;