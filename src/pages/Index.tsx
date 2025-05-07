import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { ShowcaseSection } from '@/components/sections/ShowcaseSection';
import WhyUsSection from '@/components/WhyUsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import TechPanel from '@/components/TechPanel';
import { motion, AnimatePresence } from 'framer-motion';
import EngagementPanel from "@/components/sections/EngagementPanel";
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
        
        <motion.div 
          className="relative py-16 md:py-24 overflow-hidden px-4"
          variants={fadeInUp} 
          initial="hidden" 
          animate="visible" 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
            <motion.div 
              className="w-full md:w-1/2 flex justify-center md:justify-end"
              variants={fadeInUp} 
              initial="hidden" 
              animate="visible" 
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <motion.div
                className="relative inline-block rounded-lg"
                animate={{
                  y: ["0px", "-8px", "0px"],
                }}
                transition={{
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <img 
                  src="/image_grande/collection-stack-ailoop-brasil-bab-nike.png" 
                  alt="Collection Stack Ailoop Brasil Bab Nike" 
                  className="max-w-lg h-auto object-contain rounded-lg opacity-75"
                />
              </motion.div>
            </motion.div>

            <motion.div 
              className="w-full md:w-1/2 flex justify-center md:justify-start"
              variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <EngagementPanel />
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

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
