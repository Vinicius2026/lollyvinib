import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion/config';
// import WaveformAnimation from './animations/WaveformAnimation';
// import ParticlesBackground from './ParticlesBackground';
// import HeroAnimation3D from './HeroAnimation3D';
// import Typewriter from 'typewriter-effect';
import DarkCloudParticles from './animations/DarkCloudParticles';
// import { CharacterViewer } from './animations/CharacterViewer'; // Removido
// import PulsatingElement from './animations/PulsatingElement'; // Removido

// Lista de títulos/serviços
// const servicesList = [
//   "Marketing IAL",
//   "Agente WhatsApp", 
//   "Tráfego Pago IAL",
//   "Landing Page Conversão IAL",
//   "Funis Autopiloto IAL"
// ];

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center px-4 py-24 md:py-32 text-center overflow-hidden bg-brand-dark min-h-screen" // Removido md:text-left para centralizar
    >
      <DarkCloudParticles />
      {/* <WaveformAnimation /> */}
      
      {/* Container principal centralizado */}
      <motion.div
        className="container mx-auto relative z-10 flex flex-col items-center gap-6 md:gap-8 mt-12 md:mt-16 max-w-3xl" // Adicionado max-w-3xl e centralizado
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Título restaurado */}
        <h1 className="text-4xl md:text-5xl font-bold text-brand-white leading-tight font-serif">
          Automação Inteligente <br /> para o seu <span className="text-neon-cyan">Negócio Digital</span>
        </h1>

        {/* Parágrafo restaurado */}
        <p className="text-lg md:text-xl text-white/80 font-sans font-light">
          Otimize seu atendimento, vendas e marketing com soluções de IA personalizadas. Transforme a experiência do seu cliente e impulsione seus resultados.
        </p>

        {/* Botões restaurados e re-estilizados conforme briefing */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          {/* Botão 1: Neon Cyan */}
          <Button
            variant="outline"
            className="group flex items-center justify-center gap-2 bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-sans rounded-md px-8 py-3 text-lg transition-all duration-300 ease-out"
            onClick={() => {
              // Lógica para scroll ou link
              const element = document.getElementById('services'); // Exemplo: scroll para serviços
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Planos
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          {/* Botão 2: Branco/Preto (exemplo com branco) */}
          <Button
            variant="outline"
            className="group flex items-center justify-center gap-2 bg-transparent border border-brand-white text-brand-white hover:bg-brand-white/10 font-sans rounded-md px-8 py-3 text-lg transition-all duration-300 ease-out"
             onClick={() => {
                 // Lógica para o WhatsApp ou outra ação
                 window.open('https://wa.me/SEUNUMERO', '_blank'); // Substitua SEUNUMERO
             }}
          >
            Falar com Especialista
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
