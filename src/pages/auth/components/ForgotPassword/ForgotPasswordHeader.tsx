import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const ForgotPasswordHeader = () => {
  return (
    <Link
      to="/"
      className="absolute left-4 top-4 flex items-center justify-center p-1.5 rounded-full 
      bg-card/60 backdrop-blur-md border border-border 
      hover:border-blue-500/40 
      hover:bg-blue-500/10 transition-all duration-200 active:scale-95"
    >
      <ArrowLeft className="w-4 h-4 text-blue-600" />
    </Link>
  );
};