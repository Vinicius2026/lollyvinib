import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion/config';
// import WaveformAnimation from './animations/WaveformAnimation';
// import ParticlesBackground from './ParticlesBackground';
// import HeroAnimation3D from './HeroAnimation3D';
import Typewriter from 'typewriter-effect';
import DarkCloudParticles from './animations/DarkCloudParticles';
// Removida importação CharacterViewer

// Restaurada lista de serviços original
const servicesList = [
  "Marketing IAL",
  "Agente WhatsApp", 
  "Tráfego Pago IAL",
  "Landing Page Conversão IAL",
  "Funis Autopiloto IAL"
];

const HeroSection: React.FC = () => {

  return (
    <section 
      id="hero" 
      // Layout original: flex col, items-center, text-center
      className="relative flex flex-col items-center justify-center px-4 pt-32 pb-64 md:pb-80 text-center overflow-hidden bg-brand-dark min-h-screen"
    >
      <DarkCloudParticles />

      {/* Container Typewriter (Mantido Centralizado) */}
      <motion.div
        className="w-full max-w-4xl mx-auto mb-12 md:mb-16 z-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="text-lg md:text-xl text-white/80 font-mono h-7 text-center">
          <Typewriter
            options={{
              strings: ['Atendente, Vendedor e SAC, às vezes até melhor que o proprietário.'],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </div>
      </motion.div>
      
      {/* Container Principal Centralizado */}
      <motion.div 
        className="container mx-auto relative z-10 max-w-4xl flex flex-col items-center space-y-8" 
        variants={fadeInUp} 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Título Original */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-tight font-serif flex flex-col items-center">
          <span>Marketing <span className="text-cyan-400/90 filter brightness-110 drop-shadow-[0_0_3px_rgba(0,255,255,0.4)]">& IA</span></span>
          <span>Funil Loop</span>
        </h1>
        
        {/* Descrição Original */}
        <p className="text-xl md:text-2xl text-white/80 font-sans font-light max-w-3xl text-center">
          Agentes humanizados no WhatsApp, tráfego inteligente e gestão digital completa para escalar suas vendas.
        </p>
        
        {/* Lista de Serviços Original */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2">
          {servicesList.map((service) => (
            <span key={service} className="text-md text-white/60 font-sans font-light"> {/* Estilo original da lista */}
              {service}
            </span>
          ))}
        </div>
        
        {/* Botões Originais */}
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button 
            variant="outline"
            // Estilo original do botão
            className="group flex items-center gap-2 bg-transparent border border-white/20 text-white/70 hover:text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 font-sans rounded-md px-6 py-3 transition-all duration-300 ease-out"
          >
            Nossos planos 
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline"
            className="group flex items-center gap-2 bg-transparent border border-neon-purple/50 text-neon-purple/80 hover:text-white hover:border-neon-purple hover:bg-neon-purple/20 font-sans rounded-md px-6 py-3 transition-all duration-300 ease-out shadow-md shadow-neon-purple/30 hover:shadow-lg hover:shadow-neon-purple/50" // Estilo Neon Purple (como estava antes)
          >
            Testar Agente Assistente
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
