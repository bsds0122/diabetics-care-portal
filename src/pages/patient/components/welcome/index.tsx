import { BannerContent } from "@/pages/patient/components/welcome/BannerPatientContent";

export const WelcomeBanner = () => {
  return (
    <div className="relative overflow-hidden bg-card/20 backdrop-blur-xl border border-border rounded-2xl p-10 text-center shadow-sm group transition-all duration-500 hover:shadow-md hover:border-primary/30 hover:-translate-y-1">

      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <BannerContent />

    </div>
  );
};