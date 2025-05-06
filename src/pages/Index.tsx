import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { ShowcaseSection } from '@/components/sections/ShowcaseSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import TechPanel from '@/components/TechPanel';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-ailoop-dark-blue">
      <Navbar />
      <HeroSection />

      <div className="mt-6 md:mt-8 mb-12 md:mb-16">
        <ShowcaseSection />
      </div>

      {/* Efeito de Nebulosa Roxa */}
      <div
        className="h-32 md:h-48 w-full relative -mt-16 md:-mt-24 mb-0 md:mb-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(160, 32, 240, 0.25) 0%, rgba(10, 10, 10, 0) 70%)'
        }}
      />

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
