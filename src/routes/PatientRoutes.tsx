import { Routes, Route } from "react-router-dom";

// Layout
import { AppLayout } from "@/pages/patient/components/Layout/PatientMainLayout";

// Pages
import PatientDashboard from "@/pages/patient/dashboard";
import MonitoringPage from "@/pages/patient/MonitoringPage";
import VitalForm from "@/pages/patient/VitalForm";
import PatientProfilePage from "@/pages/patient/profile";

const PatientRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<PatientDashboard />} />

        <Route path="manage" element={<VitalForm />} />
        <Route path="monitor" element={<MonitoringPage />} />
        <Route path="profile" element={<PatientProfilePage />} />
      </Route>
    </Routes>
  );
};

export default PatientRoutes;