import React from 'react';
import { motion } from 'framer-motion';

const PulsatingElement: React.FC = () => {
  return (
    <motion.div
      className="relative w-16 h-16 md:w-20 md:h-20" // Tamanho inicial
    >
      {/* Elemento principal que pulsa (escala e opacidade) */}
      <motion.div
        className="absolute inset-0 rounded-full bg-neon-purple opacity-50"
        animate={{
          scale: [1, 1.3, 1], // Aumenta e diminui
          opacity: [0.5, 0.8, 0.5], // Pulsa opacidade
        }}
        transition={{
          duration: 3, // Duração lenta
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      {/* (Opcional) Brilho externo ou outro detalhe */}
      <motion.div
        className="absolute inset-1 rounded-full border-2 border-neon-purple/70"
        animate={{
          scale: [1.1, 1.4, 1.1], // Pulsa um pouco maior
          opacity: [0.7, 0.3, 0.7], // Opacidade inversa?
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.5, // Pequeno atraso para não sincronizar perfeitamente
        }}
      />
    </motion.div>
  );
};

export default PulsatingElement; 