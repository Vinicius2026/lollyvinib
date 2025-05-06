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
        
        <div className="relative py-16 md:py-24 overflow-hidden">
          <motion.div 
            className="relative"
            variants={fadeInUp} 
            initial="hidden" 
            animate="visible" 
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <InteractiveQuiz />
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              type="button"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 tracking-wide whitespace-normal min-w-[300px] max-w-[90%] sm:max-w-[600px]"
            >
              Quero ver Agente Assistente de uma Clinica Dentaria
            </button>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.6 }}>
          <WhyUsSection />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.7 }}>
          <CTASection />
        </motion.div>
      </main>
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.8 }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
