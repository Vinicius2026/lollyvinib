import { Variants } from 'framer-motion';

/**
 * Exemplo de variante para um efeito de fade in para cima.
 * Pode ser usado em vários componentes.
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Configuração para animações de hover sutis.
 */
export const subtleHover = {
  scale: 1.03, // Leve aumento
  transition: { duration: 0.2 },
};

/**
 * Configuração para animações de tap/press.
 */
export const subtleTap = {
  scale: 0.97, // Leve diminuição
  transition: { duration: 0.1 },
}; 