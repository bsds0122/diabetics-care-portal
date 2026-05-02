import { Routes, Route } from "react-router-dom";

// Layout
import { AppLayout } from "@/pages/doctor/components/Layout/DoctorMainLayout";

// Pages
import Dashboard from "@/pages/doctor/Dashboard";
import Patients from "@/pages/doctor/Patients";
import Manage from "@/pages/doctor/Manage";
import Registration from "@/pages/doctor/Registration";
import Assessment from "@/pages/doctor/Assessment";
import Prescription from "@/pages/doctor/Prescription";
import Profile from "@/pages/doctor/Profile";
import Diagnosis from "@/pages/doctor/Diagnosis";
import Dosage from "@/pages/doctor/Dosage";

const DoctorRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="registration" element={<Registration />} />
        <Route path="patients" element={<Patients />} />
        <Route path="manage" element={<Manage />} />
        <Route path="diagnosis" element={<Diagnosis />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="treatment" element={<Prescription />} />
        <Route path="dosage-history" element={<Dosage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default DoctorRoutes;