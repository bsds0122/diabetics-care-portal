import { Link } from "react-router-dom";

export const ForgotPasswordFooter = () => {
  return (
    <p className="text-center text-xs text-muted-foreground mt-4">
      Remember your password?{" "}
      <Link
        to="/login"
        className="text-blue-600 font-medium hover:underline underline-offset-2 transition"
      >
        Back to Login
      </Link>
    </p>
  );
};