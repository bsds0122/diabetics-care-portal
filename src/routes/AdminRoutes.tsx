import { Routes, Route } from "react-router-dom";

import { AppLayout } from "@/pages/administrator/components/Layout/AdminMainLayout";

import DashboardPage from "@/pages/administrator/Dashboard";
import UserManagement from "@/pages/administrator/Manage";
import DoctorRegistrationForm from "@/pages/administrator/Registration";

const AdministratorRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<DashboardPage />} />

        <Route path="registration" element={<DoctorRegistrationForm />} />
        <Route path="manage" element={<UserManagement />} />
      </Route>
    </Routes>
  );
};

export default AdministratorRoutes;