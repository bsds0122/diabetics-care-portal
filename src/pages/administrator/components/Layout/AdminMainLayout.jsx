import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AdminSidebar";  
import { Header } from "./Header";
import { Footer } from "@/pages/doctor/components/Layout/Footer";
import { Outlet } from "react-router-dom";

/* ✅ IMPORT FROM NEW FILE */
import { doctorProfile, handleSignOut } from "@/lib/PatientProfile";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="h-screen flex w-full bg-background text-foreground overflow-hidden">

        {/* SIDEBAR */}
        <AppSidebar />

        {/* MAIN AREA */}
        <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">

          {/* HEADER */}
          <Header onSignOut={handleSignOut} />

          {/* CONTENT */}
          <main className="flex-1 overflow-hidden pt-20 pb-12">
            <div className="h-full overflow-y-auto px-4 md:px-8 py-6">
              <Outlet /> {/* ✅ THIS replaces children */}
            </div>
          </main>

          {/* FOOTER */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}