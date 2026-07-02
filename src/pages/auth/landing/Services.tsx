import {
  Droplet,
  Activity,
  HeartPulse,
  FileText,
  Pill,
} from "lucide-react";

import { SectionHeading } from "@/pages/auth/common/SectionHeading";

const services = [
  {
    icon: Droplet,
    title: "Blood Glucose Monitoring",
    desc: "Record and review blood glucose measurements to support regular diabetes monitoring and treatment decisions.",
  },
  {
    icon: Activity,
    title: "Blood Pressure Monitoring",
    desc: "Track blood pressure measurements over time to help identify and manage hypertension among patients with diabetes.",
  },
  {
    icon: HeartPulse,
    title: "Cardiovascular Risk Assessment",
    desc: "Estimate the patient's 10-year risk of cardiovascular complications to support preventive clinical care.",
  },
  {
    icon: FileText,
    title: "Patient Clinical Records",
    desc: "Maintain secure digital records including medical history, clinical assessments, laboratory results, and follow-up information.",
  },
  {
    icon: Pill,
    title: "Treatment and Medication Management",
    desc: "Document prescribed medications, monitor treatment plans, and support continuity of diabetes care.",
  },
];

export function Services() {
  return (
    <section
      className="bg-slate-50 py-20 md:py-24"
      aria-labelledby="services-title"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeading
            id="services-title"
            title="Diabetes Care Services"
            center
          />

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            The Diabetes Management System supports healthcare professionals
            with digital tools for patient monitoring, clinical assessment,
            treatment documentation, and long-term diabetes care.
          </p>
        </header>

        {/* Services Grid */}
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              role="listitem"
              className="
                group
                rounded-xl
                border
                bg-white
                p-6
                transition-all
                duration-300
                hover:shadow-md
                hover:border-slate-200
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-5
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-transform
                  group-hover:scale-105
                "
                aria-hidden="true"
              >
                <Icon className="h-6 w-6" />
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-semibold leading-7 text-foreground">
                {title}
              </h3>

              {/* Service Description */}
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;