import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";

import { AppLayout } from "@/pages/doctor/DoctorMainLayout";

import Dashboard from "@/pages/doctor/Dashboard";
import Patients from "@/pages/doctor/Patients";
import MonitorPatientPage from "@/pages/doctor/monitor";
import Registration from "@/pages/doctor/Registration";
import Assessment from "@/pages/doctor/Assessment";
import Profile from "@/pages/doctor/Profile";
import Settings from "@/pages/doctor/settings";
import CardiovascularRiskResults from "@/pages/doctor/history";
import ManagePatients from "@/pages/doctor/manage";

const DoctorRoutes = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="registration" element={<Registration />} />
          <Route path="patients" element={<Patients />} />
          <Route path="monitor" element={<MonitorPatientPage />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="manage" element={<ManagePatients />} />
          <Route path="history" element={<CardiovascularRiskResults />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default DoctorRoutes;