import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// Layout
import { AppLayout } from "@/pages/administrator/AdminMainLayout";

// Placeholder Page
import AdminDashboardComingSoon from "@/pages/administrator/dashboard";

const AdministratorRoutes = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<AdminDashboardComingSoon />} />

          <Route
            path="registration"
            element={<AdminDashboardComingSoon />}
          />

          <Route
            path="doctor"
            element={<AdminDashboardComingSoon />}
          />

          <Route
            path="manage"
            element={<AdminDashboardComingSoon />}
          />

          <Route
            path="profile"
            element={<AdminDashboardComingSoon />}
          />

          <Route
            path="settings"
            element={<AdminDashboardComingSoon />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default AdministratorRoutes;