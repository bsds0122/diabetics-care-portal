import { Link, useNavigate } from "react-router-dom";

import heroImage from "@/images/Gemini_Generated_Image_ru72yxru72yxru72.png";
import logo from "@/images/Gemini_Generated_Image_l8lkkml8lkkml8lk.png";

export function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mzuzu Central Hospital Diabetes Management System"
          className="
            h-full
            w-full
            object-cover
            object-center
            scale-105
            brightness-90
          "
          loading="eager"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-3xl px-6 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div
            className="
              h-20
              w-20
              md:h-32
              md:w-32
              rounded-full
              overflow-hidden
              border-2
              border-white
              shadow-xl
              bg-white
            "
          >
            <img
              src={logo}
              alt="Diabetes Care Portal Logo"
              className="
                h-full
                w-full
                object-cover
                object-center
                scale-125
              "
            />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="
            text-2xl
            md:text-3xl
            font-bold
            tracking-tight
            text-white
            drop-shadow-lg
          "
        >
          Diabetes Management
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-3
            text-base
            md:text-lg
            font-medium
            text-white
            drop-shadow-md
          "
        >
          Supporting Diabetes Care Through Modern Digital Health Solutions
        </p>

        {/* Description */}
        <div className="mt-6 max-w-3xl mx-auto text-sm md:text-base leading-7 text-gray-100 space-y-4 drop-shadow-md">

          <p>
            Welcome to the <span className="font-semibold">Diabetes Management System (DMS)</span>,
            a secure and intelligent healthcare platform designed to support clinicians in
            managing diabetic patient records, monitoring treatment progress, and assessing
            the risk of cardiovascular complications over the next 10 years.
          </p>

          <p>
            The platform enhances efficient digital healthcare services at
            <span className="font-semibold"> Mzuzu Central Hospital</span> by supporting
            evidence-based decision making, patient monitoring, and long-term diabetes management.
          </p>

          <p>
            New doctors should contact the hospital administrator to request account registration.
            Existing doctors can sign in to access patient management, clinical monitoring,
            and decision-support services.
          </p>

        </div>

        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4
          "
        >
          <button
            type="button"
            onClick={() => navigate("/")}
            className="
              px-6
              py-3
              rounded-lg
              bg-white/15
              border
              border-white/30
              text-white
              font-semibold
              backdrop-blur-md
              hover:bg-white/25
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Return to Previous
          </button>

          <Link
            to="/login"
            className="
              px-6
              py-3
              rounded-lg
              bg-white/15
              border
              border-white/30
              text-white
              font-semibold
              backdrop-blur-md
              hover:bg-white/25
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Sign In to Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;