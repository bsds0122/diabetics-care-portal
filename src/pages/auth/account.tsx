import React from "react";
import { AccountHeader } from "@/pages/auth/components/Account/AccountHeader";
import { AccountForm } from "@/pages/auth/components/Account/AccountForm";
import { AccountFooter } from "@/pages/auth/components/Account/AccountFooter";

const CreateAccount = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10">

      <div className="relative bg-card text-foreground shadow-sm rounded-xl p-6 md:p-7 w-full max-w-sm border border-border">

        {/* BACK BUTTON */}
        <AccountHeader />

        {/* HEADER */}
        <div className="text-center mt-5 mb-5 space-y-1.5">

          <h2 className="text-lg md:text-xl font-semibold">
            Create New Account
          </h2>

          <p className="text-xs md:text-sm text-muted-foreground">
            Your credentials will be used to log in securely
          </p>

        </div>

        {/* FORM */}
        <div className="space-y-4">
          <AccountForm />
        </div>

        {/* FOOTER */}
        <div className="mt-4">
          <AccountFooter />
        </div>

      </div>

    </div>
  );
};

export default CreateAccount;