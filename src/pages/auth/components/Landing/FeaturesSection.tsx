import React from "react";

const features = [
  "Cardiovascular assessment and risk monitoring",
  "Diabetes diagnosis and screening",
  "Registration of new patients and users",
  "Review of patient medical history",
  "Treatment prescription and management",
  "Patient reporting of signs and symptoms",
];

export const FeaturesSection = () => {
  return (
    <section className="mb-8">

      {/* Header */}
      <div className="text-center mb-7 space-y-3">

        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          Key Features
        </h2>

        <p className="text-base text-muted-foreground max-w-lg mx-auto">
          A digital healthcare system designed to improve diabetes and cardiovascular disease management.
        </p>

        <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">

        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card hover:bg-blue-500/5 transition"
          >

            {/* Dot */}
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              {feature}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};