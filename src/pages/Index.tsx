import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SystemSection } from "@/components/sections/SystemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { MentorSection } from "@/components/sections/MentorSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { PortalSection } from "@/components/sections/PortalSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ConnectSection } from "@/components/sections/ConnectSection";
import { FeedbackSection } from "@/components/sections/FeedbackSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SystemSection />
        <ServicesSection />
        <CategoriesSection />
        <MentorSection />
        <EventsSection />
        <PartnersSection />
        <TeamSection />
        <FeedbackSection />
        <JourneySection />
        <NewsletterSection />
        <PortalSection />
        <ImpactSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
