import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react'; // Importar LucideProps
import React from 'react';

export interface FeatureCardProps {
  icon: React.ElementType<LucideProps>; // Usar ElementType para ícones Lucide
  title: string;
  description: string;
  id: string;
  index?: number; // Opcional para animação individual
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

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, id, index }) => {
  return (
    <motion.div
      custom={index} // Passa o índice para a variante 'visible'
      variants={cardVariants}
      // initial="hidden" // Será controlado pelo whileInView do container pai ou individualmente
      // animate="visible" // Será controlado pelo whileInView do container pai ou individualmente
      whileHover={{ y: -8, scale: 1.04, boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.2)", transition: { duration: 0.2, ease: "circOut" } }}
      className="bg-neutral-800/70 backdrop-blur-lg border border-cyan-300/40 rounded-xl p-6 md:p-8 text-left shadow-2xl h-full flex flex-col"
      // Adicionado h-full e flex flex-col para garantir alturas consistentes se necessário
    >
      <div className="mb-4">
        <Icon className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl md:text-2xl font-inter font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-neutral-300 font-inter text-sm md:text-base leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard; 