import React from 'react';
import { motion, useReducedMotion, TargetAndTransition, VariantLabels } from 'framer-motion';
import { Button, ButtonProps } from '@/components/ui/button'; // Ajuste o caminho se necessário
import { subtleHover, subtleTap } from '@/lib/motion/config'; // Ajuste o caminho se necessário

interface AnimatedButtonProps extends ButtonProps {
  // Permitir sobrescrever animações padrão
  customWhileHover?: TargetAndTransition | VariantLabels | undefined;
  customWhileTap?: TargetAndTransition | VariantLabels | undefined;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, customWhileHover, customWhileTap, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();

    // Usar animações customizadas se fornecidas, senão usar padrão (respeitando reduced motion)
    const hoverEffect = shouldReduceMotion ? {} : (customWhileHover ?? subtleHover);
    const tapEffect = shouldReduceMotion ? {} : (customWhileTap ?? subtleTap);

    return (
      <motion.div // Usamos motion.div como wrapper para não interferir com o <button> interno do shadcn
        whileHover={hoverEffect}
        whileTap={tapEffect}
        style={{ originX: 0.5, originY: 0.5 }} // Garante que o scale ocorra a partir do centro
      >
        <Button ref={ref} {...props}>
          {children}
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton'; 