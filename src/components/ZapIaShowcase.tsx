import { motion } from 'framer-motion';
import FeatureCard, { FeatureCardProps } from './FeatureCard';
// Remover imports não utilizados de ícones Lucide se não forem mais passados diretamente
// import { UsersRound, BrainCircuit, MessagesSquare, CalendarClock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Tipos de ícones que esperamos para os cards
export type IconType = 'bar-chart-arrow' | 'eye-play';

// Atualizar FeatureCardProps para incluir iconType, e remover icon se não for mais usado diretamente
// A prop 'icon' original de Lucide foi removida na etapa anterior, então FeatureCardProps já deve estar sem ela.
// Apenas garantindo que estamos alinhados. imageUrl também foi da etapa anterior, e não se aplica aqui.

// Ajustando a interface para refletir o que FeatureCard realmente precisa agora
interface ZapFeatureCardData {
  id: string;
  title: string;
  description: string;
  iconType: IconType; // Novo tipo para identificar o ícone estilizado
  isHighlighted?: boolean; // Pode ser usado para alguma variação sutil no futuro
}

const featuresToDisplay: ZapFeatureCardData[] = [
  {
    // icon: UsersRound, // Removido
    title: 'Atendimento com IA Estratégica + Agente Humano Real',
    description: 'Unimos IA de ponta com atendimento humano supervisionado. Nossa IA é treinada com dados reais da sua empresa e atua como primeiro contato, entendendo o cliente, acolhendo e resolvendo o que for possível.', // Descrição encurtada
    id: 'feature1',
    iconType: 'bar-chart-arrow', // Placeholder para o ícone de gráfico
  },
  {
    // icon: BrainCircuit, // Removido
    title: 'Inteligência com Contexto Profundo do Seu Negócio',
    description: 'Essa não é uma IA genérica. Ela entende seus produtos, horários, políticas, campanhas e até o jeito que sua empresa fala. Cada mensagem é baseada em treinamentos.', // Descrição encurtada
    id: 'feature2',
    iconType: 'eye-play', // Placeholder para o ícone de olho
  },
  // Os outros dois cards não serão exibidos neste layout
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Pode ajustar ou remover se a animação mudar
    },
  },
};

const ZapIaShowcase: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-8 text-center max-w-3xl"> {/* max-w-5xl para max-w-3xl */} 
        {/* Título Principal da Seção - Estilo similar à referência "Engage with..." */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="text-2xl md:text-3xl lg:text-4xl font-orbitron font-bold text-neutral-900 mb-16 md:mb-20 uppercase tracking-tight" // Tamanho da fonte reduzido
        >
          Fremen IA <br /> Texto & Voz {/* Texto alterado para duas linhas */}
        </motion.h1>

        {/* Layout para os dois cards lado a lado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10" // Espaçamento do gap reduzido
        >
          {featuresToDisplay.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              id={feature.id}
              iconType={feature.iconType} // Passando o novo tipo de ícone
              index={index}
              isHighlighted={feature.isHighlighted}
            />
          ))}
        </motion.div>

        {/* Elementos removidos: Badge "SERVIÇO SELECIONADO", subtítulo/descrição da seção, botão "LER MAIS...", nota de rodapé */}
      </div>
    </section>
  );
};

export default ZapIaShowcase; 