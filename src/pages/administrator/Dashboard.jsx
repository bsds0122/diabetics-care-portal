import React, { useState } from "react";
import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

// ================= DATA =================

const regionData = {
  Northern: [{ name: "Northern", low: 40, medium: 30, high: 20 }],
  Central: [{ name: "Central", low: 50, medium: 25, high: 25 }],
  Southern: [{ name: "Southern", low: 35, medium: 40, high: 25 }],
};

const districtData = {
  Northern: [
    { name: "Mzimba", low: 20, medium: 15, high: 10 },
    { name: "Likoma", low: 10, medium: 5, high: 3 },
    { name: "Rumphi", low: 15, medium: 10, high: 8 },
    { name: "Nkhata Bay", low: 12, medium: 8, high: 6 },
    { name: "Chitipa", low: 18, medium: 12, high: 9 },
  ],
  Central: [
    { name: "Lilongwe", low: 25, medium: 20, high: 15 },
    { name: "Kasungu", low: 18, medium: 14, high: 10 },
    { name: "Mchinji", low: 12, medium: 10, high: 8 },
    { name: "Dowa", low: 14, medium: 11, high: 9 },
    { name: "Ntchisi", low: 10, medium: 8, high: 6 },
  ],
  Southern: [
    { name: "Blantyre", low: 30, medium: 25, high: 20 },
    { name: "Zomba", low: 28, medium: 22, high: 18 },
    { name: "Mangochi", low: 22, medium: 18, high: 15 },
    { name: "Machinga", low: 20, medium: 16, high: 14 },
    { name: "Balaka", low: 18, medium: 14, high: 12 },
  ],
};

// ================= TOOLTIP =================

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border shadow-lg px-4 py-3 rounded-lg">
        <p className="font-semibold text-sm mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex justify-between text-xs mb-1">
            <span className="capitalize">{entry.dataKey}</span>
            <span className="font-semibold">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// ================= TAB =================

const TabGroup = ({ tabs, activeTab, onTabChange }) => (
  <div className="flex w-full gap-4 border-b">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className={`py-2 text-sm font-medium relative ${
          activeTab === tab ? "text-blue-600" : "text-gray-500"
        }`}
      >
        {tab}
        {activeTab === tab && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
        )}
      </button>
    ))}
  </div>
);

// ================= CHART =================

const Chart = ({ data, height = 400 }) => (
  <div className="w-full h-full">
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Bar dataKey="low" fill="#3b82f6" barSize={25} />
        <Bar dataKey="medium" fill="#22c55e" barSize={25} />
        <Bar dataKey="high" fill="#ef4444" barSize={25} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

// ================= DASHBOARD =================

export default function Dashboard() {
  const [region, setRegion] = useState("Northern");
  const [districtRegion, setDistrictRegion] = useState("Northern");

  return (
    // 🔥 TRUE FULL WIDTH ROOT
    <div className="w-screen min-h-screen bg-gray-50 overflow-x-hidden">

      {/* FULL WIDTH CONTENT */}
      <div className="w-full space-y-8 p-6">

        {/* REGION CARD */}
        <div className="w-full border rounded-xl shadow bg-card">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-base">Regional Risk Analysis</h2>
          </div>

          <div className="p-4">
            <TabGroup
              tabs={Object.keys(regionData)}
              activeTab={region}
              onTabChange={setRegion}
            />
          </div>

          <div className="w-full p-4">
            <Chart data={regionData[region]} />
          </div>
        </div>

        {/* DISTRICT CARD */}
        <div className="w-full border rounded-xl shadow bg-card">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-base">District Risk Analysis</h2>
          </div>

          <div className="p-4">
            <TabGroup
              tabs={Object.keys(districtData)}
              activeTab={districtRegion}
              onTabChange={setDistrictRegion}
            />
          </div>

          <div className="w-full p-4">
            <Chart
              data={districtData[districtRegion]}
              height={500}
            />
          </div>
        </div>

      </div>
    </div>
  );
}