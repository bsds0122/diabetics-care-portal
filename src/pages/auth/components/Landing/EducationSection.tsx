import React from "react";
import { Activity, AlertTriangle, Apple, Utensils } from "lucide-react";

const educationCards = [
  {
    icon: Activity,
    title: "Healthy Lifestyle",
    items: [
      "Engage in regular physical exercise",
      "Maintain a healthy body weight",
      "Avoid smoking and excessive alcohol consumption",
      "Monitor blood glucose levels regularly",
      "Ensure adequate sleep and rest",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Common Symptoms of Diabetes",
    items: [
      "Frequent urination",
      "Excessive thirst",
      "Unexplained weight loss",
      "Persistent fatigue",
      "Blurred vision",
    ],
  },
  {
    icon: Apple,
    title: "Recommended Foods for Diabetes",
    items: [
      "Fresh vegetables",
      "Whole grains",
      "Fruits in moderate portions",
      "Lean proteins",
      "Healthy fats (e.g., nuts, avocado)",
    ],
  },
  {
    icon: Utensils,
    title: "Dietary Guidelines",
    items: [
      "Prefer steaming or boiling over frying",
      "Limit sugar and salt intake",
      "Consume balanced meals",
      "Practice portion control",
      "Maintain a consistent eating schedule",
    ],
  },
];

export const EducationSection = () => {
  return (
    <section className="mb-10">

      {/* Header */}
      <div className="text-center mb-6 space-y-3">

        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          Patient Education
        </h2>

        <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
          Educational guidelines to support diabetes management and promote healthier lifestyle choices.
        </p>

        <div className="w-14 h-[2px] bg-gradient-to-r from-blue-500 to-black mx-auto rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2">

        {educationCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-card border border-border/20 rounded-lg p-5 hover:bg-blue-500/5 transition"
          >

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">

              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-500/10 text-blue-600">
                <card.icon className="w-4 h-4" />
              </div>

              <h3 className="text-base font-semibold text-foreground">
                {card.title}
              </h3>

            </div>

            {/* List */}
            <ul className="space-y-2 text-sm text-muted-foreground">

              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">

                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-blue-500/60" />

                  <span>{item}</span>

                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>

    </section>
  );
};