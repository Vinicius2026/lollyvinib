'use client'
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { PiCube } from 'react-icons/pi'
import DarkCloudParticles from './animations/DarkCloudParticles'

const lines = [
  '> Inicializando IA... OK',
  '> Carregando contexto... 100%',
  '> Sistema pronto para transformar o seu negócio.'
]

const TypewriterText: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex < lines.length) {
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
  }, [charIndex, lineIndex])

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
  return (
    <div className="w-full min-h-screen bg-black text-white py-16 relative overflow-hidden">
      <DarkCloudParticles />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ZAP IA VOZ + TEXTO</h2>
          <p className="text-gray-400 text-lg">Caso ainda tenha dúvida se vai deixar a IA responder seus clientes, não pense, teste e verá<br />  a tecnologia que vai aumentar suas vendas e agendamentos.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {[
            {
              title: 'Atendimento com IA + Agente Humano',
              desc: 'Transforme o WhatsApp em seu canal de vendas e atendimento mais eficiente. Nossa IA atua em conjunto com seus atendentes, garantindo respostas imediatas, acolhedoras e com o tom certo para cada cliente. Ideal para negócios que não podem perder tempo — como clínicas, farmácias, imobiliárias e serviços com alta demanda.',
              color: 'text-cyan-400'
            },
            {
              title: 'Inteligência com Contexto Real do Seu Negócio',
              desc: 'Mais que uma IA — um especialista treinado com tudo sobre sua empresa. Produtos, horários, serviços, políticas e diferenciais: a IA responde como se fosse você. Entende cada detalhe do seu negócio e sabe conduzir o cliente da dúvida até a decisão.',
              color: 'text-green-400'
            },
            {
              title: 'Atendimento Multicanal com Voz e Imagem',
              desc: 'Seu cliente prefere enviar áudio ou foto? A IA entende tudo. De mensagens escritas a áudios e imagens, o assistente interage naturalmente e ainda responde com voz humana, oferecendo um atendimento moderno e acessível, direto no WhatsApp.',
              color: 'text-yellow-400'
            },
            {
              title: 'Agendamentos e Vendas Automatizados 24h',
              desc: 'Não perca mais oportunidades por falta de tempo. A IA identifica demandas, sugere serviços, fecha agendamentos e até realiza vendas automáticas. Perfeito para clínicas, consultórios, farmácias e empresas com agenda cheia ou grande volume de atendimento.',
              color: 'text-red-400'
            },
            {
              title: 'Segurança, Escalabilidade e Personalização',
              desc: 'Tecnologia OpenAI com a cara do seu negócio. Atenda 10 ou 10 mil clientes com a mesma eficiência. Nossa solução é segura, adaptável e configurada para refletir sua marca e atender seu público com excelência.',
              color: 'text-purple-400'
            }
          ].map(({ title, desc, color }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="dashboard-item bg-zinc-900 text-gray-200 rounded-xl p-6 shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <PiCube className={`${color} text-3xl`} />
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-gray-400">{desc}</p>
            </motion.div>
          ))}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="dashboard-item mt-8"
          >
            <div className="w-full h-32 bg-gray-900 rounded-lg overflow-hidden font-mono text-xs text-green-400 p-4">
              <TypewriterText />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
