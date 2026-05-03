import { Link } from "react-router-dom";

export const AccountFooter = () => {
  return (
    <p className="text-center text-xs md:text-sm text-muted-foreground mt-5">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-primary font-medium hover:text-primary/80 hover:underline underline-offset-4 transition"
      >
        Sign In
      </Link>
    </p>
  );
};