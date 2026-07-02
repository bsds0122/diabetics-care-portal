import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/pages/auth/common/SectionHeading";

import welcomeImage from "@/images/77cc13586e374c8582353ac42fe13812.jpg";

const points = [
  "Secure electronic patient records for diabetes care",
  "Continuous monitoring of blood glucose and blood pressure levels",
  "Cardiovascular risk assessment to support early prevention and treatment",
  "Improved collaboration between healthcare professionals and referral facilities",
];

export function Welcome() {
  return (
    <section
      className="container mx-auto px-4 py-20 md:py-28"
      aria-labelledby="dms-overview"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2">

        {/* ================= IMAGE SECTION ================= */}
        <div className="order-2 lg:order-1">
          <div
            className="
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-2xl
            "
          >
            <img
              src={welcomeImage}
              alt="Diabetes specialist doctor consulting a patient using digital healthcare technology"
              className="
                h-[420px]
                w-full
                object-cover
                object-center
                brightness-110
                contrast-110
                saturate-110
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        </div>

        {/* ================= CONTENT SECTION ================= */}
        <div className="order-1 lg:order-2">

          <header className="max-w-xl">
            <SectionHeading
              id="dms-overview"
              eyebrow="Diabetes Care Unit"
              title="Improving Diabetes Care Through Digital Health Solutions"
              center={false}
            />

            <p
              className="
                mt-6
                text-base
                leading-8
                text-muted-foreground
                md:text-lg
              "
            >
              The Diabetes Management System (DMS) supports healthcare
              professionals in delivering high-quality diabetes care through
              secure electronic patient records, continuous clinical monitoring,
              cardiovascular risk assessment, and improved coordination between
              healthcare teams and referral hospitals.
            </p>
          </header>

          {/* ================= KEY FEATURES ================= */}
          <div className="mt-10 space-y-5">
            {points.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4"
              >
                <div className="mt-1">
                  <CheckCircle2
                    className="
                      h-6
                      w-6
                      shrink-0
                      text-primary
                    "
                  />
                </div>

                <p
                  className="
                    text-base
                    leading-7
                    text-foreground
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Welcome;