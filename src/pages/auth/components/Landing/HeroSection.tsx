import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute w-[350px] h-[350px] bg-black/10 blur-3xl rounded-full" />
      </div>

      <div className="text-center space-y-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          <span className="text-blue-600">Welcome to</span>{" "}
          <span className="text-black dark:text-foreground">
            Mzuzu Central Hospital
          </span>
        </h1>

        {/* ACCENT LINE */}
        <div className="w-24 h-[3px] mx-auto rounded-full bg-gradient-to-r from-blue-600 to-black" />

        {/* SUBTITLE (IMPROVED) */}
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A digital healthcare system for diabetes and cardiovascular disease management,
          enabling secure patient records, continuous monitoring, and improved clinical decision-making.
        </p>

      </div>

    </section>
  );
};