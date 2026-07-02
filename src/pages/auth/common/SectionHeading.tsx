type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  center?: boolean;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
      )}

      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-primary-deep sm:text-4xl"
      >
        {title}
      </h2>

    </div>
  );
}