import { motion } from 'framer-motion';
import React from 'react';
import { ArrowRight } from 'lucide-react'; // Ícone para o botão CTA
import { IconType } from './ZapIaShowcase'; // Importando o tipo IconType

export interface FeatureCardProps {
  title: string;
  description: string;
  id: string;
  iconType: IconType;
  index?: number;
  isHighlighted?: boolean; 
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  id,
  iconType,
  index = 0,
}) => {
  let iconSrc = '';
  let animationProps = {}; // Inicia vazio, apenas o cérebro terá animação complexa

  if (iconType === 'bar-chart-arrow') {
    iconSrc = '/image_grande/icon-zv-medio-1.png';
    // Nenhuma animationProps é definida aqui, então ele ficará estático com opacidade 1
    // animationProps = { ... } // Linhas da animação anterior removidas
  } else if (iconType === 'eye-play') { // Cérebro
    iconSrc = '/image_grande/icon-zv-medio-2.png';
    animationProps = {
      animate: {
        opacity: [
          1, 0.3, 0.3, 1, 
          1,               
          0.1, 1, 0.1, 1, 0.1, 1, 
          1,               
          0.3, 0.3, 1,     
        ],
      },
      transition: {
        duration: 7, 
        repeat: Infinity,
        ease: "linear", 
        times: [
          0,    
          0.07, 
          0.50, 
          0.57, 
          0.60, 
          0.62, 
          0.65, 
          0.68, 
          0.71, 
          0.74, 
          0.77, 
          0.80, 
          0.87, 
          0.93, 
          1,    
        ],
      },
    };
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Parte Superior (Visual) */}
      <div className="relative p-6 md:p-8 h-48 md:h-56 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-purple-900 to-neutral-800">
        {/* Efeito de grade sutil no fundo */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        {/* Substituir o StyledIconPlaceholder pela tag <img> */}
        {iconSrc && (
          <motion.img
            src={iconSrc} 
            alt={`Ícone para ${title}`} 
            className="w-60 h-60 md:w-72 md:h-72 object-contain"
            {...animationProps}
          />
        )}
      </div>

      {/* Parte Inferior (Conteúdo) */}
      <div className="p-6 md:p-8 flex-grow flex flex-col bg-neutral-50"> 
        <h3 className="text-xl md:text-2xl font-inter font-semibold text-neutral-800 mb-3">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 font-inter leading-relaxed mb-6 line-clamp-3 flex-grow">
          {description} 
        </p>
        <div className="mt-auto pt-4 border-t border-neutral-200">
            <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#F97316' }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                aria-label={`Saiba mais sobre ${title}`}
            >
                <ArrowRight size={20} className="md:w-6 md:h-6" />
            </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard; 