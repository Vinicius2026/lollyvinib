import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Removed unused scroll/transform hooks
import { Shapes, Zap, Users, TrendingUp, Eye } from 'lucide-react';

// --- Dados dos Diferenciais (mantidos) ---
const differentialsData = [
    {
        id: 'ia-verdade',
        icon: Shapes,
        title: 'IA de verdade',
        description: 'Sem robozinho travado. Nossa IA entende contexto, conversa naturalmente e toma decisões inteligentes.',
        color: 'text-ailoop-blue',
        highlightColor: 'text-ailoop-neon-blue', // Cor para o glow/highlight
        shadowColor: 'shadow-ailoop-neon-blue/30', // Cor para a sombra/glow do ícone
    },
    {
        id: 'atendimento-personalizado',
        icon: Users,
        title: 'Atendimento personalizado',
        description: 'Cada negócio é único. Criamos soluções sob medida para suas necessidades específicas.',
        color: 'text-green-400',
        highlightColor: 'text-emerald-300',
        shadowColor: 'shadow-emerald-400/30',
    },
    {
        id: 'equipe-experiente',
        icon: Zap,
        title: 'Equipe com experiência real',
        description: 'Profissionais que já gerenciaram milhões em investimentos e sabem como entregar resultados.',
        color: 'text-purple-400',
        highlightColor: 'text-violet-300',
        shadowColor: 'shadow-violet-400/30',
    },
    {
        id: 'resultados-rapidos',
        icon: TrendingUp,
        title: 'Resultados rápidos e escaláveis',
        description: 'Nossa metodologia permite implementar soluções rapidamente e escalar conforme seu negócio cresce.',
        color: 'text-purple-400',
        highlightColor: 'text-violet-300',
        shadowColor: 'shadow-violet-400/30',
    },
    {
        id: 'transparencia-estrutura',
        icon: Eye,
        title: 'Transparência e estrutura própria',
        description: 'Acesso transparente às métricas e resultados. Tecnologia proprietária para máximo desempenho.',
        color: 'text-sky-400',
        highlightColor: 'text-cyan-300',
        shadowColor: 'shadow-cyan-400/30',
    },
];

// --- Componente do Item Diferencial (Adaptado) ---
interface DifferentialItemProps {
  item: typeof differentialsData[0];
  // Removidos: index, totalItems, scrollYProgress, setActiveId
}

const DifferentialItem: React.FC<DifferentialItemProps> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation(); // Animation controls for text

  // Animar texto baseado no estado isCentered
  useEffect(() => {
    controls.start({
      // Manter apenas animação de opacidade e Y (entrada suave)
      opacity: 1, 
      y: 0, 
      // Remover animação de cor e textShadow baseada em isCentered
      // color: isCentered ? '#FFFFFF' : '#A0AEC0', 
      // textShadow: isCentered ? `0 0 8px theme(colors.${item.highlightColor.replace('text-','')}/0.6)` : 'none',
      transition: { duration: 0.5, ease: 'easeOut' }
    });
  }, [controls]); // Remover isCentered das dependências


  const IconComponent = item.icon;

  return (
    <motion.div
      ref={ref} // Ref ainda pode ser útil para whileInView
      // Removido: scroll-snap-align-center. Adicionado padding vertical
      className="differential-item min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 md:py-24"
      // --- Animação de Entrada Simples ---
      initial={{ opacity: 0, y: 30 }} // Começa um pouco abaixo
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }} // Anima ao entrar 30% na tela
      transition={{ duration: 0.6 }}
    >
      {/* Ícone com Efeitos - simplificado, sem estado isCentered */}
      <motion.div
        className={`mb-6 inline-flex items-center justify-center p-4 border rounded-full transition-all duration-400 ease-out transform-gpu
                   border-gray-700/50 bg-black/30 shadow-lg ${item.shadowColor}`}
        whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 300 } }}
      >
        {/* Cor do ícone baseada no item */}
        <IconComponent size={28} className={`${item.highlightColor} transition-colors duration-400`} />
      </motion.div>

      {/* Título Animado - Cor clara padrão */}
      <motion.h3
        className="text-3xl md:text-4xl font-semibold mb-4 max-w-xl text-white" // Cor branca padrão
        animate={controls} // Controlado pelo useEffect (apenas opacity/y)
      >
        {item.title}
      </motion.h3>

      {/* Descrição Animada - Cor clara padrão */}
      <motion.p
        className="text-lg max-w-md mx-auto text-neutral-300" // Cor cinza claro padrão
        animate={controls} // Controlado pelo useEffect (apenas opacity/y)
        style={{ transitionDelay: '0.1s' }} // Pequeno delay na descrição
      >
        {item.description}
      </motion.p>
    </motion.div>
  );
};


// --- Componente Principal da Seção (Adaptado) ---
const WhyUsSection: React.FC = () => {
    // Remover sectionRef, activeId, useScroll, useTransform e lógica da Sinapse

  return (
    // Container principal da seção - altura mínima, mas permite crescimento
    <section
      id="why-us"
      className="relative bg-[#05050A] text-white overflow-hidden py-12" // Adicionado padding vertical à seção
      // Removida altura fixa
    >
      {/* Removido o container com Scroll Snap */}
      {/* <div className="h-screen overflow-y-scroll scroll-snap-type-y-mandatory"> */}
        
        {/* Renderiza os itens diretamente dentro da seção */}
        {differentialsData.map((item) => (
          <DifferentialItem
            key={item.id}
            item={item}
          />
        ))}
        
      {/* </div> */}
    </section>
  );
};

export default WhyUsSection;