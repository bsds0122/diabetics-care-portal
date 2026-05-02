import React from "react";
import { LandingHeader } from "@/pages/auth/components/Landing/LandingHeader";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <LandingHeader />

      <main className="flex-grow px-6 py-14">

        <div className="max-w-5xl mx-auto space-y-12">

          {/* HEADER */}
          <header className="text-center space-y-5 relative">

            {/* soft medical glow */}
            <div className="absolute inset-0 -z-10 flex justify-center">
              <div className="w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
              <div className="absolute w-[300px] h-[300px] bg-black/10 blur-3xl rounded-full" />
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Contact & Project Attribution
            </h1>

            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This system is an academic healthcare project demonstrating the application of
              data science, software engineering, and machine learning in improving diabetes
              management and patient care delivery.
            </p>

            <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-black mx-auto rounded-full" />

          </header>

          {/* SPONSORSHIP */}
          <section className="text-center space-y-2">

            <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Institutional Support
            </h2>

            <p className="text-base md:text-lg font-semibold text-foreground">
              Sponsored by Mzuzu University
            </p>

            <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              In recognition of academic excellence and successful completion of the Bachelor of
              Science in Data Science program.
            </p>

          </section>

          {/* CONTACT CARDS */}
          <section className="grid md:grid-cols-2 gap-4">

            {/* Supervisor */}
            <div className="p-5 md:p-6 rounded-lg border border-border/30 bg-card hover:bg-blue-500/5 transition space-y-4">

              <h2 className="text-sm font-semibold text-black dark:text-foreground">
                Academic Supervisor
              </h2>

              <div className="space-y-2 text-xs md:text-sm text-muted-foreground">

                <div className="flex justify-between">
                  <span className="text-foreground font-medium">Name</span>
                  <span>Precious Msonda</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-foreground font-medium">Phone</span>
                  <span>+265 888 123 456</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-foreground font-medium">Email</span>
                  <span>supervisor@hospital.mw</span>
                </div>

              </div>

            </div>

            {/* Developer */}
            <div className="p-5 md:p-6 rounded-lg border border-border/30 bg-card hover:bg-blue-500/5 transition space-y-4">

              <h2 className="text-sm font-semibold text-black dark:text-foreground">
                Project Developer
              </h2>

              <div className="space-y-2 text-xs md:text-sm text-muted-foreground">

                <div className="flex justify-between">
                  <span className="text-foreground font-medium">Name</span>
                  <span>Amos Mateyu</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-foreground font-medium">Phone</span>
                  <span>
                    +265 884 895 532 / 0987 438 536
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-foreground font-medium">Email</span>
                  <span>amosmateyu21@gmail.com</span>
                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
};

export default ContactUsPage;