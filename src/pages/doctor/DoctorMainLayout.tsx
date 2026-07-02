import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../Layout/AppSidebar";
import { Header } from "../Layout/Header";
import { Footer } from "../Layout/Footer";
import { Outlet } from "react-router-dom";

/* ✅ IMPORT FROM NEW HOOK */
import { useLayout } from "@/hooks/useLayout";
import { menuItems } from "@/lib/DoctorsidebarMenu";

export function AppLayout() {
  const { profile, handleSignOut } = useLayout();

  return (
    <SidebarProvider>
      <div className="h-screen flex w-full bg-background text-foreground overflow-hidden">

        {/* SIDEBAR */}
        <AppSidebar menuItems={menuItems} />

        {/* MAIN AREA */}
        <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">

          {/* HEADER */}
          <Header
            profile={profile}
            onSignOut={handleSignOut}
          />

          {/* CONTENT */}
          <main className="flex-1 overflow-hidden pt-20 pb-12">
            <div className="h-full overflow-y-auto px-4 md:px-8 py-6">
              <Outlet />
            </div>
          </main>

          {/* FOOTER */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}