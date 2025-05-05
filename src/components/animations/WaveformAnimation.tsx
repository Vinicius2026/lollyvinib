"use client"; // Indicar que é um Client Component devido ao Framer Motion

import React from 'react';
import { motion, Variants, Transition } from 'framer-motion'; // Importado Variants e Transition

const WaveformAnimation: React.FC = () => {
  const svgHeight = 160; // Corresponde à altura do contêiner na HeroSection (h-40)
  const amplitudeBase = 40; // Amplitude base da onda
  const frequencyBase = 0.005; // Frequência base da onda (ajustado para animação de translate)
  const numPoints = 100; // Pontos para desenhar a curva
  const viewboxWidth = 1000; // Largura da viewbox

  // Função para gerar os pontos de uma onda seno estática
  const generateWavePath = (amp: number, freq: number, phase: number = 0) => {
    // Gera pontos para o dobro da largura para o loop de translate
    const widthMultiplier = 2;
    let d = `M ${-viewboxWidth / 2} ${svgHeight / 2}`;
    for (let i = 0; i <= numPoints * widthMultiplier; i++) {
      const x = (i / (numPoints * widthMultiplier)) * viewboxWidth * widthMultiplier - viewboxWidth / 2;
      const y = svgHeight / 2 + amp * Math.sin(phase + freq * (x + viewboxWidth / 2));
      d += ` L ${x} ${y}`;
    }
    return d;
  };

  // Definição da transição base para as variantes
  const baseTransition: Transition = {
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop", // Corrigido
  };

  // Variante de animação para mover horizontalmente
  const waveVariants: Variants = {
    animate: (duration: number) => ({ // Variante agora aceita duration
      x: [-viewboxWidth / 2, viewboxWidth / 2],
      transition: { ...baseTransition, duration }, // Combina base com duração específica
    }),
  };
  
  // Definições das ondas
  const waves = [
    { color: "stroke-neon-purple", amp: amplitudeBase, freq: frequencyBase, phase: 0, duration: 10 },
    { color: "stroke-neon-cyan", amp: amplitudeBase * 0.8, freq: frequencyBase * 1.2, phase: Math.PI / 2, duration: 8 },
    { color: "stroke-neon-lime", amp: amplitudeBase * 0.6, freq: frequencyBase * 0.8, phase: Math.PI, duration: 12 },
    { color: "stroke-neon-orange", amp: amplitudeBase * 0.4, freq: frequencyBase * 1.5, phase: (3 * Math.PI) / 2, duration: 7 }, // Laranja adicionada
  ];

  return (
    <svg 
      className="w-full h-full overflow-hidden" // Adicionado overflow-hidden
      viewBox={`-${viewboxWidth / 2} 0 ${viewboxWidth} ${svgHeight}`} // ViewBox ajustado para o translate
      preserveAspectRatio="none" // Estica para preencher
    >
      {waves.map((wave, index) => (
        <motion.path
          key={index}
          variants={waveVariants}
          custom={wave.duration} // Passa a duração para a variante
          animate="animate"
          initial={{ d: generateWavePath(wave.amp, wave.freq, wave.phase), x: -viewboxWidth / 2 }} // Path e posição inicial
          fill="none"
          className={`${wave.color} opacity-60`}
          strokeWidth="2"
        />
      ))}
    </svg>
  );
};

export default WaveformAnimation; 