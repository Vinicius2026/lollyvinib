import React from 'react';
import { motion } from 'framer-motion';
import { AdvantageColumn } from './AdvantageColumn'; // Ajuste o caminho se necessário
import { 
  FileMinus, Minimize2, UserX, EyeOff, // Ícones Tradicional
  PackageCheck, BrainCircuit, GanttChartSquare, TrendingUp // Ícones AILOOP
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Dados para as colunas
const traditionalModel = {
  title: "Modelo Tradicional Inflexível",
  items: [
    { icon: FileMinus, text: "Contratos de longo prazo e mensalidades fixas, mesmo sem demanda total." },
    { icon: Minimize2, text: "Escopo limitado e dificuldade para escalar ou reduzir serviços rapidamente." },
    { icon: UserX, text: "Equipes generalistas com possível desalinhamento estratégico específico." },
    { icon: EyeOff, text: "Menor transparência no uso efetivo do investimento." },
  ],
  titleColor: "text-neon-cyan", // Definido em tailwind.config.js
  iconColor: "text-red-500",
  textColor: "text-neutral-400",
  bg: "bg-neutral-800/70", // Um pouco mais escuro, menos transparente
  border: "border border-neutral-700",
  isAiloop: false,
};

const ailoopModel = {
  title: "AILOOP: Flexibilidade Inteligente",
  items: [
    { icon: PackageCheck, text: "Pagamento único por pacotes de horas, use quando e como precisar." },
    { icon: BrainCircuit, text: "Acesso sob demanda a uma equipe completa (Humanos + IA) altamente especializada." },
    { icon: GanttChartSquare, text: "Total controle e transparência sobre o investimento e a alocação de horas." },
    { icon: TrendingUp, text: "Escalabilidade dinâmica para atender picos de demanda ou projetos específicos." },
  ],
  titleColor: "text-neon-purple", // Definido em tailwind.config.js
  iconColor: "text-neon-green", // Definido em tailwind.config.js
  textColor: "text-neutral-200",
  bg: "bg-neutral-900/50 backdrop-blur-md", // Glassmorphism
  border: "border border-neon-purple/30",
  isAiloop: true,
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      // staggerChildren não é necessário aqui, pois AdvantageColumn tem seu próprio initial/whileInView
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } }
};

export const ComparativeAdvantageSection: React.FC = () => {
  return (
    <motion.section 
      id="comparativo-vantagens" // Para navegação se necessário
      className="py-16 sm:py-24 bg-brand-dark text-brand-white relative overflow-hidden" // Fundo base da seção
      // Adicionar um gradiente sutil de fundo se desejar, por exemplo:
      // style={{ backgroundImage: "radial-gradient(ellipse at top, theme(colors.neutral.900), theme(colors.brand.dark))" }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Opcional: Elemento de fundo decorativo/gradiente sutil */}
      <div className="absolute inset-0 z-0 opacity-30">
         {/* Exemplo: um gradiente radial sutil */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[800px] bg-gradient-to-tr from-neon-purple/10 via-transparent to-neon-cyan/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
          variants={titleVariants}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-pink-500 to-neon-cyan">
            Abandone a Rigidez.
          </span>
          <span className="block sm:inline"> Abrace a Inteligência Flexível.</span>
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-neutral-300 text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          variants={subtitleVariants}
        >
          Com AILOOP, <span className="text-neon-cyan">Você Dita o Ritmo</span> e o Investimento.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          <AdvantageColumn
            title={traditionalModel.title}
            items={traditionalModel.items}
            titleColorClass={traditionalModel.titleColor}
            iconColorClass={traditionalModel.iconColor}
            textColorClass={traditionalModel.textColor}
            columnBgClass={traditionalModel.bg}
            columnBorderClass={traditionalModel.border}
            isAiloopSide={traditionalModel.isAiloop}
          />
          <AdvantageColumn
            title={ailoopModel.title}
            items={ailoopModel.items}
            titleColorClass={ailoopModel.titleColor}
            iconColorClass={ailoopModel.iconColor}
            textColorClass={ailoopModel.textColor}
            columnBgClass={ailoopModel.bg}
            columnBorderClass={ailoopModel.border}
            isAiloopSide={ailoopModel.isAiloop}
            animationDelay={0.2} // Pequeno delay para o lado AILOOP
          />
        </div>
      </div>
    </motion.section>
  );
}; 