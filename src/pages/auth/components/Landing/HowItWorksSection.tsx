import React from "react";

const steps = [
  {
    title: "Initial Hospital Visit",
    description:
      "This is the first point of contact where the patient visits the hospital and explains their symptoms, medical history, and concerns. The doctor performs an initial assessment to determine possible risks of diabetes or cardiovascular disease and decides whether further screening is required.",
  },
  {
    title: "Patient Registration",
    description:
      "If risk factors are identified, the patient is registered into the system. Personal and medical details are recorded to create a digital patient profile for tracking health status and future consultations.",
  },
  {
    title: "Diabetes Diagnosis",
    description:
      "Laboratory tests such as fasting blood glucose or random blood sugar tests are conducted. The results are analyzed to confirm whether the patient is diabetic, and the diagnosis is recorded in the system.",
  },
  {
    title: "Cardiovascular Assessment",
    description:
      "Since diabetes increases heart-related risks, cardiovascular tests are performed including blood pressure and cholesterol checks to evaluate heart health status.",
  },
  {
    title: "Account Approval",
    description:
      "The hospital administrator reviews the patient’s data for completeness and accuracy. Once verified, the patient account is approved and activated for system access.",
  },
  {
    title: "Continuous Monitoring",
    description:
      "The patient is continuously monitored both at the hospital and remotely. Doctors track health indicators to detect complications early and ensure timely intervention.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="bg-card border border-border rounded-xl p-7">

      {/* Header */}
      <div className="mb-7 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          How It Works
        </h2>

        <div className="w-12 h-[2px] mt-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />

        <p className="text-base md:text-lg text-muted-foreground mt-3 max-w-md mx-auto">
          Detailed clinical workflow for diabetes and cardiovascular disease management system
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-7">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-5">

            {/* Dot */}
            <div className="mt-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 block" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mt-1">
                {step.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};