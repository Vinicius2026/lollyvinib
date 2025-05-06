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
  const [isCentered, setIsCentered] = useState(false);
  const controls = useAnimation(); // Animation controls for text

  // Observador para detectar quando o item está no centro
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCentered(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "-40% 0px -40% 0px", // Área de ativação no centro vertical
        threshold: 0.5 // Pelo menos 50% visível na área de ativação
      }
    );

    const currentRef = ref.current; // Capture ref value
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]); // Dependency only on ref

  // Animar texto baseado no estado isCentered
  useEffect(() => {
    controls.start({
      opacity: isCentered ? 1 : 0.6, // Mais opaco quando centrado
      y: isCentered ? 0 : 15, // Sobe ligeiramente quando centrado
      color: isCentered ? '#FFFFFF' : '#A0AEC0', // Branco brilhante vs cinza (Tailwind gray-400)
      textShadow: isCentered ? `0 0 8px theme(colors.${item.highlightColor.replace('text-','')}/0.6)` : 'none', // Efeito Glow
      transition: { duration: 0.5, ease: 'easeOut' }
    });
  }, [isCentered, controls, item.highlightColor]);


  const IconComponent = item.icon;

  return (
    <motion.div
      ref={ref}
      // --- Estilos para Scroll Snapping ---
      className="differential-item min-h-screen flex flex-col items-center justify-center text-center px-4 scroll-snap-align-center"
      // --- Animação de Entrada Simples ---
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }} // Anima ao entrar 30% na tela
      transition={{ duration: 0.6 }}
    >
      {/* Ícone com Efeitos */}
      <motion.div
        className={`mb-6 inline-flex items-center justify-center p-4 border rounded-full transition-all duration-400 ease-out transform-gpu
                   ${isCentered
                      ? `border-${item.color}/50 bg-black/50 shadow-lg ${item.shadowColor} scale-110` // Mais destaque quando centrado
                      : 'border-gray-700/50 bg-black/30 scale-100'}`}
        whileHover={{ scale: isCentered ? 1.15 : 1.05, transition: { type: 'spring', stiffness: 300 } }}
      >
        {/* Cor do ícone também pode mudar */}
        <IconComponent size={28} className={`${isCentered ? item.highlightColor : item.color} transition-colors duration-400`} />
      </motion.div>

      {/* Título Animado */}
      <motion.h3
        className="text-3xl md:text-4xl font-semibold mb-4 max-w-xl" // Max-width para quebrar linha se necessário
        animate={controls} // Controlado pelo useEffect
      >
        {item.title}
      </motion.h3>

      {/* Descrição Animada */}
      <motion.p
        className="text-lg max-w-md mx-auto"
        animate={controls} // Controlado pelo useEffect (mesmas animações)
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
      className="relative bg-[#05050A] text-white overflow-hidden" // Mantém o fundo
      // A altura agora é controlada pelo container de scroll snap
    >
      {/* ----- Container com Scroll Snap ----- */}
      <div
        className="h-screen overflow-y-scroll scroll-snap-type-y-mandatory" // Altura da viewport, scroll vertical, snapping obrigatório
      >
        {/* Adiciona um espaçador inicial se necessário para alinhar o primeiro item corretamente */}
         {/* <div className="h-[10vh] scroll-snap-align-start"></div> */}

        {differentialsData.map((item) => (
          <DifferentialItem
            key={item.id}
            item={item}
            // Não precisa mais passar props complexas
          />
        ))}

        {/* Adiciona um espaçador final se necessário */}
        {/* <div className="h-[10vh] scroll-snap-align-end"></div> */}
      </div>
    </section>
  );
};

export default WhyUsSection;