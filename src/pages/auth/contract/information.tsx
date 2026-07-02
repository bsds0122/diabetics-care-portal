import { Clock, Mail, MapPin } from "lucide-react";

export const ContactInformation = () => {
  return (
    <div className="rounded-3xl border bg-card p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-foreground">
        Diabetes Department Contact Information
      </h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Get in touch with the Diabetes Care Unit for appointments,
        consultations, treatment guidance, and general inquiries.
      </p>

      <div className="mt-8 space-y-6">
        {/* Location */}
        <div className="flex items-start gap-4">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />

          <div>
            <p className="font-semibold text-foreground">
              Location
            </p>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Diabetes Care Unit
              <br />
              Mzuzu Central Hospital
              <br />
              Mzuzu, Malawi
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />

          <div>
            <p className="font-semibold text-foreground">
              Email Address
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              diabetes.unit@mzchospital.mw
            </p>
          </div>
        </div>

        {/* Clinic Hours */}
        <div className="flex items-start gap-4">
          <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />

          <div>
            <p className="font-semibold text-foreground">
              Clinic Hours
            </p>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Monday – Friday
              <br />
              8:00 AM – 4:30 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};