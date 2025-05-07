'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaCube } from 'react-icons/fa' // Ícone unificado
import Typewriter from 'typewriter-effect'

const lines = [
  '> Inicializando IA... OK',
  '> Carregando contexto... 100%',
  '> Sistema pronto para transformar o seu negócio.'
]

const TypewriterText: React.FC<{ startAnimation: boolean }> = ({ startAnimation }) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (startAnimation && lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + lines[lineIndex][charIndex])
          setCharIndex((prev) => prev + 1)
        }, 35)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, lines[lineIndex]])
          setLineIndex((prev) => prev + 1)
          setCharIndex(0)
          setCurrentLine('')
        }, 300)
        return () => clearTimeout(timeout)
      }
    }
  }, [charIndex, lineIndex, startAnimation])

  return (
    <div>
      {displayedLines.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
      <div>{currentLine}<span className="animate-pulse">|</span></div>
    </div>
  )
}

interface CardInfo {
  id: number;
  title: string;
  desc: string;
}

const cardData: CardInfo[] = [
  {
    id: 1,
    title: 'Atendimento com IA + Agente Humano',
    desc: 'Transforme o WhatsApp em seu canal de vendas e atendimento mais eficiente. Nossa IA atua em conjunto com seus atendentes, garantindo respostas imediatas, acolhedoras e com o tom certo para cada cliente.',
  },
  {
    id: 2,
    title: 'Inteligência com Contexto Real do Seu Negócio',
    desc: 'Mais que uma IA — um especialista treinado com tudo sobre sua empresa. Produtos, horários, serviços, políticas e diferenciais: a IA responde como se fosse você.',
  },
  {
    id: 3,
    title: 'Atendimento Multicanal com Voz e Imagem',
    desc: 'Seu cliente prefere enviar áudio ou foto? A IA entende tudo. De mensagens escritas a áudios e imagens, o assistente interage naturalmente e responde com voz humana.',
  },
  {
    id: 4,
    title: 'Agendamentos e Vendas Automatizados 24h',
    desc: 'Não perca mais oportunidades por falta de tempo. A IA identifica demandas, sugere serviços, fecha agendamentos e até realiza vendas automáticas.',
  },
  {
    id: 5,
    title: 'Segurança, Escalabilidade e Personalização',
    desc: 'Tecnologia OpenAI com a cara do seu negócio. Atenda 10 ou 10 mil clientes com a mesma eficiência. Nossa solução é segura, adaptável e configurada.',
  },
];

interface CardProps {
  card: CardInfo;
  index: number;
}

const WHATSAPP_GREEN_BRIGHT = 'rgba(37, 211, 102, 0.7)'; // Verde WhatsApp para brilho
const WHATSAPP_GREEN_MEDIUM = 'rgba(37, 211, 102, 0.5)';
const WHATSAPP_GREEN_DIM = 'rgba(37, 211, 102, 0.2)';

const TechCard: React.FC<CardProps> = ({ card, index }) => {
  const iconColor = 'text-cyan-400';

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.15, 
        ease: 'easeOut' as const,
      },
    },
  };

  const positions = [
    { top: '5%',  left: '5%',  width: '45%' },
    { top: '5%', left: '50%', width: '45%' }, 
    { top: '28%', left: '5%',  width: '45%' }, 
    { top: '28%', left: '50%', width: '45%' }, 
    { top: '51%', left: '27.5%', width: '45%' }, 
  ];
  const cardStyle = positions[index % positions.length] || { top: `${index * 25}%`, left: '5%', width: '90%' };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        position: 'absolute',
        top: cardStyle.top,
        left: cardStyle.left,
        width: cardStyle.width,
        minHeight: '220px',
      }}
      className="dashboard-item bg-zinc-900/80 backdrop-blur-md text-gray-200 rounded-xl p-6 shadow-2xl relative overflow-visible"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <FaCube className={`${iconColor} text-3xl`} />
          <h3 className="text-2xl font-semibold text-white">
            <span className="orange-glow-text">{card.title}</span>
          </h3>
        </div>
        <p className="text-base text-gray-300">{card.desc}</p>
      </div>
    </motion.div>
  );
};

export default function TechPanel() {
  const [typewriterStarted, setTypewriterStarted] = useState(false);

  return (
    <div className="w-full bg-black text-white py-20 md:py-28 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-28"
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
            ZAP IA TEXTO + <span className="bg-cyan-400/30 text-white px-1 rounded-sm">VOZ 99% HUMANIZADA</span>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Caso ainda tenha dúvida se vai deixar a IA responder seus clientes, não pense, teste e verá a tecnologia que vai aumentar suas vendas e agendamentos.
          </p>
        </motion.div>

        <div className="relative h-[80vh] md:h-[70vh] lg:h-[65vh]">
          {cardData.map((card, idx) => (
            <TechCard key={card.id} card={card} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: cardData.length * 0.15 + 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => setTypewriterStarted(true)}
          className="mt-2 md:mt-6 relative"
        >
          <div className="w-full max-w-2xl mx-auto h-36 bg-gray-900/70 backdrop-blur-sm rounded-lg overflow-hidden font-mono text-sm text-green-400 p-4 border border-gray-700">
            <TypewriterText startAnimation={typewriterStarted} />
          </div>
        </motion.div>
      </div>

      <div className="w-full bg-white py-16 mt-16 overflow-hidden">
        <div className="flex animate-logo-scroll">
          <img
            src="/image_grande/slider.png"
            alt="Logos de Tecnologias e Parcerias"
            className="h-auto flex-shrink-0 pr-8 md:pr-12 lg:pr-16"
          />
          <img
            src="/image_grande/slider.png"
            alt=""
            className="h-auto flex-shrink-0 pr-8 md:pr-12 lg:pr-16"
          />
        </div>
      </div>
    </div>
  );
}
