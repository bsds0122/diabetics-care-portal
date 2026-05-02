import React from "react";
import { LandingHeader } from "@/pages/auth/components/Landing/LandingHeader";
import { HeroSection } from "@/pages/auth/components/Landing/HeroSection";
import { ProblemSolutionSection } from "@/pages/auth/components/Landing/ProblemSolutionSection";
import { DoctorCardSection } from "@/pages/auth/components/Landing/DoctorCardSection";
import { HowItWorksSection } from "@/pages/auth/components/Landing/HowItWorksSection";
import { FeaturesSection } from "@/pages/auth/components/Landing/FeaturesSection";
import { EducationSection } from "@/pages/auth/components/Landing/EducationSection";
import { Footer } from "@/pages/auth/footer";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-green-600/20">
      
      <LandingHeader />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="bg-background w-full py-10 px-4 md:py-16 overflow-hidden">
          
          <div className="max-w-5xl mx-auto space-y-10">

            {/* Hero */}
            <HeroSection />

            {/* Problem & Solution */}
            <ProblemSolutionSection />

            {/* Doctor Card */}
            <DoctorCardSection />

            {/* How It Works */}
            <HowItWorksSection />

            {/* Features */}
            <FeaturesSection />

            {/* Education */}
            <EducationSection />

          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
};

export default LandingPage;