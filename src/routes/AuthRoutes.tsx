import { Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/auth/home";
import LoginPage from "@/pages/auth/login";
import CreateAccount from "@/pages/auth/account";
import ForgotPassword from "@/pages/auth/forgot-password";
import AboutPage from "@/pages/auth/about";
import ContactUsPage from "@/pages/auth/contact-us";

const AuthRoutes = () => {
  return (
    <Routes>
      {/* Default landing page */}
      <Route index element={<LandingPage />} />

      {/* Auth pages */}
      <Route path="login" element={<LoginPage />} />
      <Route path="account" element={<CreateAccount />} />
      <Route path="forgot-password" element={<ForgotPassword />} />

      {/* Info pages */}
      <Route path="about" element={<AboutPage />} />
      <Route path="contact-us" element={<ContactUsPage />} />

      {/* Fallback */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};

export default AuthRoutes;