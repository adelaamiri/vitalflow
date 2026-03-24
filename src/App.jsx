import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import ConsultationSection from "./components/ConsultationSection/ConsultationSection";
import WhyChooseSection from "./components/WhyChooseSection/WhyChooseSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import AboutSection from "./components/AboutSection/AboutSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import BlogSection from "./components/BlogSection/BlogSection";
import FAQSection from "./components/FAQSection/FAQSection";
import ContactFooterSection from "./components/ContactFooterSection/ContactFooterSection";

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
