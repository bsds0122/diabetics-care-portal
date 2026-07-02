import { BannerContent } from "@/pages/doctor/components/Dashboard/BannerContent";

interface WelcomeBannerProps {
  greeting: string;
  doctorName: string;
}

export const WelcomeBanner = ({
  greeting,
  doctorName,
}: WelcomeBannerProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm">
      <div className="relative z-10">
        <BannerContent
          greeting={greeting}
          doctorName={doctorName}
        />
      </div>
    </div>
  );
};