import React from "react";

type SidebarFooterProps = {
  collapsed: boolean;
};

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  collapsed,
}) => {
  return (
    <div
      className={`
        border-t border-black/30 dark:border-white/30
        bg-background
        transition-all duration-300 ease-in-out
        ${collapsed ? "h-2 p-0" : "h-12 p-3"}
      `}
    />
  );
};