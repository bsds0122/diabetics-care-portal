import { SectionHeading } from "@/pages/auth/common/SectionHeading";
import { Building2 } from "lucide-react";

const partners = [
  {
    name: "Ministry of Health",
    sub: "Government of Malawi",
  },
  {
    name: "World Health Organization (WHO)",
    sub: "Global health guidance and technical support",
  },
  {
    name: "UNICEF",
    sub: "Support for maternal, child, and community health",
  },
  {
    name: "Médecins Sans Frontières (MSF)",
    sub: "Humanitarian medical assistance",
  },
  {
    name: "Kamuzu University of Health Sciences (KUHeS)",
    sub: "Medical education and health research",
  },
  {
    name: "Mzuzu University",
    sub: "Academic collaboration and healthcare training",
  },
];

export function Partners() {
  return (
    <section
      className="bg-slate-50 py-20 md:py-24"
      aria-labelledby="partners-title"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <header className="max-w-3xl mx-auto text-center mb-14">
          <SectionHeading
            id="partners-title"
            title="Healthcare and Academic Partners"
            center
          />

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            The Diabetes Management System works alongside healthcare
            institutions, international organizations, and academic partners
            to support quality diabetes care, healthcare education, and
            evidence-based clinical practice.
          </p>
        </header>

        {/* Partners Grid */}
        <div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          role="list"
        >
          {partners.map((partner) => (
            <article
              key={partner.name}
              role="listitem"
              className="
                rounded-xl
                border
                bg-white
                p-6
                text-center
                transition-all
                duration-300
                hover:shadow-md
                hover:border-slate-200
              "
            >
              {/* Icon */}
              <div
                className="
                  mx-auto mb-5 flex h-12 w-12 items-center
                  justify-center rounded-xl
                  bg-primary/10 text-primary
                "
                aria-hidden="true"
              >
                <Building2 className="h-6 w-6" />
              </div>

              {/* Partner Name */}
              <h3 className="text-sm font-semibold leading-6 text-foreground">
                {partner.name}
              </h3>

              {/* Partner Description */}
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {partner.sub}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Partners;