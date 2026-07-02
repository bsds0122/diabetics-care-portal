import { HeroSlider } from "@/pages/auth/landing/HeroSlider";
import { Welcome } from "@/pages/auth/landing/Welcome";
import { Announcements } from "@/pages/auth/landing/Announcements";


function LandingPage() {
  return (
    <>
      <HeroSlider />
      <Welcome />
      <Announcements />
   
    </>
  );
}

export default LandingPage;
