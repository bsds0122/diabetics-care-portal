import React from "react";
import { ForgotPasswordHeader } from "@/pages/auth/components/ForgotPassword/ForgotPasswordHeader";
import { ForgotPasswordForm } from "@/pages/auth/components/ForgotPassword/ForgotPasswordForm";
import { ForgotPasswordFooter } from "@/pages/auth/components/ForgotPassword/ForgotPasswordFooter";

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-5">

      <div className="relative bg-card text-foreground shadow-xl rounded-2xl p-6 w-full max-w-sm border border-border">

    

        {/* Form */}
        <div className="mt-4">
          <ForgotPasswordForm />
        </div>

        {/* Footer */}
        <ForgotPasswordFooter />

      </div>

    </div>
  );
};

export default ForgotPassword;