import { motion } from 'framer-motion';
import FeatureCard, { FeatureCardProps } from './FeatureCard';
import { UsersRound, BrainCircuit, MessagesSquare, CalendarClock, ShieldCheck } from 'lucide-react';

const featureData: FeatureCardProps[] = [
  {
    icon: UsersRound,
    title: 'Atendimento com IA + Agente Humano',
    description: 'Transforme o WhatsApp em seu canal de vendas e atendimento mais eficiente. Nossa IA atua em conjunto com seus atendentes, garantindo respostas imediatas, acolhedoras e com o tom certo para cada cliente.',
    id: 'feature1',
  },
  {
    icon: BrainCircuit,
    title: 'Inteligência com Contexto Real do Seu Negócio',
    description: 'Mais que uma IA — um especialista treinado com tudo sobre sua empresa. Produtos, horários, serviços, políticas e diferenciais: a IA responde como se fosse você.',
    id: 'feature2',
  },
  {
    icon: MessagesSquare,
    title: 'Atendimento Multicanal com Voz e Imagem',
    description: 'Seu cliente prefere enviar áudio ou foto? A IA entende tudo. De mensagens escritas a áudios e imagens, o assistente interage naturalmente e responde com voz humana.',
    id: 'feature3',
  },
  {
    icon: CalendarClock,
    title: 'Agendamentos e Vendas Automatizados 24h',
    description: 'Não perca mais oportunidades por falta de tempo. A IA identifica demandas, sugere serviços, fecha agendamentos e até realiza vendas automáticas.',
    id: 'feature4',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança, Escalabilidade e Personalização',
    description: 'Tecnologia OpenAI com a cara do seu negócio. Atenda 10 ou 10 mil clientes com a mesma eficiência. Nossa solução é segura, adaptável e configurada.',
    id: 'feature5',
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
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl mb-5"
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto mb-16 md:mb-20"
        >
          Caso ainda tenha dúvida se vai deixar a IA responder seus clientes, não pense, teste e verá a tecnologia que vai aumentar suas vendas e agendamentos.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {featureData.slice(0, 4).map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              id={feature.id}
              index={index}
            />
          ))}
        </motion.div>

        {featureData.length > 4 && (
           <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-8 flex justify-center"
          >
            <div className="w-full md:w-3/5 lg:w-1/2">
               <FeatureCard
                key={featureData[4].id}
                icon={featureData[4].icon}
                title={featureData[4].title}
                description={featureData[4].description}
                id={featureData[4].id}
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ZapIaShowcase; 