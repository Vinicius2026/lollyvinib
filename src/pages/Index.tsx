import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
// import PersonModelSection from '@/components/sections/PersonModelSection'; // Remover import
import ShowcaseSection from '@/components/sections/ShowcaseSection';
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
