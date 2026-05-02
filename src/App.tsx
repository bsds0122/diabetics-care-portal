import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { lazy, Suspense } from "react";

import ProtectedRoute from "@/routes/protect-routes";
import PublicRoute from "@/routes/PublicRoute";

// ✅ LAZY LOAD ROUTES (CRITICAL FIX)
const AuthRoutes = lazy(() => import("@/routes/AuthRoutes"));
const DoctorRoutes = lazy(() => import("@/routes/DoctorRoutes"));
const PatientRoutes = lazy(() => import("@/routes/PatientRoutes"));
const AdministratorRoutes = lazy(() => import("@/routes/AdminRoutes"));

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <BrowserRouter>

        {/* ✅ WRAP EVERYTHING IN SUSPENSE */}
        <Suspense fallback={<div>Loading...</div>}>

          <Routes>

            {/* PUBLIC ROUTES */}
            <Route element={<PublicRoute />}>
              <Route path="/*" element={<AuthRoutes />} />
            </Route>

            {/* DOCTOR */}
            <Route element={<ProtectedRoute allowedRole="doctor" />}>
              <Route path="/doctor/*" element={<DoctorRoutes />} />
            </Route>

            {/* PATIENT */}
            <Route element={<ProtectedRoute allowedRole="patient" />}>
              <Route path="/patient/*" element={<PatientRoutes />} />
            </Route>

            {/* ADMIN */}
            <Route element={<ProtectedRoute allowedRole="admin" />}>
              <Route path="/admin/*" element={<AdministratorRoutes />} />
            </Route>

          </Routes>

        </Suspense>

      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;