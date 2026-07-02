import React from "react";
import { AssessmentResultData } from "@/types/assessment";

interface Props {
  result: AssessmentResultData | null;
}

export const AssessmentResult: React.FC<Props> = ({ result }) => {
  if (!result) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No assessment result available
      </div>
    );
  }

  const getRiskColor = (level: string) => {
    if (level.toLowerCase().includes("high")) return "text-red-600";
    if (level.toLowerCase().includes("medium")) return "text-yellow-600";
    return "text-green-600";
  };

  // 👉 Build simple explanation dynamically
  const generateSummary = () => {
    const risk = result.risk_percentage.toFixed(2);
    const level = result.risk_level;

    const increased = result.feature_importance
      .filter(f => f.effect === "Increase Risk")
      .map(f => f.feature);

    const decreased = result.feature_importance
      .filter(f => f.effect === "Decrease Risk")
      .map(f => f.feature);

    return `The patient has a ${risk}% predicted cardiovascular risk, classified as ${level}. 
The system indicates that ${decreased.join(", ") || "some factors"} reduced the predicted risk, 
while ${increased.join(", ") || "some factors"} increased it.`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">

      {/* ✅ 1. ASSESSMENT SUMMARY (NEW AI CARD) */}
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 border-l-4 border-blue-500">
        <h2 className="text-sm font-bold mb-3">
          ASSESSMENT SUMMARY
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {generateSummary()}
        </p>
      </div>

      {/* FEATURE IMPORTANCE */}
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6">
        <h3 className="text-sm font-semibold mb-4">
          Risk Factor Contributions
        </h3>

        <div className="space-y-4">
          {result.feature_importance
            .sort((a, b) => b.impact_percentage - a.impact_percentage)
            .map((item, index) => (
              <div key={index} className="space-y-1">

                <div className="flex justify-between text-sm">
                  <span>{item.feature}</span>
                  <span className={
                    item.effect === "Increase Risk"
                      ? "text-red-500"
                      : "text-green-500"
                  }>
                    {item.effect}
                  </span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full">
                  <div
                    className={`h-3 rounded-full ${
                      item.effect === "Increase Risk"
                        ? "bg-red-500"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${item.impact_percentage}%` }}
                  />
                </div>

                <div className="text-xs text-gray-500">
                  {item.impact_percentage.toFixed(2)}% impact
                </div>

              </div>
            ))}
        </div>
      </div>
    </div>
  );
};