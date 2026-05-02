import { Sidebar, useSidebar, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarHeader } from "@/pages/doctor/components/Layout/Sidebar/Menu/SidebarHeader";
import { SidebarMenu } from "@/pages/doctor/components/Layout/Sidebar/Menu/SidebarMenu";
import { SidebarFooter } from "@/pages/doctor/components/Layout/Sidebar/Menu/SidebarFooter";

/* ✅ IMPORT MENU */
import { menuItems as Items } from "@/lib/Admin-menu";

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar 
      collapsible="icon"
      className="bg-card/20 backdrop-blur-xl border-r border-sidebar-border shadow-xl text-sidebar-foreground transition-all duration-300 ease-in-out"
    >

      {/* HEADER WITH TOGGLE */}
      <div className={`flex items-center border-b border-sidebar-border h-20 transition-all duration-300 ${collapsed ? "justify-center" : "justify-between px-4"}`}>
        {!collapsed && <SidebarHeader collapsed={collapsed} />}
        <SidebarTrigger className="h-9 w-9" />
      </div>

      {/* MENU (SCROLLABLE AREA) */}
      <div className="flex-1 overflow-y-auto">
        <SidebarMenu menuItems={Items} collapsed={collapsed} />
      </div>

      {/* FOOTER */}
      <div className="border-t border-sidebar-border">
        <SidebarFooter collapsed={collapsed} />
      </div>

    </Sidebar>
  );
}