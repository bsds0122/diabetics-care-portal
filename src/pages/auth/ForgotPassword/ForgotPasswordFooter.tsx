import { Link } from "react-router-dom";

export const ForgotPasswordFooter = () => {
  return (
    <p className="text-center text-xs text-muted-foreground mt-4">
      Remember your password?{" "}
      <Link
        to="/login"
        className="font-medium text-primary transition-colors hover:underline"
      >
        Back to Sign In
      </Link>
    </p>
  );
};