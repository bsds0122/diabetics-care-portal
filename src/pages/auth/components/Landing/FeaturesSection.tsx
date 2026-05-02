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
      <div className="text-center mb-5 space-y-2">

        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
          Key Features
        </h2>

        <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto">
          A digital healthcare system designed to improve diabetes and cardiovascular disease management.
        </p>

        <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-black mx-auto rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">

        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2 p-2.5 rounded-md border border-border/20 bg-card hover:bg-blue-500/5 transition"
          >

            {/* Number badge */}
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-600 text-[9px] font-medium mt-[2px]">
              {idx + 1}
            </div>

            {/* Text */}
            <p className="text-[11px] md:text-sm text-foreground leading-snug">
              {feature}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};