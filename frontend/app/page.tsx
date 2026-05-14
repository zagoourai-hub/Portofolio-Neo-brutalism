import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PriceSection } from "@/components/sections/price-section";
import { ProjectSection } from "@/components/sections/project-section";
import { SkillSection } from "@/components/sections/skill-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { BrutalTicker } from "@/components/shared/brutal-ticker";
import { Footer } from "@/components/shared/footer";
import { GsapEffects } from "@/components/shared/gsap-effects";
import { Navbar } from "@/components/shared/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GsapEffects />
      <Navbar />
      <main>
        <HeroSection />
        <BrutalTicker />
        <AboutSection />
        <TimelineSection />
        <SkillSection />
        <ProjectSection />
        <PriceSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
