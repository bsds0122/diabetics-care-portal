import { WaveEmoji } from "@/pages/doctor/components/Dashboard/WelcomeBanner/WaveEmoji";

export const BannerContent = () => {
  return (
    <div className="relative z-10 flex flex-col  items-center justify-center space-y-4">

      <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-foreground leading-tight max-w-3xl text-center">
        Welcome, Patient{" "}
        <span className="text-primary drop-shadow-sm">John</span>{" "}
        <WaveEmoji />
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl font-medium leading-relaxed text-center opacity-80">
      Let’s manage and monitor your health together for better outcomes.
      </p>

    </div>
  );
};