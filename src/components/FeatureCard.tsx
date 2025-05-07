import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react'; // Importar LucideProps
import React from 'react';

export interface FeatureCardProps {
  icon: React.ElementType<LucideProps>; // Usar ElementType para ícones Lucide
  title: string;
  description: string;
  id: string;
  index?: number; // Opcional para animação individual
  isHighlighted?: boolean; // Nova propriedade para destaque
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number = 0) => ({ // i é o índice para delay
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.1, // Pequeno delay incremental
      ease: 'easeInOut',
    },
  }),
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, id, index, isHighlighted }) => {
  // Define classes condicionais para destaque
  const baseBorderClass = "border backdrop-blur-lg rounded-xl p-6 md:p-8 text-left shadow-2xl h-full flex flex-col";
  const normalBorderClass = "bg-[#1A1A1A] border-neon-purple/50";
  const highlightedBorderClass = "bg-black border-neon-cyan border-2 scale-105"; // Borda Ciano, mais espessa e fundo um pouco diferente

  const titleColorClass = isHighlighted ? "text-neon-cyan" : "text-white";
  const iconColorClass = isHighlighted ? "text-neon-cyan" : "text-neon-purple";

  return (
    <motion.div
      custom={index} // Passa o índice para a variante 'visible'
      variants={cardVariants}
      whileHover={{ y: -8, scale: isHighlighted ? 1.07 : 1.04, boxShadow: isHighlighted ? "0px 10px 25px theme(colors.neon-cyan/0.4)" : "0px 10px 20px theme(colors.neon-purple/0.3)", transition: { duration: 0.2, ease: "circOut" } }}
      className={`${baseBorderClass} ${isHighlighted ? highlightedBorderClass : normalBorderClass}`}
    >
      <div className="mb-4">
        <Icon className={`w-8 h-8 md:w-10 md:h-10 ${iconColorClass}`} strokeWidth={1.5} />
      </div>
      <h3 className={`text-lg md:text-xl font-inter font-semibold ${titleColorClass} mb-3`}>
        {title}
      </h3>
      <p className="text-xs md:text-sm text-brand-white/80 font-inter leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard; 