import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import FloatingBackground from "@/components/FloatingBackground";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import InterestsSection from "@/components/InterestsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background relative">
        <FloatingBackground />
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <InterestsSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
