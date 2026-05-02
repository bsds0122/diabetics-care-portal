import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const LoginHeader = () => {
  return (
    <Link
      to="/"
      className="absolute left-4 top-4 flex items-center justify-center 
      text-blue-600 hover:text-indigo-600
      transition-all duration-300 ease-in-out hover:scale-110 active:scale-95"
    >
      <ArrowLeft className="w-5 h-5" />
    </Link>
  );
};