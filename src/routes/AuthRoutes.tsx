import { Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/auth/landing";
import AboutPage from "@/pages/auth/about/about";
import ContactUsPage from "@/pages/auth/contract/contact";

import AuthLayout from "@/pages/auth/layout/AuthLayout";

import { GetStarted } from "@/pages/auth/get-started/get-started";

import LoginPage from "@/pages/auth/Login/Login";
import ForgotPasswordPage from "@/pages/auth/ForgotPassword/Forgotpassword";
import AccountPage from "@/pages/auth/account/AccountPage";

const AuthRoutes = () => {
  return (
    <Routes>
      {/* WEBSITE PAGES */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Route>

      {/* GET STARTED */}
      <Route path="/get-started" element={<GetStarted />} />

      {/* AUTH PAGES */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/account" element={<AccountPage />} />

      {/* FALLBACK */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};

export default AuthRoutes;