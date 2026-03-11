import React from "react";
import HeroSection from "./components/HeroSection";
import ConsultationSection from "./ConsultationSection";
import WhyChooseSection from "./WhyChooseSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorksSection";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";
import FAQSection from "./FAQSection";
import ContactFooterSection from "./ContactFooterSection";
export default function App() {
  return (
    <>
      <HeroSection />
      <ConsultationSection />
      <WhyChooseSection />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactFooterSection />
    </>
  );
}
