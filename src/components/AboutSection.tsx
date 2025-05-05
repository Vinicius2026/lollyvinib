import React from 'react';
import { motion } from 'framer-motion';
import MockAiloopDons2 from '../assets/illustrations/mock-ailoop-dons-2.svg';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-ailoop-dark-blue py-24 px-4">
      <div className="container mx-auto">
        {/* Título com estilo cyberpunk/futurista */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-ailoop-neon-blue via-ailoop-purple to-ailoop-pink">
            Hoje a IA sabe vender talvez melhor que você e de forma automática 24h 7/7
          </span>
        </motion.h2>

        {/* Grid principal da seção Sobre - Mantido */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Coluna do SVG estilizado (local correto) */}
          <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 order-1 md:order-2">
            {/* Container moderno para o SVG */}
            <motion.div
              className="relative p-[1px] rounded-xl overflow-hidden bg-gradient-to-br from-ailoop-neon-blue/30 to-ailoop-purple/30 shadow-glow-purple"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative bg-ailoop-dark-blue/80 backdrop-blur-md rounded-xl p-6">
                <motion.img
                  src={MockAiloopDons2}
                  alt="Ilustração AILOOP"
                  className="w-full h-auto filter drop-shadow(0 0 10px rgba(0, 225, 255, 0.2))"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {/* Linhas de energia sutis */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-1 left-1 w-1/4 h-[1px] bg-ailoop-neon-blue/50"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear"}}
                  />
                  <motion.div
                    className="absolute bottom-1 right-1 w-1/4 h-[1px] bg-ailoop-purple/50"
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear"}}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coluna de texto (restaurada) */}
          <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0 order-2 md:order-1">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Sobre a <span className="text-gradient">AILOOP</span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Somos uma empresa brasileira de tecnologia e marketing digital, com foco em IA aplicada à conversão, atendimento e performance.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Criamos agentes que vendem, atendem e encantam. Não somos uma agência comum. A AILOOP é uma estrutura pensada para acelerar negócios com IA de verdade.
            </motion.p>
          </div>

        </div>
        {/* Fim do Grid principal */}

      </div>
    </section>
  );
};

export default AboutSection;