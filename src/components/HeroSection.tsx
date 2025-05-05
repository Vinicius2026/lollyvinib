import React from 'react';
import { Button } from "@/components/ui/button";
import { ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion/config';
// import ParticlesBackground from './ParticlesBackground';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center relative">
      {/* <ParticlesBackground /> */}
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Marketing Digital com <span className="text-gradient-light glow">Inteligência Artificial</span> de Verdade.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300">
            Agentes humanizados no WhatsApp, tráfego com IA e gestão digital completa para empresas que querem vender mais, com mais inteligência.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="flex items-center gap-2 bg-black/20 border border-yellow-400/60 text-gray-200 backdrop-blur-sm rounded-lg px-6 py-3 transition-all duration-300 ease-out hover:bg-yellow-900/10 hover:border-yellow-400/90 hover:text-yellow-300"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ClipboardList className="w-5 h-5" />
              Nossos planos
            </Button>
            
            <Button 
              variant="outline"
              className="flex items-center gap-2 bg-black/20 border border-white/30 text-gray-300 backdrop-blur-sm rounded-lg px-6 py-3 transition-all duration-300 ease-out hover:bg-white/10 hover:border-white/60 hover:text-white"
            >
              Testar Agente Assistente
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
