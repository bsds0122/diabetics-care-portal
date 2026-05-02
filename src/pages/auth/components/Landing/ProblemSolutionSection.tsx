import React from "react";

export const ProblemSolutionSection = () => {

  const problems = [
    "Manual patient records are written in booklets, making them difficult to track and manage.",
    "Loss or damage of physical records disrupts continuity of medical history.",
    "Limited communication between patients and healthcare providers between visits.",
    "Missed follow-ups and poor treatment adherence by patients.",
    "Inconsistent monitoring increases the risk of complications.",
  ];

  const solutions = [
    "Secure digital storage with easy access from anywhere.",
    "Continuous monitoring of blood sugar, blood pressure, and weight by patients and doctors.",
    "Improved patient reporting while at home through digital tools.",
    "Early cardiovascular risk detection using real-time data analysis.",
    "Easy tracking of patient medical history, including past medications.",
    "Automatic reminders for medical checkup dates and appointments.",
  ];

  return (
    <section className="mb-8">

      {/* Header */}
      <div className="text-center mb-6 space-y-2">

        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
          Problem & Solution
        </h2>

        <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto">
          A digital healthcare system designed to improve diabetes and cardiovascular disease management.
        </p>

        <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-black mx-auto rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid gap-3 md:grid-cols-2">

        {/* Problem Card */}
        <div className="bg-card border border-black/10 rounded-lg p-4 md:p-5">

          <h3 className="text-sm font-semibold text-black dark:text-foreground mb-2">
            Problem
          </h3>

          <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
            {problems.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-[6px] w-1 h-1 rounded-full bg-black/30 dark:bg-blue-500/40" />
                {item}
              </li>
            ))}
          </ul>

        </div>

        {/* Solution Card */}
        <div className="bg-card border border-blue-500/20 rounded-lg p-4 md:p-5">

          <h3 className="text-sm font-semibold text-blue-600 mb-2">
            Solution
          </h3>

          <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
            {solutions.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-[6px] w-1 h-1 rounded-full bg-blue-500/60" />
                {item}
              </li>
            ))}
          </ul>

        </div>

      </div>

    </section>
  );
};