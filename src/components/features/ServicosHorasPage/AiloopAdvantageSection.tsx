import React from 'react';
import { motion } from 'framer-motion';
import { BenefitCard } from './BenefitCard'; // Ajuste o caminho se necessário
import {
  RefreshCw, LockOpen, Zap, ClipboardCheck
} from 'lucide-react';

const ailoopAdvantagesData = [
  {
    id: "zero-desperdicio",
    icon: RefreshCw,
    title: "Zero Desperdício",
    tagline: "Use Cada Minuto",
    description: "Suas horas acumulam por até 6 meses. Seu investimento é 100% aproveitado, sem perdas.",
    neonClass: 'neon-green' as const
  },
  {
    id: "sem-contratos",
    icon: LockOpen,
    title: "Sem Contratos",
    tagline: "Total Liberdade",
    description: "Sem mensalidades fixas. Ative serviços sob demanda, com controle total do seu investimento.",
    neonClass: 'neon-cyan' as const
  },
  {
    id: "acesso-on-demand",
    icon: Zap,
    title: "Acesso On-Demand",
    tagline: "Expertise Total",
    description: "Equipe ideal (humanos + IA) no momento certo. Especialistas dedicados para cada projeto.",
    neonClass: 'neon-purple' as const
  },
  {
    id: "resultados-claros",
    icon: ClipboardCheck,
    title: "Resultados Claros",
    tagline: "Transparência Total",
    description: "Acompanhe horas e progresso em seu painel. Foco em performance e ROI com clareza absoluta.",
    neonClass: 'ailoop-blue' as const // Ou um azul/ciano mais claro do seu tema
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "circOut", delay: 0.2 } }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "circOut", delay: 0.4 } }
};

// Os cards usarão suas próprias variantes de entrada que são acionadas pelo staggerChildren do container do grid.

export const AiloopAdvantageSection: React.FC = () => {
  return (
    <motion.section 
      id="vantagem-ailoop" 
      className="w-full py-16 sm:py-24 px-4 bg-brand-dark" // Ou herda o fundo
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="font-display text-4xl sm:text-5xl md:text-5xl font-bold text-center mb-5 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple"
          // Adicionando um leve efeito de brilho com text-shadow
          style={{ textShadow: '0 0 12px var(--neon-purple-glow, rgba(160, 32, 240, 0.3))' }} // Definir --neon-purple-glow no CSS global ou tailwind.config
          variants={titleVariants}
        >
          A Vantagem AILOOP: <span className="block sm:inline">Marketing Inteligente, Sem Amarras</span>
        </motion.h2>
        <motion.p 
          className="font-sans text-lg sm:text-xl text-neutral-300 text-center max-w-2xl mx-auto mb-12 md:mb-16"
          variants={subtitleVariants}
        >
          Descubra por que nosso modelo de banco de horas é a evolução que seu negócio precisa.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          // O staggerChildren para os cards é melhor gerenciado pela variante `visible` do BenefitCard
          // variants={{ visible: { transition: { staggerChildren: 0.15 }}}} // Movido para o card individual
        >
          {ailoopAdvantagesData.map((advantage, index) => (
            <BenefitCard 
              key={advantage.id}
              icon={advantage.icon}
              title={advantage.title}
              tagline={advantage.tagline}
              description={advantage.description}
              neonClass={advantage.neonClass}
              animationDelay={index * 0.1} // Passando delay para stagger manual na variante do card
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}; 