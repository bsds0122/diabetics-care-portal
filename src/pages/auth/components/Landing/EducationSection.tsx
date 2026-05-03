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
      "Healthy fats (nuts, avocado)",
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
      <div className="text-center mb-8 space-y-3">

        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          Patient Education
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Educational guidelines to support diabetes management and promote healthier lifestyle choices.
        </p>

        <div className="w-14 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2">

        {educationCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-xl p-6 hover:bg-blue-500/5 transition"
          >

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">

              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-500/10 text-blue-600">
                <card.icon className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-semibold text-foreground">
                {card.title}
              </h3>

            </div>

            {/* List */}
            <ul className="space-y-3 text-base md:text-lg text-muted-foreground leading-relaxed">

              {card.items.map((item, i) => (
                <li key={i} className="flex gap-3">

                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/70 flex-shrink-0" />

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