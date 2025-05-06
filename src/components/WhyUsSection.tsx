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
        // Reverted to use base color for icon, highlight color for borders/glows maybe
        color: 'text-ailoop-blue', // Base icon color
        highlightColor: 'ailoop-neon-blue', // For border/glow/accent (needs definition in tailwind.config.js)
        hoverBorderClass: 'hover:border-ailoop-neon-blue/70', // Use the defined highlight color
        hoverShadowClass: 'hover:shadow-[0_0_20px_theme(colors.ailoop-neon-blue/0.3)]', // Reference theme color
    },
    {
        icon: Users,
        title: 'Atendimento Personalizado',
        description: 'Cada negócio é único. Criamos soluções sob medida para suas necessidades específicas e encantar seus clientes.',
        color: 'text-emerald-400',
        highlightColor: 'emerald-400', // Use base color name for referencing in theme
        hoverBorderClass: 'hover:border-emerald-400/70',
        hoverShadowClass: 'hover:shadow-[0_0_20px_theme(colors.emerald-400/0.3)]',
    },
    {
        icon: Zap,
        title: 'Equipe com Experiência Real',
        description: 'Profissionais que já gerenciaram milhões em investimentos e sabem como entregar resultados comprovados.',
        color: 'text-violet-400',
        highlightColor: 'violet-400',
        hoverBorderClass: 'hover:border-violet-400/70',
        hoverShadowClass: 'hover:shadow-[0_0_20px_theme(colors.violet-400/0.3)]',
    },
    {
        icon: TrendingUp,
        title: 'Resultados Rápidos e Escaláveis',
        description: 'Nossa metodologia permite implementar soluções rapidamente e escalar conforme seu negócio cresce, sem limites.',
        color: 'text-sky-400',
        highlightColor: 'sky-400',
        hoverBorderClass: 'hover:border-sky-400/70',
        hoverShadowClass: 'hover:shadow-[0_0_20px_theme(colors.sky-400/0.3)]',
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto" // Centered max-width grid for 4 items
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
        >
          {featuresData.map((feature) => (
            // Feature Card - Enhanced Styling
            <motion.div
              key={feature.title} // Use unique title/id if available
              className={cn(
                `relative flex flex-col items-center text-center p-8 rounded-xl border
                 bg-gradient-to-br from-[rgba(10,10,20,0.7)] to-[rgba(15,15,25,0.5)]  // Subtle dark gradient bg
                 border-neutral-800/80 // Slightly more visible base border
                 backdrop-blur-sm // Optional: Keep if you like the effect
                 transition-all duration-300 ease-out transform-gpu group`, // Added group
                 feature.hoverBorderClass, // Apply hover border class
                 feature.hoverShadowClass // Apply hover shadow class (needs custom shadow defined or plugin)
              )}
              variants={itemVariants}
              whileHover={{ y: -5 }} // Keep subtle lift
              transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Consistent spring for hover
            >
                {/* Optional Shine effect - removed for cleaner look, can be added back */}
                {/* <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-700 ease-out group-hover:left-[100%] opacity-80"></div> */}
        
              {/* Icon Container - Refined */}
              <div
                className={cn(
                  'mb-6 p-3.5 rounded-full flex items-center justify-center',
                  'bg-gradient-to-br from-neutral-800/90 to-neutral-750/80', // Slightly lighter gradient
                  'border border-neutral-700/70', // Defined border
                  'transition-all duration-300 group-hover:border-neutral-600/90' // Border changes on card hover
                )}
              >
                 {/* Inner subtle glow for icon container on hover */}
                 <div className={cn(
                    "p-1 rounded-full transition-all duration-300",
                    `group-hover:bg-[${feature.highlightColor}]/10` // Faint background glow using item's color on CARD hover
                 )}>
                    <feature.icon className={cn('w-7 h-7 transition-colors duration-300', feature.color)} />
                 </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-neutral-100"> {/* Brighter text */}
                {feature.title}
              </h3>
              <p className="text-neutral-300 text-base leading-relaxed">
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