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
      <div className="text-center mb-7 space-y-3">

        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          Problem & Solution
        </h2>

        <p className="text-base text-muted-foreground max-w-lg mx-auto">
          A digital healthcare system designed to improve diabetes and cardiovascular disease management.
        </p>

        <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid gap-5 md:grid-cols-2">

        {/* Problem Card */}
        <div className="bg-card border border-border rounded-xl p-6">

          <h3 className="text-xl font-semibold text-foreground mb-4">
            Problem
          </h3>

          <ul className="space-y-4 text-base text-muted-foreground leading-relaxed">
            {problems.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-blue-500/60 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* Solution Card */}
        <div className="bg-card border border-blue-500/20 rounded-xl p-6">

          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Solution
          </h3>

          <ul className="space-y-4 text-base text-muted-foreground leading-relaxed">
            {solutions.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/70 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

      </div>

    </section>
  );
};