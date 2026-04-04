// src/App.jsx
import React from "react";
import {
  HeroSection,
  ConsultationSection,
  WhyChooseSection,
  ServicesSection,
  AboutSection,
  FeaturesSection,
  HowItWorksSection,
  TestimonialsSection,
  BlogSection,
  FAQSection,
  ContactFooterSection,
  About,
  BookCall,
  Services,
  Doctors,
  Blog,
  Contact,
} from "./components";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
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
              <Services />
              <Doctors />
              <Blog />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-call" element={<BookCall />} />
      </Routes>
    </BrowserRouter>
  );
}
