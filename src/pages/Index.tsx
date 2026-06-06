
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Anthony Claran | Développeur Full Stack & Graphic Designer";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
