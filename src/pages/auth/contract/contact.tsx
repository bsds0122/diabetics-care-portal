import { SectionBanner } from "../common/SectionBanner";
import { EmergencyNotice } from "./Emergency";
import { ContactFormSection } from "./form";
import { ContactInformation } from "./information";
import { HospitalLocationMap } from "./map";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* HERO */}
      <SectionBanner
        title=""
        subtitle=""
      />

      {/* MAIN CONTENT */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* CONTACT FORM */}
          <div className="lg:col-span-8">
            <ContactFormSection />
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:col-span-4">
            <ContactInformation />
            <EmergencyNotice />
          </aside>
        </div>
      </section>

      {/* MAP */}
      <HospitalLocationMap />
    </div>
  );
}