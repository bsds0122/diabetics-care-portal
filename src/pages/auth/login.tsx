import React from "react";
import { LoginHeader } from "@/pages/auth/components/Login/LoginHeader";
import { LoginForm } from "@/pages/auth/components/Login/LoginForm";
import { LoginFooter } from "@/pages/auth/components/Login/LoginFooter";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">

      <div className="bg-card border border-border rounded-2xl p-5 md:p-6 w-full max-w-sm shadow-sm relative">

        {/* BACK BUTTON */}
        <div className="absolute top-3 left-3">
          <LoginHeader />
        </div>

        {/* LOGO SECTION */}
        <div className="flex flex-col items-center mt-4 mb-4 space-y-1.5">

          {/* LOGO RING */}
          <div className="h-14 w-14 rounded-full p-[3px] bg-gradient-to-r from-blue-500 to-black flex items-center justify-center">

            <div className="h-full w-full rounded-full bg-card flex items-center justify-center overflow-hidden">

              <img
                src="https://i.ibb.co/Ld6jX0px/Screenshot-2026-04-03-185141.png"
                alt="Hospital Logo"
                className="h-8 w-8 object-cover rounded-full"
              />

            </div>

          </div>

          <p className="text-xs text-muted-foreground">
            Log in to your account
          </p>

        </div>

        {/* FORM */}
        <div className="space-y-3">
          <LoginForm />
        </div>

        {/* FOOTER */}
        <div className="mt-3">
          <LoginFooter />
        </div>

      </div>

    </div>
  );
};

export default LoginPage;