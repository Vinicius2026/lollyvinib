import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { ShowcaseSection } from '@/components/sections/ShowcaseSection';
import WhyUsSection from '@/components/WhyUsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import TechPanel from '@/components/TechPanel';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveQuiz from "@/components/landing/InteractiveQuiz";
import { fadeInUp } from "@/lib/motion/config";
import CrystalDataHorizonBackground from "@/components/backgrounds/CrystalDataHorizonBackground";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-ailoop-dark-blue">
      <Navbar />
      <CrystalDataHorizonBackground />
      <main className="flex-grow relative z-10">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.1 }}>
          <HeroSection />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.2 }}>
          <ShowcaseSection />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.3 }}>
          <TechPanel />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.4 }}>
          <WhyUsSection />
        </motion.div>
        
        <div className="relative py-16 md:py-24 overflow-hidden">
          <motion.div 
            className="relative"
            variants={fadeInUp} 
            initial="hidden" 
            animate="visible" 
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <InteractiveQuiz />
            </AnimatePresence>
          </motion.div>
        </div>

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
