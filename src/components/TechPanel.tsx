'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ZapIaShowcase from './ZapIaShowcase'; // Importando a nova seção

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

export default function TechPanel() {
  const [typewriterStarted, setTypewriterStarted] = useState(false);

  // cardData.length foi removido do cálculo de delay, pois cardData não existe mais aqui.
  // O delay pode ser ajustado ou removido se não for mais necessário para o TypewriterText.
  const typewriterDelay = 0.5; // Exemplo de delay fixo ou ajuste conforme necessidade

  return (
    <div className="w-full bg-white text-neutral-800 relative">
      {/* A classe py-20 md:py-28 foi movida para dentro do ZapIaShowcase */}
      {/* O max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 também foi movido para ZapIaShowcase para consistência */}
      
      <ZapIaShowcase />

      {/* Seção do Terminal Typewriter - Mantida */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: typewriterDelay }} // Usando o delay ajustado
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => setTypewriterStarted(true)}
          className="mt-12 md:mt-20 relative" // Ajustado o margin top conforme necessidade visual pós-refatoração
        >
          <div className="w-full max-w-2xl mx-auto h-36 bg-gray-900/70 backdrop-blur-sm rounded-lg overflow-hidden font-mono text-sm text-green-400 p-4 border border-gray-700">
            <TypewriterText startAnimation={typewriterStarted} />
          </div>
        </motion.div>
      </div>

      {/* Seção do Slider de Logos - Mantida */}
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
