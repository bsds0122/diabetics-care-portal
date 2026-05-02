import { BannerContent } from "@/pages/doctor/components/Dashboard/WelcomeBanner/BannerContent";

export const WelcomeBanner = () => {
  return (
    <div className="relative overflow-hidden bg-card/20 backdrop-blur-xl border border-border/40 rounded-3xl p-10 text-center shadow-lg group transition-all duration-500 hover:shadow-xl hover:border-primary/20">

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Content */}
      <BannerContent />

    </div>
  );
};