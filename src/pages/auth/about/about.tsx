import { SectionBanner } from "../common/SectionBanner";
import { SectionHeading } from "@/pages/auth/common/SectionHeading";
import {
  Droplet,
  Activity,
  HeartPulse,
  FileText,
  Pill,
  GraduationCap,
  Target,
  Users,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Database,
} from "lucide-react";

/* =========================
   DATA
========================= */

const goals = [
  {
    icon: Target,
    title: "Improve Quality of Care",
    desc: "Support effective diabetes prevention, diagnosis, treatment, and long-term patient follow-up.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Patient Information",
    desc: "Maintain accurate and confidential electronic records to improve continuity of care.",
  },
  {
    icon: Users,
    title: "Support Healthcare Teams",
    desc: "Provide digital tools that assist clinicians in making informed healthcare decisions.",
  },
];

const services = [
  {
    icon: Droplet,
    title: "Blood Glucose Monitoring",
    desc: "Track blood glucose measurements to support clinical assessment and diabetes management.",
  },
  {
    icon: Activity,
    title: "Blood Pressure Monitoring",
    desc: "Monitor blood pressure trends to identify and manage cardiovascular risk factors.",
  },
  {
    icon: HeartPulse,
    title: "Cardiovascular Risk Assessment",
    desc: "Support early identification of cardiovascular complications among patients living with diabetes.",
  },
  {
    icon: FileText,
    title: "Electronic Patient Records",
    desc: "Store patient history, clinical assessments, laboratory results, and follow-up information securely.",
  },
  {
    icon: Pill,
    title: "Treatment & Medication Management",
    desc: "Document medications, treatment plans, and progress during diabetes care.",
  },
  {
    icon: GraduationCap,
    title: "Patient Education",
    desc: "Provide guidance on healthy lifestyles, medication adherence, and diabetes self-management.",
  },
];

const teams = [
  {
    icon: Stethoscope,
    title: "Doctors & Clinical Officers",
    desc: "Provide medical assessment, diagnosis, treatment planning, and regular patient review.",
  },
  {
    icon: UserRound,
    title: "Nurses & Diabetes Educators",
    desc: "Support patient education, counselling, and daily diabetes management practices.",
  },
  {
    icon: Database,
    title: "Health Information Team",
    desc: "Manage electronic records, ensure data quality, and maintain the Diabetes Management System.",
  },
];

const partners = [
  "Ministry of Health - Malawi",
  "World Health Organization (WHO)",
  "Kamuzu University of Health Sciences (KUHeS)",
  "Mzuzu University",
  "UNICEF",
  "Médecins Sans Frontières (MSF)",
];


/* =========================
   ABOUT PAGE
========================= */

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <SectionBanner
        title=""
        subtitle=""
      />


      {/* ABOUT THE UNIT */}
      <section className="container mx-auto px-4 py-20 md:py-24">
        <div className="max-w-4xl">
          <SectionHeading title="Who We Are" />

          <p className="mt-6 text-base leading-8 text-muted-foreground">
            The Diabetes Care Unit at Mzuzu Central Hospital is dedicated to
            providing comprehensive healthcare services for patients living
            with diabetes. Through the Diabetes Management System (DMS),
            healthcare professionals can securely manage patient information,
            monitor clinical progress, and deliver coordinated long-term care.
          </p>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            Our approach combines clinical expertise with digital healthcare
            technologies to improve patient safety, enhance communication
            among healthcare teams, and support better health outcomes.
          </p>
        </div>
      </section>


      {/* MISSION & GOALS */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-4">

          <SectionHeading
            title="Our Mission and Goals"
            center
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {goals.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="rounded-2xl bg-white p-7 border shadow-sm hover:shadow-md transition"
              >
                <Icon className="h-8 w-8 text-primary mb-5" />

                <h3 className="text-lg font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {desc}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="container mx-auto px-4 py-20 md:py-24">

        <SectionHeading
          title="Diabetes Care Services"
          center
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border p-7 hover:shadow-md transition"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {desc}
              </p>
            </article>
          ))}

        </div>

      </section>


      {/* HEALTHCARE TEAM */}
      <section className="bg-slate-50 py-20 md:py-24">

        <div className="container mx-auto px-4">

          <SectionHeading
            title="Our Healthcare Team"
            center
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {teams.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="rounded-2xl bg-white border p-7 hover:shadow-md transition"
              >
                <Icon className="h-8 w-8 text-primary mb-5" />

                <h3 className="text-lg font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {desc}
                </p>
              </article>
            ))}

          </div>

        </div>

      </section>


      {/* PARTNERS */}
      <section className="container mx-auto px-4 py-20 md:py-24">

        <SectionHeading
          title="Healthcare & Academic Partners"
          center
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {partners.map((partner) => (
            <div
              key={partner}
              className="
                rounded-2xl
                border
                bg-white
                p-6
                text-center
                font-medium
                hover:shadow-md
                transition
              "
            >
              {partner}
            </div>
          ))}

        </div>

      </section>

    </>
  );
}