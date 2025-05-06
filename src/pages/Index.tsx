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
import ExecutiveTeamSection from '@/components/sections/ExecutiveTeamSection';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveQuiz from "@/components/landing/InteractiveQuiz";
import { fadeInUp } from "@/lib/motion/config";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-ailoop-dark-blue">
      <Navbar />
      <main className="flex-grow">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.1 }}>
          <HeroSection />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.3 }}>
          <TechPanel />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.4 }}>
          <WhyUsSection />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.5 }}>
          <AnimatePresence mode="wait">
            <InteractiveQuiz />
          </AnimatePresence>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.6 }}>
          <ServicesSection />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.7 }}>
          <AboutSection />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.8 }}>
          <CTASection />
        </motion.div>
      </main>
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.9 }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
