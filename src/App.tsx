import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthRoutes from "@/routes/AuthRoutes";
import DoctorRoutes from "@/routes/DoctorRoutes";
import AdministratorRoutes from "@/routes/Administrator";

import ProtectedRoute from "@/routes/protect-routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC / AUTH ROUTES */}
        <Route path="/*" element={<AuthRoutes />} />

        {/* DOCTOR ROUTES */}
        <Route element={<ProtectedRoute allowedRole="doctor" />}>
          <Route path="/doctor/*" element={<DoctorRoutes />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route element={<ProtectedRoute allowedRole="administrator" />}>
          <Route path="/administrator/*" element={<AdministratorRoutes />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;