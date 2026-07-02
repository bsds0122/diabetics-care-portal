import React from "react";

export const InfoRow = ({ label, value, icon: Icon }) => {
  return (
    <tr className="border-b border-border/40 hover:bg-muted/20 transition-colors">

      {/* Label */}
      <td className="py-3 px-4 w-1/3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="w-7 h-7 rounded-md bg-primary/20 text-primary flex items-center justify-center">
            <Icon className="w-4 h-4" />
          </span>

          <span className="text-xs font-medium tracking-wide">
            {label}
          </span>
        </div>
      </td>

      {/* Value */}
      <td className="py-3 px-4 text-sm font-medium text-foreground/90">
        {value ? value : <span className="text-muted-foreground">—</span>}
      </td>

    </tr>
  );
};