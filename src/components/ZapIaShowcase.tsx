import { motion } from 'framer-motion';
import FeatureCard, { FeatureCardProps } from './FeatureCard';
import { UsersRound, BrainCircuit, MessagesSquare, CalendarClock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Criar um componente Link animado
const MotionLink = motion(Link);

const featureData: FeatureCardProps[] = [
  {
    icon: UsersRound,
    title: 'Atendimento com IA Estratégica + Agente Humano Real',
    description: 'Unimos IA de ponta com atendimento humano supervisionado. Nossa IA é treinada com dados reais da sua empresa e atua como primeiro contato, entendendo o cliente, acolhendo e resolvendo o que for possível. Quando necessário, ela passa o atendimento para um humano — tudo sem perda de contexto.',
    id: 'feature1',
  },
  {
    icon: BrainCircuit,
    title: 'Inteligência com Contexto Profundo do Seu Negócio',
    description: 'Essa não é uma IA genérica. Ela entende seus produtos, horários, políticas, campanhas e até o jeito que sua empresa fala. Cada mensagem enviada é baseada em treinamentos personalizados, combinando inteligência artificial com estratégia comercial.',
    id: 'feature2',
  },
  {
    icon: MessagesSquare,
    title: 'Atendimento Completo: Texto, Áudio, Imagem e Voz Natural',
    description: 'Se o cliente manda áudio? Ela entende. Se manda foto? Ela interpreta. Se quiser ouvir a resposta? Ela fala com voz humana. O atendimento se adapta ao estilo do cliente, oferecendo uma experiência fluida e moderna — via WhatsApp.',
    id: 'feature3',
    isHighlighted: true,
  },
  {
    icon: CalendarClock,
    title: 'Agendamentos e Vendas 100% Automatizados, 24h',
    description: 'A IA identifica o tipo de cliente, sugere produtos, fecha agendamentos e até realiza vendas automáticas. Tudo isso enquanto você foca no que importa. E se algo exigir atenção humana, ela aciona o agente certo na hora certa.',
    id: 'feature4',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ZapIaShowcase: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="container mx-auto px-4 text-center max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20}}
          animate={{ opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.1}}
          className="text-lg md:text-xl font-inter font-light text-white uppercase tracking-wider mb-4 md:mb-6"
        >
          SERVIÇO SELECIONADO <span className="text-red-500 font-normal">(CATEGORIA FIXO)</span>
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl mb-5"
        >
          <span className="font-orbitron font-bold text-cyan-400" style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))' }}>
            ZAP IA TEXTO + VOZ
          </span>
          <br className="md:hidden" />
          <span className="font-inter font-extrabold text-white ml-2 md:ml-0">
            99% HUMANIZADA
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-neutral-300 max-w-3xl mx-auto mb-6 md:mb-8"
        >
          Caso ainda tenha dúvida se vai deixar a IA responder seus clientes, não pense, teste e verá a tecnologia que vai aumentar suas vendas e agendamentos.
        </motion.p>

        <MotionLink 
          to="/servicos-fixos"
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.5}}
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 ease-in-out uppercase text-sm tracking-wider mb-12 md:mb-16"
        >
          COMPRAR IMPLEMENTAÇÃO
        </MotionLink>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {featureData.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              id={feature.id}
              index={index}
              isHighlighted={feature.isHighlighted}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity:0, y: 20 }}
          whileInView={{ opacity:1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16 w-full border border-neutral-700 rounded-lg p-4 md:p-6 text-center"
        >
          <p className="text-xs md:text-sm text-neutral-400 font-inter">
            Operação com aplicações oficiais da 
            <span className="text-neon-lime/90 font-medium">OpenAI</span>, 
            <span className="text-neon-lime/90 font-medium">Gemini</span>, 
            <span className="text-neon-lime/90 font-medium">Claude</span>, 
            <span className="text-neon-lime/90 font-medium">Zapier</span>, 
            <span className="text-neon-lime/90 font-medium">Make</span> entre LMS
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ZapIaShowcase; 