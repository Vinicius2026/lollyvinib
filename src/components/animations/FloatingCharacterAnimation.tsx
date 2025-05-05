import React from 'react';
import { motion } from 'framer-motion';

const FloatingCharacterAnimation: React.FC = () => {
  // Placeholder SVG simples - um círculo com um gradiente
  // Podemos substituir isso por um design de personagem mais elaborado depois
  return (
    <motion.div
      className="absolute left-1/2 transform -translate-x-1/2 z-0" // Removido top e translate-y, adicionado z-0 para garantir que fique atrás do texto se necessário
      style={{ width: '100px', height: '100px' }} // Tamanho reduzido (era 150px)
      animate={{
        y: ["-4%", "4%"], // Movimento vertical sutilmente ajustado
      }}
      transition={{
        duration: 3.5, // Duração ligeiramente aumentada
        repeat: Infinity, // Repetir infinitamente
        repeatType: "reverse", // Inverter a animação a cada repetição
        ease: "easeInOut", // Curva de aceleração suave
      }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradiente sombrio futurístico */}
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            {/* Azul petróleo escuro no centro */}
            <stop offset="0%" style={{ stopColor: 'rgb(10, 70, 80)', stopOpacity: 0.9 }} /> 
            {/* Roxo profundo nas bordas */}
            <stop offset="100%" style={{ stopColor: 'rgb(40, 10, 60)', stopOpacity: 0.9 }} /> 
          </radialGradient>
        </defs>
        {/* Círculo com o novo gradiente e leve contorno */}
        <circle cx="50" cy="50" r="45" fill="url(#grad1)" stroke="rgba(150, 180, 200, 0.2)" strokeWidth="1"/>
        {/* Aqui podemos adicionar mais elementos SVG para o personagem */}
      </svg>
    </motion.div>
  );
};

export default FloatingCharacterAnimation; 