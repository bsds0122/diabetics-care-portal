import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute w-[450px] h-[450px] bg-black/10 blur-3xl rounded-full" />
      </div>

      <div className="text-center space-y-8">

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          <span className="text-blue-600">Welcome to</span>{" "}
          <span className="text-black dark:text-foreground">
            Mzuzu Central Hospital
          </span>
        </h1>

        {/* ACCENT LINE */}
        <div className="w-28 h-[4px] mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />

        {/* SUBTITLE */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          A digital healthcare system for diabetes and cardiovascular disease management,
          enabling secure patient records, continuous monitoring, and improved clinical decision-making.
        </p>

      </div>

    </section>
  );
};