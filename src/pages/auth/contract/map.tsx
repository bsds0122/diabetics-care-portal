export const HospitalLocationMap = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="h-[450px] overflow-hidden rounded-3xl border shadow-sm">
        <iframe
          title="Mzuzu Central Hospital Location"
          src="https://www.google.com/maps?q=Mzuzu+Central+Hospital,Malawi&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>
    </section>
  );
};