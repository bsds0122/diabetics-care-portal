import React from "react";

const steps = [
  {
    title: "Initial Hospital Visit",
    description:
      "The patient visits the hospital and explains their symptoms and medical concerns to the doctor.",
  },
  {
    title: "Patient Registration",
    description:
      "The doctor registers the patient in the system if symptoms of diabetes or cardiovascular risk are identified.",
  },
  {
    title: "Diabetes Diagnosis",
    description:
      "The doctor performs laboratory tests, including blood glucose measurement, to confirm whether the patient has diabetes.",
  },
  {
    title: "Cardiovascular Assessment",
    description:
      "After diabetes diagnosis, the patient undergoes cardiovascular evaluation due to the strong relationship between the two conditions.",
  },
  {
    title: "Account Approval",
    description:
      "The hospital administrator reviews and approves the patient account for system access and monitoring.",
  },
  {
    title: "Continuous Monitoring",
    description:
      "The patient is continuously monitored both at the hospital and at home to detect complications early and improve long-term health outcomes.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="bg-card border border-black/10 rounded-lg p-4 md:p-6 mb-8">

      {/* Header */}
      <div className="text-center mb-5 space-y-2">

        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
          How It Works
        </h2>

        <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto">
          A structured clinical workflow for diabetes and cardiovascular disease management.
        </p>

        <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-black mx-auto rounded-full" />
      </div>

      {/* Steps */}
      <div className="grid gap-3 md:grid-cols-2">

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex gap-3 p-3 rounded-md border border-border/20 hover:bg-blue-500/5 transition"
          >

            {/* Step Number */}
            <div className="flex items-center justify-center min-w-[26px] h-6 rounded-full bg-blue-500/10 text-blue-600 text-[10px] font-medium">
              {index + 1}
            </div>

            {/* Content */}
            <div className="space-y-0.5">

              <h3 className="text-sm font-medium text-black dark:text-foreground">
                {step.title}
              </h3>

              <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};