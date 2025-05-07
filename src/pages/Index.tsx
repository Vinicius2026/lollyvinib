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
import { ComparativeAdvantageSection } from '@/components/features/ServicosHorasPage/ComparativeAdvantageSection';

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
              className="px-8 py-4 bg-black/30 backdrop-blur-xl border border-white/10 hover:bg-orange-700 hover:border-white/20 text-white font-semibold text-lg rounded-lg shadow-[0_0_15px_5px_rgba(100,100,200,0.07),_0_0_5px_1px_rgba(200,200,255,0.05)_inset] hover:shadow-[0_0_20px_7px_rgba(120,120,220,0.1),_0_0_8px_2px_rgba(220,220,255,0.07)_inset] transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-neon-cyan/80 focus:ring-offset-2 focus:ring-offset-brand-dark tracking-wide whitespace-normal min-w-[300px] max-w-[90%] sm:max-w-[600px]"
            >
              VER AGENTE REAL CLINICA DENTARIA (WHATSAPP)
            </button>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.6 }}>
          <WhyUsSection />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.65 }}>
          <ComparativeAdvantageSection />
        </motion.div>

        <motion.div 
          className="text-center mt-8 mb-8 sm:mt-10 sm:mb-12 px-4"
          variants={fadeInUp} 
          initial="hidden" 
          animate="visible" 
          transition={{ duration: 0.6, delay: 0.68 }}
        >
          <a 
            href="/servicos-horas" 
            className="inline-block px-8 py-4 sm:px-10 sm:py-5 bg-black/30 backdrop-blur-xl border border-white/10 hover:bg-white/5 hover:border-white/20 text-white font-semibold text-base sm:text-lg rounded-lg shadow-[0_0_15px_5px_rgba(100,100,200,0.07),_0_0_5px_1px_rgba(200,200,255,0.05)_inset] hover:shadow-[0_0_20px_7px_rgba(120,120,220,0.1),_0_0_8px_2px_rgba(220,220,255,0.07)_inset] transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-neon-cyan/80 focus:ring-offset-2 focus:ring-offset-brand-dark tracking-wide uppercase"
          >
            ACESSAR PÁGINA PREÇOS POR HORA
          </a>
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
