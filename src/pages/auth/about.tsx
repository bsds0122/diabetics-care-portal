import React from "react";
import { LandingHeader } from "@/pages/auth/components/Landing/LandingHeader";
import { Footer } from "@/pages/auth/footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <LandingHeader />

      <main className="flex-grow">

        {/* HERO */}
        <section className="relative px-6 py-24 text-center max-w-4xl mx-auto space-y-6">

          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="w-[560px] h-[560px] bg-blue-500/10 blur-3xl rounded-full" />
            <div className="absolute w-[360px] h-[360px] bg-black/10 blur-3xl rounded-full" />
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Transforming Diabetes Care
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A modern healthcare platform built to enhance patient monitoring,
            improve clinical decision-making, and enable proactive care through data-driven insights.
          </p>

          <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </section>

        {/* CORE CONTENT */}
        <section className="px-6 pb-16">

          <div className="max-w-6xl mx-auto space-y-12">

            {/* SYSTEM ARCHITECTURE */}
            <div className="space-y-6">

              <h2 className="text-lg md:text-xl font-semibold text-foreground text-center">
                System Architecture
              </h2>

              <div className="grid gap-5 md:grid-cols-2">

                <div className="p-6 rounded-lg border border-border/30 bg-card hover:bg-blue-500/5 transition">

                  <h3 className="text-base font-semibold mb-2">
                    Frontend Experience
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Built with <span className="text-blue-600 font-medium">React</span>,
                    delivering a fast, responsive, and intuitive interface for healthcare users.
                  </p>

                </div>

                <div className="p-6 rounded-lg border border-border/30 bg-card hover:bg-blue-500/5 transition">

                  <h3 className="text-base font-semibold mb-2">
                    Backend System
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Powered by <span className="text-blue-600 font-medium">Python</span> and
                    <span className="text-blue-600 font-medium"> FastAPI</span>,
                    ensuring secure and efficient medical data processing.
                  </p>

                </div>

              </div>

            </div>

            {/* AI SECTION */}
            <div className="space-y-6">

              <h2 className="text-lg md:text-xl font-semibold text-foreground text-center">
                Intelligent Healthcare
              </h2>

              <div className="p-7 rounded-lg bg-card border border-border/30 text-center space-y-4 hover:bg-blue-500/5 transition">

                <h3 className="text-xl font-semibold">
                  Machine Learning Risk Prediction
                </h3>

                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  The system integrates machine learning to predict
                  <span className="text-blue-600 font-medium">
                    {" "}10-year cardiovascular disease risk
                  </span>,
                  supporting faster and more accurate clinical decisions.
                </p>

              </div>

            </div>

            {/* IMPACT */}
            <div className="grid gap-5 md:grid-cols-2">

              <div className="p-7 rounded-lg border border-blue-500/20 bg-blue-500/5 space-y-3">

                <h3 className="text-base font-semibold">
                  Real-World Impact
                </h3>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Reduces manual paperwork, improves continuity of care, and strengthens
                  patient–doctor communication.
                </p>

              </div>

              <div className="p-7 rounded-lg border border-border/30 bg-card space-y-3 hover:bg-blue-500/5 transition">

                <h3 className="text-base font-semibold">
                  Clinical Improvement
                </h3>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Enables early detection, faster decisions, and improved treatment outcomes
                  through structured clinical data.
                </p>

              </div>

            </div>

            {/* METRICS */}
            <div className="grid gap-4 md:grid-cols-3 text-center">

              <div className="p-6 rounded-lg border border-border/30 bg-card">
                <h4 className="text-base font-semibold">
                  Continuous Monitoring
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Real-time patient health tracking.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/30 bg-card">
                <h4 className="text-base font-semibold">
                  Faster Decisions
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  AI-supported clinical workflows.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/30 bg-card">
                <h4 className="text-base font-semibold">
                  Better Outcomes
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Early intervention reduces risks.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
};

export default AboutPage;