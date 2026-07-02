import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Globe,
  FileText,
  HeartPulse,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white">
      <div className="container mx-auto px-4 py-16">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= SYSTEM OVERVIEW ================= */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <h3 className="text-lg font-bold leading-tight text-cyan-300">
                Diabetes Management
              </h3>
            </div>

            <p className="text-sm text-white/70 leading-7">
              A digital healthcare platform supporting clinicians in the
              management, monitoring, and long-term care of patients living
              with diabetes at Mzuzu Central Hospital, Malawi.
            </p>
          </div>


          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-5">
              Contact Information
            </h3>

            <div className="space-y-5 text-sm text-white/70">

              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-cyan-300 shrink-0 mt-1" />

                <div className="leading-relaxed">
                  <p className="text-white font-medium">
                    Diabetes Care Unit
                  </p>
                  <p>Mzuzu Central Hospital</p>
                  <p>
                    Private Bag 209, Luwinga,<br />
                    Mzuzu, Malawi
                  </p>
                </div>
              </div>


              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-cyan-300 shrink-0 mt-1" />

                <div className="leading-relaxed">
                  <p>+265 1 320 916</p>
                  <p>+265 1 320 620</p>
                </div>
              </div>


              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-cyan-300 shrink-0 mt-1" />

                <p className="break-all">
                  diabetescare@mzchospital.mw
                </p>
              </div>

            </div>
          </div>


          {/* ================= HEALTH RESOURCES ================= */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-5">
              Health Resources
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <a
                  href="https://www.who.int"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-cyan-300 transition"
                >
                  <Globe className="h-4 w-4 mt-1 shrink-0" />
                  WHO Diabetes Guidelines
                </a>
              </li>


              <li>
                <a
                  href="/resources/diabetes-care-guide.pdf"
                  download
                  className="flex items-start gap-3 text-white/70 hover:text-cyan-300 transition"
                >
                  <FileText className="h-4 w-4 mt-1 shrink-0" />
                  Diabetes Care Guide
                </a>
              </li>


              <li>
                <a
                  href="/resources/nutrition-guide.pdf"
                  download
                  className="flex items-start gap-3 text-white/70 hover:text-cyan-300 transition"
                >
                  <FileText className="h-4 w-4 mt-1 shrink-0" />
                  Healthy Nutrition Guide
                </a>
              </li>


              <li>
                <a
                  href="/resources/patient-self-management.pdf"
                  download
                  className="flex items-start gap-3 text-white/70 hover:text-cyan-300 transition"
                >
                  <FileText className="h-4 w-4 mt-1 shrink-0" />
                  Diabetes Self-Management Handbook
                </a>
              </li>

            </ul>
          </div>


          {/* ================= CONNECT & HOURS ================= */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-5">
              Connect & Clinic Hours
            </h3>

            <p className="text-sm text-white/70 leading-7 mb-5">
              Follow our hospital updates, diabetes awareness campaigns,
              patient education programmes, and healthcare announcements.
            </p>


            {/* Social Icons */}
            <div className="flex gap-3 mb-6">

              {[
                { icon: Facebook, link: "https://facebook.com" },
                { icon: Linkedin, link: "https://linkedin.com" },
                { icon: Youtube, link: "https://youtube.com" },
              ].map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    h-10 w-10 rounded-full
                    bg-white/10
                    flex items-center justify-center
                    hover:bg-cyan-500
                    transition duration-300
                  "
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}

            </div>


            {/* Clinic Hours */}
            <div className="rounded-xl bg-white/5 p-4">
              <h4 className="font-semibold text-white mb-2">
                Clinic Hours
              </h4>

              <p className="text-sm text-white/70 leading-6">
                Monday – Friday <br />
                8:00 AM – 4:30 PM
              </p>
            </div>

          </div>

        </div>


        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-14 pt-6 border-t border-white/10">

          <div className="
            flex flex-col lg:flex-row
            items-center justify-between
            gap-3
            text-sm text-white/50
          ">

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;