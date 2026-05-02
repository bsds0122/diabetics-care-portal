import React from "react";
import { ChartTabs } from "./ChartTabs";
import { GenderBarChart } from "./GenderBarChart";

export const DistributionCharts = ({
  tab,
  setTab,
  genderData,
}) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col shadow-sm">

      {/* TABS */}
      <ChartTabs tab={tab} setTab={setTab} />

      {/* CHART AREA */}
      <div className="flex-1 flex items-center justify-center">
        {tab === "gender" && (
          <GenderBarChart data={genderData} />
        )}
      </div>

    </div>
  );
};