import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import TechPanel from '@/components/TechPanel'; // New component for the tech panel

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-ailoop-dark-blue">
      <Navbar />
      <HeroSection />
      <div className="mt-6 md:mt-8">
        <ShowcaseSection />
      </div>
      <TechPanel />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
