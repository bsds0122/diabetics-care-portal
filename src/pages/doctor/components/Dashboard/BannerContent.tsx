import { WaveEmoji } from "@/pages/doctor/components/Dashboard/WaveEmoji";

interface BannerContentProps {
  greeting: string;
  doctorName: string;
}

export const BannerContent = ({
  greeting,
  doctorName,
}: BannerContentProps) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-3">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground">
        {greeting},{" "}
        <span className="text-primary">
          Doctor. {doctorName}
        </span>{" "}
        <WaveEmoji />
      </h2>

      <p className="max-w-3xl text-sm md:text-base text-muted-foreground">
      Welcome back. Track patient health trends, review cardiovascular risk levels,
       and Support early care.



       
       
       
      </p>
    </div>
  );
};