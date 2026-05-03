import React from "react";

export const DoctorCardSection = () => {
  const points = [
    "The system enables structured, efficient, and patient-centered clinical workflows.",
    "It helps doctors identify patients with diabetes and reduces cardiovascular risk over time.",
    "Doctors can access complete patient history to improve diagnosis and reduce complications.",
    "Patients can report symptoms remotely while staying at home.",
    "Doctors can schedule medical checkups when critical symptoms are reported.",
    "Both doctors and patients can monitor blood pressure, blood sugar, and body weight in real time.",
  ];

  return (
    <section className="mb-6">

      <div className="bg-card border border-border/30 rounded-lg overflow-hidden shadow-sm">

        <div className="grid md:grid-cols-2">

          {/* IMAGE */}
          <div className="relative h-56 md:h-full overflow-hidden">
            <img
              src="https://i.ibb.co/WNPncYv8/Screenshot-2026-04-09-063734.png"
              alt="Doctor treating patient"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-blue-500/10 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-8 space-y-4">

            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              <span className="text-blue-600">Compassionate Care,</span>{" "}
              <span className="text-black dark:text-foreground">
                Powered by Technology
              </span>
            </h2>

            <ul className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              {points.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/70 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-blue-500/20" />

          </div>

        </div>

      </div>

    </section>
  );
};