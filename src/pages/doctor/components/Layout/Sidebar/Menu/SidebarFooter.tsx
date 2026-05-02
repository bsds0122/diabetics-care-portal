import React from "react";

type SidebarFooterProps = {
  collapsed: boolean;
};

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ collapsed }) => {
  return (
    <div
      className={`relative z-10 border-t border-border/30 bg-background/60 backdrop-blur-md transition-all duration-300 ease-in-out
        shadow-[0_-2px_10px_rgba(0,0,0,0.04)]
        ${collapsed ? "h-2 p-0 opacity-40" : "h-12 p-3"}
      `}
    />
  );
};