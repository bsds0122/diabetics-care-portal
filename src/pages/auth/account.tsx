import React from "react";

import { AccountForm } from "@/pages/auth/components/Account/AccountForm";
import { AccountFooter } from "@/pages/auth/components/Account/AccountFooter";

const CreateAccount = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10">

      <div className="relative bg-card text-foreground shadow-sm rounded-xl p-6 md:p-7 w-full max-w-sm border border-border">

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