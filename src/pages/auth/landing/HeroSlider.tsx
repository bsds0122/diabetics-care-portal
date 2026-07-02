import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

import heroImage1 from "@/images/173b954639004a3591ae35a91820a0bc.jpg";
import heroImage2 from "@/images/41cd682e2caf4ecda9af2eb1aa742dda.jpg";

/* ================= HERO SLIDES ================= */
const slides = [
  {
    img: heroImage1,
    title: "Improving Diabetes Care Through Digital Health Solutions",
    subtitle:
      "Supporting healthcare professionals with secure patient records, clinical monitoring, and coordinated diabetes care at Mzuzu Central Hospital.",
  },
  {
    img: heroImage2,
    title: "Patient Monitoring and Long-Term Follow-Up",
    subtitle:
      "Monitor blood glucose, blood pressure, clinical assessments, and treatment progress to support effective long-term diabetes management.",
  },
  {
    img: heroImage1,
    title: "Early Cardiovascular Risk Assessment and Prevention",
    subtitle:
      "Support preventive healthcare through cardiovascular risk evaluation and timely clinical interventions for diabetic patients.",
  },
];

export function HeroSlider() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });

  const [activeSlide, setActiveSlide] = useState(0);

  /* ================= TRACK CURRENT SLIDE ================= */
  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setActiveSlide(embla.selectedScrollSnap());
    };

    embla.on("select", onSelect);
    onSelect();

    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  /* ================= AUTO PLAY ================= */
  useEffect(() => {
    if (!embla) return;

    const autoplay = setInterval(() => {
      embla.scrollNext();
    }, 6000);

    return () => clearInterval(autoplay);
  }, [embla]);

  /* ================= KEYBOARD CONTROL ================= */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (!embla) return;

      if (event.key === "ArrowRight") {
        embla.scrollNext();
      }

      if (event.key === "ArrowLeft") {
        embla.scrollPrev();
      }
    },
    [embla]
  );

  return (
    <section
      className="relative outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Diabetes Management System Hero Slider"
    >
      {/* ================= SLIDER ================= */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%]"
            >
              <div className="relative h-[620px] lg:h-[760px]">

                {/* Background Image */}
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    brightness-110
                    contrast-110
                    saturate-125
                  "
                />

                {/* Professional Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-slate-950/60
                    via-slate-900/35
                    to-transparent
                  "
                />

                {/* ================= CONTENT ================= */}
                <div className="relative z-10 flex h-full items-center">
                  <div className="container mx-auto px-5 lg:px-8">
                    <div className="max-w-3xl">

                      {/* Main Heading */}
                      <h1
                        className="
                          text-4xl
                          sm:text-5xl
                          lg:text-6xl
                          font-bold
                          leading-tight
                          text-white
                          drop-shadow-2xl
                        "
                      >
                        {slide.title}
                      </h1>

                      {/* Description */}
                      <p
                        className="
                          mt-6
                          max-w-2xl
                          text-base
                          sm:text-lg
                          lg:text-xl
                          leading-8
                          text-slate-100
                          drop-shadow-lg
                        "
                      >
                        {slide.subtitle}
                      </p>

                      {/* Action Buttons */}
                      <div className="mt-10 flex flex-wrap gap-4">

                        <Link
                          to="/contact-us"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-white
                            px-8
                            py-3.5
                            text-sm
                            font-semibold
                            text-primary
                            shadow-xl
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-2xl
                          "
                        >
                          Contact Diabetes Care Unit
                          <Phone className="h-4 w-4" />
                        </Link>

                        <Link
                          to="/about"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/40
                            bg-white/10
                            px-8
                            py-3.5
                            text-sm
                            font-semibold
                            text-white
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:bg-white/20
                            hover:-translate-y-1
                          "
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SLIDER INDICATORS ================= */}
      <div
        className="
          absolute
          bottom-8
          left-0
          right-0
          z-20
          flex
          justify-center
          gap-3
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => embla?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              rounded-full
              transition-all
              duration-300
              ${
                activeSlide === index
                  ? "h-2.5 w-10 bg-white"
                  : "h-2.5 w-2.5 bg-white/60 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;