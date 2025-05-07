import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils'; // Assumindo que você tem o helper cn

interface AdvantageItemProps {
  icon: React.ElementType<LucideProps>;
  text: string;
  iconColorClass: string;
  textColorClass: string;
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export const AdvantageItem: React.FC<AdvantageItemProps> = ({ icon: Icon, text, iconColorClass, textColorClass }) => {
  return (
    <motion.li 
      className="flex items-start space-x-3 mb-3 sm:mb-4"
      variants={itemVariants}
    >
      <Icon className={cn("w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5", iconColorClass)} strokeWidth={1.5} />
      <span className={cn("text-sm sm:text-base leading-relaxed", textColorClass)}>{text}</span>
    </motion.li>
  );
}; 