import { Link } from "react-router-dom";

export const LoginFooter = () => {
  return (
    <p className="text-center text-xs md:text-sm text-muted-foreground mt-4">
      Don’t have an account?{" "}
      <Link
        to="/account"
        className="font-medium text-blue-600 hover:text-blue-700 hover:underline transition"
      >
        sign up
      </Link>
    </p>
  );
};