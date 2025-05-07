import React from 'react';
import { motion } from 'framer-motion';
import { type LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
  icon: React.ElementType<LucideProps>;
  title: string;
  tagline: string;
  description: string;
  neonClass: 'neon-green' | 'neon-cyan' | 'neon-purple' | 'ailoop-blue'; // Ajuste conforme cores do seu tema
  animationDelay?: number; // Para stagger
}

// Mapeamento simplificado para cores CSS. Idealmente, use variáveis CSS globais ou Tailwind theme().
const neonColorMap: Record<BenefitCardProps['neonClass'], string> = {
  'neon-green': 'var(--neon-green, #ADFF2F)', // Use CSS var com fallback
  'neon-cyan': 'var(--neon-cyan, #00FFFF)',
  'neon-purple': 'var(--neon-purple, #A020F0)',
  'ailoop-blue': 'var(--ailoop-blue, #3B82F6)', // Ou outra cor representativa do "branco/azul neon"
};

const cardMotionVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (delay: number = 0) => ({ // Aceita delay para stagger
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay }
  })
};

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon: Icon,
  title,
  tagline,
  description,
  neonClass,
  animationDelay,
}) => {
  const accentColor = neonColorMap[neonClass];
  // Para Tailwind JIT reconhecer, precisamos de classes completas ou usar style prop para cores dinâmicas.
  // Aqui, usamos variáveis CSS que seriam definidas no escopo global ou no componente pai.

  return (
    <motion.div
      className={cn(
        "group bg-neutral-900/60 backdrop-blur-md border border-neutral-700/70 rounded-xl p-6 md:p-8 flex flex-col items-start text-left shadow-lg transition-all duration-300 ease-out h-full"
      )}
      custom={animationDelay} // Passa o delay para a variante
      variants={cardMotionVariants}
      // Definindo variáveis CSS no style para que as classes de hover possam usá-las
      // O ideal seria ter essas cores neon diretamente no tema Tailwind para usar com opacidade
      style={{
        // @ts-ignore
        '--card-accent-color': accentColor,
        '--card-accent-color-transparent': `${accentColor}66`, // ~40% opacidade
        '--card-accent-color-glow': `${accentColor}33`, // ~20% opacidade
      } as React.CSSProperties}
      // Efeitos de hover usando as variáveis CSS
      // Nota: Tailwind v3+ pode não pegar variáveis CSS diretamente em classes como hover:border-[var(--...)]
      // Pode ser necessário aplicar via style prop ou garantir que as cores completas com opacidade estejam no tema.
      // Para uma abordagem mais robusta com Tailwind, defina cores completas (ex: neon-green-border-hover) no tailwind.config.js
      // Aqui, para simplificar, o hover é mais sutil e não depende de var() nas classes.
      whileHover={{
        y: -5,
        // Exemplo se fosse usar style para hover:
        // borderColor: `var(--card-accent-color-transparent)`,
        // boxShadow: `0 0 20px 3px var(--card-accent-color-glow)`,
      }}
      // Usando classes Tailwind para hover com cores do tema (se definidas)
      // Ex: hover:border-neon-green/40 hover:shadow-neon-green/20 (requer essas cores no tema)
      // Como fallback, o card terá um lift
    >
      <div className="p-3 mb-5 rounded-lg inline-block bg-neutral-800/70">
        <Icon className="w-7 h-7" style={{ color: accentColor }} />
      </div>
      <h4
        className="font-display text-xl sm:text-2xl font-semibold mb-1" // Assumindo 'Manrope' como 'font-display' no seu tailwind.config
        style={{ color: accentColor }}
      >
        {title}
      </h4>
      <p className="font-sans text-base text-neutral-400 mb-3">{tagline}</p>
      <p className="font-sans text-sm text-neutral-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}; 