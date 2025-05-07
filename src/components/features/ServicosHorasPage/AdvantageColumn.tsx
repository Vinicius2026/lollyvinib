import { motion } from 'framer-motion';
import React from 'react';
import { LucideProps } from 'lucide-react';
import { AdvantageItem } from './AdvantageItem'; // Ajuste o caminho se necessário
import { cn } from '@/lib/utils';

interface ItemDetail {
  icon: React.ElementType<LucideProps>;
  text: string;
}

interface AdvantageColumnProps {
  title: string;
  items: ItemDetail[];
  titleColorClass: string;
  iconColorClass: string;
  textColorClass: string;
  columnBgClass: string;
  columnBorderClass?: string;
  isAiloopSide?: boolean;
  animationDelay?: number;
}

const columnVariants = {
  hidden: (isAiloop: boolean) => ({ 
    opacity: 0, 
    y: isAiloop ? 60 : 40, 
    scale: isAiloop ? 0.9 : 0.95 
  }),
  visible: (isAiloop: boolean) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: isAiloop ? 0.7 : 0.6, 
      ease: "easeOut",
      when: "beforeChildren", // Garante que o container anime antes dos filhos
      staggerChildren: 0.15 // Anima os AdvantageItem em sequência
    }
  })
};

export const AdvantageColumn: React.FC<AdvantageColumnProps> = ({
  title,
  items,
  titleColorClass,
  iconColorClass,
  textColorClass,
  columnBgClass,
  columnBorderClass,
  isAiloopSide = false,
  animationDelay = 0,
}) => {
  return (
    <motion.div
      className={cn(
        "p-6 sm:p-8 rounded-xl shadow-xl h-full flex flex-col",
        columnBgClass,
        columnBorderClass,
        isAiloopSide ? "hover:shadow-[0_0_25px_-5px_theme(colors.neon-purple/40)] transition-shadow duration-300" : "hover:shadow-2xl transition-shadow duration-300"
      )}
      custom={isAiloopSide}
      variants={columnVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: animationDelay }} // Adiciona delay se necessário para a coluna AILOOP
    >
      <h3 className={cn("text-xl sm:text-2xl font-semibold mb-5 sm:mb-6", titleColorClass)}>
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <AdvantageItem
            key={index}
            icon={item.icon}
            text={item.text}
            iconColorClass={iconColorClass}
            textColorClass={textColorClass}
          />
        ))}
      </ul>
    </motion.div>
  );
}; 