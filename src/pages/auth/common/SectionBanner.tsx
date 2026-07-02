type SectionBannerProps = {
  title: string;
  subtitle: string;
};

export function SectionBanner({
  title,
  subtitle,
}: SectionBannerProps) {
  return (
    <section className="bg-primary py-16 text-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="mt-3 text-sm md:text-base text-white/90">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default SectionBanner;