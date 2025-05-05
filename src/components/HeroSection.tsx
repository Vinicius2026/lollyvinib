import React from 'react';
import { Button } from "@/components/ui/button";
import { ClipboardList, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion/config';
// import WaveformAnimation from './animations/WaveformAnimation';
// import ParticlesBackground from './ParticlesBackground';
import HeroAnimation3D from './HeroAnimation3D';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center relative text-center overflow-hidden"
    >
      <HeroAnimation3D />
      
      <div className="container mx-auto relative z-10 flex flex-col items-center">
        <motion.div 
          className="max-w-3xl mx-auto space-y-8 mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight font-serif">
            Marketing Digital com <span className="text-neon-cyan">Inteligência Artificial</span> de Verdade.
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 font-sans">
            Agentes humanizados no WhatsApp, tráfego com IA e gestão digital completa para empresas que querem vender mais, com mais inteligência.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="outline"
              className="group flex items-center gap-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:text-neon-cyan font-sans rounded-md px-6 py-3 transition-all duration-300 ease-out"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Nossos planos 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline"
              className="group flex items-center gap-2 border-white/50 text-white/80 hover:border-white hover:text-white hover:bg-white/10 font-sans rounded-md px-6 py-3 transition-all duration-300 ease-out"
            >
              Testar Agente Assistente
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
