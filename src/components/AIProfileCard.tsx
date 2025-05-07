// Em src/components/AIProfileCard.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Presumindo que você usa cn

// Defina suas animações (exemplo)
const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface AIProfileCardProps {
  name: string;
  role: string;
  neonColorName: 'blue' | 'cyan' | 'purple' | 'green' | 'orange' | 'yellow' | 'red' | 'pink';
  className?: string;
  isOutline?: boolean;
  imageUrl?: string; // Prop para a URL da imagem do personagem
  imageContainerClassName?: string; // Nova prop para classes do contêiner da imagem
}

const AIProfileCard: React.FC<AIProfileCardProps> = ({
  name,
  role,
  neonColorName,
  className,
  isOutline,
  imageUrl,
  imageContainerClassName, // Incluir a nova prop de classe aqui
}) => {
  // Mapeamento de cores para classes Tailwind (adapte conforme seu tema)
  const neonColorStyles = {
    blue: { border: 'border-blue-500/70', shadow: 'hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.3)]', glow: 'shadow-[0_0_25px_rgba(59,130,246,0.5)]' },
    cyan: { border: 'border-cyan-500/70', shadow: 'hover:shadow-[0_0_20px_5px_rgba(6,182,212,0.3)]', glow: 'shadow-[0_0_25px_rgba(6,182,212,0.5)]' },
    purple: { border: 'border-purple-500/70', shadow: 'hover:shadow-[0_0_20px_5px_rgba(139,92,246,0.3)]', glow: 'shadow-[0_0_25px_rgba(139,92,246,0.5)]' },
    green: { border: 'border-green-500/70', shadow: 'hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.3)]', glow: 'shadow-[0_0_25px_rgba(34,197,94,0.5)]' },
    orange: { border: 'border-orange-500/70', shadow: 'hover:shadow-[0_0_20px_5px_rgba(249,115,22,0.3)]', glow: 'shadow-[0_0_25px_rgba(249,115,22,0.5)]' },
    yellow: { border: 'border-yellow-400/70', shadow: 'hover:shadow-[0_0_20px_5px_rgba(234,179,8,0.3)]', glow: 'shadow-[0_0_25px_rgba(234,179,8,0.5)]' },
    red: { border: 'border-red-500/70', shadow: 'hover:shadow-[0_0_20px_5px_rgba(239,68,68,0.3)]', glow: 'shadow-[0_0_25px_rgba(239,68,68,0.5)]' },
    pink: { border: 'border-pink-500/70', shadow: 'hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.3)]', glow: 'shadow-[0_0_25px_rgba(236,72,153,0.5)]' },
  };
  const currentColorStyle = neonColorStyles[neonColorName] || neonColorStyles.cyan;

  return (
    <motion.div
      className={cn(
        "relative group flex flex-col items-center w-44 sm:w-48 md:w-52 text-center", // Largura do card
        className
      )}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Contêiner da Imagem - Posicionado para sobrepor */}
      {imageUrl && (
        <div className={cn(
          "relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 -mb-16 sm:-mb-20 md:-mb-24 z-20 transition-transform duration-300 ease-out group-hover:scale-110",
          imageContainerClassName 
        )}>
          <img
            src={imageUrl}
            alt={`Personagem ${name}`}
            className="w-full h-full object-contain filter drop-shadow-xl" // Restaurado object-contain e filter drop-shadow-xl
            // style={{ border: '5px solid red' }} // Removida borda para depuração
          />
          {/* Efeito de anel de luz para o personagem, especialmente para isOutline */}
          {isOutline && (
             <div className={cn(
                "absolute inset-0 rounded-full animate-pulse",
                currentColorStyle.border, // Usa a borda da cor neon
                currentColorStyle.glow // Adiciona um brilho da cor neon
             )} style={{animationDuration: '2s'}}></div>
          )}
        </div>
      )}

      {/* Corpo do Card - Fundo e Conteúdo */}
      <div
        className={cn(
          "relative w-full bg-neutral-850/80 border border-neutral-700/60 rounded-2xl shadow-lg p-4 flex flex-col flex-grow items-center justify-center transition-all duration-300 ease-out",
          isOutline ? cn("pt-20 sm:pt-24 md:pt-28", currentColorStyle.border, currentColorStyle.glow) : cn("pt-20 sm:pt-24 md:pt-28", currentColorStyle.shadow, `hover:${currentColorStyle.border}`),
          // Se não houver imagem, o padding superior pode ser menor
          !imageUrl && "pt-8" 
        )}
      >
        <h3 className={cn(
            "font-semibold text-base sm:text-lg text-white break-words leading-tight",
            isOutline ? `text-${neonColorName}-300` : `text-neutral-100`
        )}>
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
          {role}
        </p>
      </div>
    </motion.div>
  );
};

export default AIProfileCard;