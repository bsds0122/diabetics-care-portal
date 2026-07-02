import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/pages/auth/common/SectionHeading";

const news = [
  {
    id: 1,
    title: "Updated Diabetes Clinic Appointment Schedule",
    excerpt:
      "The Diabetes Clinic has introduced an improved appointment schedule to enhance patient care and reduce waiting times.",
    details:
      "Patients attending the Diabetes Clinic are advised to follow their scheduled appointment dates and arrive early for registration, vital signs assessment, and clinical review. The updated scheduling process helps healthcare professionals provide timely consultations and improve continuity of care.",
  },
  {
    id: 2,
    title: "Community Diabetes and Hypertension Screening Campaign",
    excerpt:
      "Mzuzu Central Hospital will conduct a community outreach programme offering free screening for diabetes and hypertension.",
    details:
      "The screening campaign will include blood glucose testing, blood pressure measurements, body mass index assessment, and health education on diabetes prevention and healthy lifestyle practices. Individuals identified as being at increased risk will be referred for further medical assessment.",
  },
  {
    id: 3,
    title: "Diabetes Self-Management Education Programme",
    excerpt:
      "The Diabetes Care Unit has introduced a patient education programme to support effective long-term diabetes management.",
    details:
      "The programme provides education on medication adherence, healthy eating, physical activity, blood glucose monitoring, foot care, and recognising symptoms that require medical attention.",
  },
  {
    id: 4,
    title: "Enhanced Laboratory Monitoring Services",
    excerpt:
      "The hospital has strengthened laboratory services to support monitoring and follow-up care for people living with diabetes.",
    details:
      "Available services include blood glucose testing, HbA1c monitoring, kidney function assessment, and lipid profile testing to support treatment evaluation and prevention of diabetes-related complications.",
  },
];

export function Announcements() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAnnouncement = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="container mx-auto px-4 py-20 md:py-24">
      
      {/* Header */}
      <header className="mb-14 max-w-3xl">
        <SectionHeading title="Diabetes Care Unit Announcements" />

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Stay informed with official updates regarding clinic services,
          patient education programmes, community outreach activities,
          and improvements in diabetes care at Mzuzu Central Hospital.
        </p>
      </header>

      {/* Announcement Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {news.map((item) => {
          const isOpen = openId === item.id;

          return (
            <article
              key={item.id}
              className={`
                rounded-xl border bg-white p-6
                transition-all duration-300
                hover:shadow-md
                ${isOpen ? "border-primary" : "border-border"}
              `}
            >
              {/* Title */}
              <h3 className="text-lg font-semibold leading-7 text-foreground">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.excerpt}
              </p>

              {/* Details */}
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${isOpen ? "max-h-96 mt-5 pt-5 border-t" : "max-h-0"}
                `}
              >
                <p className="text-sm leading-7 text-muted-foreground">
                  {item.details}
                </p>
              </div>

              {/* Action */}
              <button
                type="button"
                onClick={() => toggleAnnouncement(item.id)}
                className="
                  mt-5 inline-flex items-center gap-2
                  text-sm font-semibold text-primary
                  hover:underline
                "
              >
                {isOpen ? "Show Less" : "Read More"}

                <ArrowRight
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Announcements;