import React from "react";

export const ChartTabs = ({ tab, setTab }) => {
  return (
    <div className="flex gap-2 border-b border-border pb-3 mb-4">
      <button
        onClick={() => setTab("gender")}
        className={`px-3 py-1.5 text-xs rounded-md transition ${
          tab === "gender"
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:bg-muted"
        }`}
      >
        Gender Distribution
      </button>
    </div>
  );
};