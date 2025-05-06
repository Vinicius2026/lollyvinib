import React from 'react';
import { motion } from 'framer-motion';
import { Shapes, Zap, Users, TrendingUp, /* Removed Eye, BarChart, Target if not used */ } from 'lucide-react'; // Use only relevant icons
import { cn } from '@/lib/utils';

// --- Feature Data (Ensure consistency, maybe add unique descriptions if needed) ---
const featuresData = [
    {
        icon: Shapes,
        title: 'IA de Verdade e Flexível',
        description: 'Nossa IA entende contexto, conversa naturalmente e toma decisões inteligentes, adaptando-se às suas necessidades.',
        color: 'text-ailoop-blue',
        highlightColor: 'ailoop-neon-blue',
        hoverBorderClass: 'hover:border-ailoop-neon-blue/70',
    },
    {
        icon: Users,
        title: 'Atendimento Personalizado',
        description: 'Cada negócio é único. Criamos soluções sob medida para suas necessidades específicas e encantar seus clientes.',
        color: 'text-emerald-400',
        highlightColor: 'emerald-400',
        hoverBorderClass: 'hover:border-emerald-400/70',
    },
    {
        icon: Zap,
        title: 'Equipe com Experiência Real',
        description: 'Profissionais que já gerenciaram milhões em investimentos e sabem como entregar resultados comprovados.',
        color: 'text-violet-400',
        highlightColor: 'violet-400',
        hoverBorderClass: 'hover:border-violet-400/70',
    },
    {
        icon: TrendingUp,
        title: 'Resultados Rápidos e Escaláveis',
        description: 'Nossa metodologia permite implementar soluções rapidamente e escalar conforme seu negócio cresce, sem limites.',
        color: 'text-sky-400',
        highlightColor: 'sky-400',
        hoverBorderClass: 'hover:border-sky-400/70',
    },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Slightly faster stagger
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 }, // Start slightly lower and smaller
  visible: {
      opacity: 1, 
      y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// --- Componente Principal da Seção (Refinado) ---
const WhyUsSection: React.FC = () => {
  return (
    <section
      id="why-us"
      className="relative bg-[#05050A] text-white overflow-hidden py-20 md:py-28"
    >
      {/* Optional: Subtle background element - Refined */}
       <div className="absolute inset-0 z-0 opacity-[0.04] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Por que escolher a <span className="text-ailoop-blue">AILOOP</span>?
        </motion.h2>

        {/* Grid Container - Balanced Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto" // Aumentado gap e max-w
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresData.map((feature) => (
            <motion.div
              key={feature.title}
              className={cn(
                `relative flex flex-col items-center text-center p-10 rounded-xl border  // Aumentado padding
                 bg-gradient-to-br from-[rgba(12,12,22,0.9)] to-[rgba(18,18,28,0.85)]
                 border-neutral-700/50 // Borda um pouco mais sutil
                 shadow-[0_0_20px_rgba(173,255,47,0.25)] // Brilho verde limão neon estático (#ADFF2F com opacidade 0.25)
                 transition-all duration-300 ease-out transform-gpu group`,
                 feature.hoverBorderClass
              )}
              variants={itemVariants}
              whileHover={{ y: -5 }} 
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                {/* Optional Shine effect - removed for cleaner look, can be added back */}
                {/* <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-700 ease-out group-hover:left-[100%] opacity-80"></div> */}
        
              {/* Icon Container - Refined */}
              <div
                className={cn(
                  'mb-6 p-3.5 rounded-full flex items-center justify-center',
                  'bg-gradient-to-br from-neutral-800/90 to-neutral-750/80', 
                  'border border-neutral-700/70', 
                  'transition-all duration-300 group-hover:border-neutral-600/90' 
                )}
              >
                 {/* Inner subtle glow for icon container on hover */}
                 <div className={cn(
                    "p-1 rounded-full transition-all duration-300",
                    `group-hover:bg-[${feature.highlightColor}]/10` 
                 )}>
                    <feature.icon className={cn('w-7 h-7 transition-colors duration-300', feature.color)} />
                 </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-neutral-100"> 
                {feature.title}
              </h3>
              <p className="text-neutral-100 text-lg leading-relaxed"> {/* Aumentado para text-lg */}
                {feature.description}
              </p>
            </motion.div>
        ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;