import React, { useState } from 'react';
import { AnimatedButton } from '@/components/animated/AnimatedButton';
import { MessageSquare, Users, FileText, CheckCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Variante container (stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Variante para item (fade + scale + leve slide up)
const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Classe base para o card, incluindo transições
const cardBaseClasses = "relative rounded-xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 ease-out border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";

// Classes para cards normais
const normalCardClasses = `
  ${cardBaseClasses}
  bg-neutral-900/60 backdrop-blur-sm
  border-neutral-800 hover:border-neutral-700
  focus:ring-cyan-500
  shadow-lg hover:shadow-xl hover:shadow-black/40
`;

// Classes para o card premium
const premiumCardClasses = `
  ${cardBaseClasses}
  bg-gradient-to-br from-neutral-900 via-neutral-900/80 to-[#0f122e]/70 backdrop-blur-md 
  border-[#FFD700]/30 hover:border-[#FFD700]/60
  focus:ring-yellow-400
  shadow-xl hover:shadow-2xl hover:shadow-yellow-600/20
`;

// Classes dinâmicas baseadas no plano selecionado
const getPremiumCardClasses = (planKey: PremiumPlanKey): string => {
  let dynamicClasses = "";
  if (planKey === '80k') {
    // Roxo Sutil para R$ 80k
    dynamicClasses = "bg-gradient-to-br from-neutral-900 via-purple-900/10 to-neutral-950/80 border-purple-600/30 hover:border-purple-600/60 focus:ring-purple-500 hover:shadow-purple-600/20";
  } else if (planKey === '125k') {
    // Preto Brilhante para R$ 125k
    dynamicClasses = "bg-gradient-to-br from-neutral-950 via-black to-neutral-900/80 border-neutral-700 hover:border-neutral-500 focus:ring-neutral-400 hover:shadow-white/10";
  } else {
    // Padrão Dourado para R$ 40k
    dynamicClasses = "bg-gradient-to-br from-neutral-900 via-neutral-900/80 to-[#0f122e]/70 border-[#FFD700]/30 hover:border-[#FFD700]/60 focus:ring-yellow-400 hover:shadow-yellow-600/20";
  }
  return `${cardBaseClasses} ${dynamicClasses}`;
};

// Tipagem para as opções de preço premium
type PremiumPlanKey = '40k' | '80k' | '125k';

interface PremiumPlan {
  label: string;
  price: string;
  duration: string;
  features: string[];
  highlightedFeatures?: string[];
}

const premiumPlans: Record<PremiumPlanKey, PremiumPlan> = {
  '40k': {
    label: 'R$ 40.000',
    price: '40.000',
    duration: '2 meses',
    features: [], // Base features are always shown
  },
  '80k': {
    label: 'R$ 80.000',
    price: '80.000',
    duration: '4 meses',
    features: [
      'Desenvolvimento web 5x mais',
      'Desenvolvimento de 03 VSL IAScale 10 a 50m',
      'Contingência Conteiner 10 BMs Scale AILOOP'
    ]
  },
  '125k': {
    label: 'R$ 125.000',
    price: '125.000',
    duration: '8 meses',
    features: [
      'Desenvolvimento web 7x mais',
      'Desenvolvimento de 03 VSL IAScale 10 a 50m',
      'Contingência Conteiner 15 BMs Scale AILOOP',
      'Branding IA Future (Rebranding) (opcional)',
    ],
    highlightedFeatures: [
        'Treinamento Tecnico da sua equipe',
        'Diretor de Brainstorming fixo no time.'
    ]
  }
};

const basePremiumFeatures = [
  "Diagnóstico completo do negócio",
  "Copywriting, automações, funil, posicionamento digital, tráfego pago (até R$ 20.000/mês)",
  "Inclui gestor de projeto, gestor de tráfego, gerente de contas",
  "Execução com metodologia AIDA",
  "Desenvolvimento MVP incluso"
];

const ServicesSection: React.FC = () => {
  // Estado para o dropdown do plano premium
  const [selectedPlanKey, setSelectedPlanKey] = useState<PremiumPlanKey>('40k');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectedPlan = premiumPlans[selectedPlanKey];

  return (
    <section id="services" className="bg-ailoop-dark-blue py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full border border-ailoop-neon-blue/30"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full border border-ailoop-purple/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-ailoop-orange/5 to-transparent"></div>
      </div>
      
      {/* Diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-ailoop-neon-blue/20 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-l from-transparent via-ailoop-purple/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-ailoop-pink/20 to-transparent"></div>
        
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-ailoop-neon-blue/10 to-transparent"></div>
        <div className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-ailoop-purple/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Título Refinado */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 relative">
          Serviços Principais
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-ailoop-neon-blue via-ailoop-purple to-ailoop-pink"></div>
        </h2>

        {/* Texto Descritivo Refinado */}
        <motion.div
          className="max-w-3xl mx-auto text-left mb-12 md:mb-16" // Alterado para text-left e max-w-3xl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            Nossos Agentes Assistentes para WhatsApp <span className="text-neutral-100 font-medium">redefinem a humanização</span>. Com IA avançada, entregamos <span className="text-neutral-100 font-medium">99% de semelhança vocal</span> e respostas com <span className="text-neutral-100 font-medium">latência natural (~100ms)</span>, fazendo com que seus clientes sintam que estão interagindo com sua equipe. Detalhes como a simulação precisa do tempo de gravação de áudio tornam a <span className="text-neutral-100 font-medium">experiência indistinguível</span>. <span className="text-neutral-100 font-medium">Funcionalmente completo</span>, ele agenda, vende, envia informações, processa áudios e mais. Esse <span className="text-neutral-100 font-medium">equilíbrio único entre realismo e performance</span> é fruto de um desenvolvimento focado intensamente nos <span className="text-neutral-100 font-medium">mínimos detalhes da comunicação humana</span>, garantindo conversas eficazes e naturais.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1 - IA Agente */}
          <motion.div
            variants={itemVariants}
            className={`group ${normalCardClasses}`}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="mb-6">
              <div className="w-14 h-14 bg-ailoop-neon-blue/10 rounded-full flex items-center justify-center mb-4 border border-ailoop-neon-blue/20 group-hover:bg-ailoop-neon-blue/20 group-hover:scale-105 transition-all duration-300">
                <MessageSquare className="w-7 h-7 text-ailoop-neon-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">IA Agente Assistente WhatsApp</h3>
            </div>

            <ul className="text-gray-300 mb-6 space-y-2 text-sm flex-grow">
              {[
                "Agente Humanizado", "Faz atendimento", "Envia informações com links",
                "Faz cálculos informando", "Compara produtos", "Sugestiona produtos",
                "Faz agendamentos", "Realiza a venda", "Lembra da conversa realizada",
                "Entende texto, voz e imagem", "Limite mensal de 10 mil mensagens"
              ].map((item) => (
                <li key={item} className="flex items-start transition-transform duration-200 ease-out">
                  <span className="text-ailoop-neon-blue mr-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Texto Adicional */}
            <motion.p 
              className="text-sm font-light text-cyan-300/90 my-5 leading-relaxed text-center px-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Seu Whatsapp dando uma atenção 24h 7/7 com semelhança de 99% a interação e posicionamento humano.
            </motion.p>

            <hr className="border-neutral-700 my-6" />

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Implementação</p>
                <p className="text-lg font-semibold text-ailoop-neon-blue">R$1.500</p>
              </div>
              <div className="text-center p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Mensalidade</p>
                <p className="text-lg font-semibold text-ailoop-neon-blue">R$99</p>
              </div>
            </div>

            {/* Container para os Botões */}
            <div className="flex flex-col gap-3 mt-auto">
              {/* Botão Testar Agente - Estilo Vidro Azul/Verde */}
              <AnimatedButton
                className="w-full bg-gradient-to-br from-cyan-600/10 via-transparent to-green-600/10 backdrop-blur-sm border border-white/10 hover:border-cyan-300/50 hover:from-cyan-600/20 hover:to-green-600/20 text-cyan-200 hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 ease-out shadow-sm hover:shadow-md hover:shadow-cyan-700/20"
                customWhileHover={{ scale: 1.03, y: -2, transition: { duration: 0.2 } }}
              >
                Testar Agente
              </AnimatedButton>

              {/* Botão Comprar Agora - Estilo Vidro Azul/Teal */}
              <AnimatedButton
                className="w-full bg-gradient-to-br from-blue-600/10 via-transparent to-teal-600/10 backdrop-blur-sm border border-white/10 hover:border-blue-300/50 hover:from-blue-600/20 hover:to-teal-600/20 text-blue-200 hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 ease-out shadow-sm hover:shadow-md hover:shadow-blue-700/20"
                customWhileHover={{ scale: 1.03, y: -2, transition: { duration: 0.2 } }}
              >
                Comprar Agora
              </AnimatedButton>
            </div>
          </motion.div>
          
          {/* Card 2 - Gestão de Tráfego */}
          <motion.div
            variants={itemVariants}
            className={`group ${normalCardClasses}`}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="mb-6">
              <div className="w-14 h-14 bg-ailoop-purple/10 rounded-full flex items-center justify-center mb-4 border border-ailoop-purple/20 group-hover:bg-ailoop-purple/20 group-hover:scale-105 transition-all duration-300">
                <Users className="w-7 h-7 text-ailoop-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Gestão de Tráfego com IA</h3>
            </div>

            <div className="mb-6 space-y-4 flex-grow">
              <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 relative overflow-hidden group-hover:border-purple-600/50 transition-colors duration-300">
                <h4 className="text-base font-semibold text-white mb-1">Pacote até R$ 5.000/mês em anúncios</h4>
                <p className="text-lg font-bold text-ailoop-neon-blue mb-2">R$ 4.000/mês</p>
                <ul className="text-gray-300 space-y-1 text-xs">
                  {[
                    "2 perfis próprios com BMs", "Páginas com possível reposição", "Funil MVP",
                    "Criativos inclusos (até R$ 500)", "Indicado para: white, dropshipping, negócios locais, etc."
                  ].map(item => (
                    <li key={item} className="flex items-start transition-transform duration-200 ease-out">
                      <span className="text-ailoop-neon-blue mr-2 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {/* Botão Comprar Agora (Pacote 5k) */}
                <div className="mt-4">
                  <AnimatedButton
                    className="w-full bg-gradient-to-br from-blue-600/10 via-transparent to-teal-600/10 backdrop-blur-sm border border-white/10 hover:border-blue-300/50 hover:from-blue-600/20 hover:to-teal-600/20 text-blue-200 hover:text-white font-medium px-6 py-2 rounded-lg text-sm transition-all duration-300 ease-out shadow-sm hover:shadow-md hover:shadow-blue-700/20"
                    customWhileHover={{ scale: 1.03, y: -1, transition: { duration: 0.2 } }}
                  >
                    Comprar Agora
                  </AnimatedButton>
                </div>
              </div>
              
              <hr className="border-neutral-700/50 my-4" />

              <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 relative overflow-hidden group-hover:border-purple-600/50 transition-colors duration-300">
                <h4 className="text-base font-semibold text-white mb-1">Pacote até R$ 20.000/mês em anúncios</h4>
                <p className="text-lg font-bold text-ailoop-purple mb-2">R$ 8.000/mês</p>
                <ul className="text-gray-300 space-y-1 text-xs">
                  {[
                    "3 perfis próprios com BMs", "Supervisor de tráfego incluso", "Criativos inclusos (até R$ 2.500)",
                    "Suporte a nichos black e white", "Funil adaptado ou desenvolvido"
                  ].map(item => (
                    <li key={item} className="flex items-start transition-transform duration-200 ease-out">
                      <span className="text-ailoop-purple mr-2 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                 {/* Botão Comprar Agora (Pacote 20k) */}
                 <div className="mt-4">
                  <AnimatedButton
                    className="w-full bg-gradient-to-br from-blue-600/10 via-transparent to-teal-600/10 backdrop-blur-sm border border-white/10 hover:border-blue-300/50 hover:from-blue-600/20 hover:to-teal-600/20 text-blue-200 hover:text-white font-medium px-6 py-2 rounded-lg text-sm transition-all duration-300 ease-out shadow-sm hover:shadow-md hover:shadow-blue-700/20"
                    customWhileHover={{ scale: 1.03, y: -1, transition: { duration: 0.2 } }}
                  >
                    Comprar Agora
                  </AnimatedButton>
                </div>
              </div>
            </div>

            {/* Botão Chamar Humano - Estilo Vidro Roxo */}
            <div className="flex justify-center mt-auto pt-4"> {/* Adicionado pt-4 para espaço */}
              <AnimatedButton
                className="w-full bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10 backdrop-blur-sm border border-white/10 hover:border-purple-300/50 hover:from-purple-600/20 hover:to-indigo-600/20 text-purple-200 hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 ease-out shadow-sm hover:shadow-md hover:shadow-purple-700/20"
                customWhileHover={{ scale: 1.03, y: -2, transition: { duration: 0.2 } }}
              >
                Chamar Humano
              </AnimatedButton>
            </div>
          </motion.div>
          
          {/* Card 3 - Gestão One Stack (Premium) */}
          <motion.div
            variants={itemVariants}
            className={`group ${getPremiumCardClasses(selectedPlanKey)}`}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 flex justify-between items-start">
                <div className="w-14 h-14 bg-[#FFD700]/10 rounded-full flex items-center justify-center mb-4 border border-[#FFD700]/20 group-hover:bg-[#FFD700]/20 group-hover:scale-105 transition-all duration-300">
                  <FileText className="w-7 h-7 text-[#FFD700]" />
                </div>
                <div className="bg-[#FFD700] text-black text-xs font-bold py-1 px-3 rounded-bl-lg rounded-tr-lg shadow-md animate-subtle-pulse">
                  PREMIUM
                </div>
              </div>

              {/* Estrelas e Checks Dinâmicos acima do título com brilho */}
              <motion.div
                className="mb-1 flex items-center text-2xl tracking-wider" // Mantém tamanho e espaçamento base
                initial={{ opacity: 0.7 }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
              >
                {/* Estrelas Amarelas (Sempre visíveis) */}
                <motion.span 
                  className="text-[#FFD700]"
                  initial={{ filter: 'drop-shadow(0 0 3px #FFD700)' }}
                  animate={{ filter: [
                      'drop-shadow(0 0 3px rgba(255, 215, 0, 0.5))',
                      'drop-shadow(0 0 8px rgba(255, 215, 0, 1))',
                      'drop-shadow(0 0 3px rgba(255, 215, 0, 0.5))'
                    ]
                  }}
                   transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
                >
                  ★★★★★
                </motion.span>

                {/* Checks Verdes (Visíveis em 80k e 125k) */}
                <AnimatePresence>
                  {(selectedPlanKey === '80k' || selectedPlanKey === '125k') && (
                    <motion.span
                      className="ml-2 flex items-center text-green-500"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <CheckCircle className="w-[1em] h-[1em] mx-px" /> {/* Tamanho relativo à fonte */} 
                      <CheckCircle className="w-[1em] h-[1em] mx-px" />
                      <CheckCircle className="w-[1em] h-[1em] mx-px" />
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Checks Dourados (Visíveis apenas em 125k) */}
                <AnimatePresence>
                  {selectedPlanKey === '125k' && (
                    <motion.span
                      className="ml-1 flex items-center text-yellow-500"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <CheckCircle className="w-[1em] h-[1em] mx-px" />
                      <CheckCircle className="w-[1em] h-[1em] mx-px" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-3">
                <span className={`bg-clip-text text-transparent ${selectedPlanKey === '40k' ? 'bg-gradient-to-r from-[#FFED87] to-[#FFB800]' : selectedPlanKey === '80k' ? 'bg-gradient-to-r from-purple-400 to-purple-600' : 'bg-gradient-to-r from-neutral-300 to-neutral-500'}`}>
                  Gestão One Stack
                </span>
              </h3>

              {/* Dropdown de Preço */}
              <div className="relative mb-4">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left p-2 rounded-md bg-neutral-800/60 border border-yellow-600/50 hover:bg-neutral-700/60 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-200 flex justify-between items-center"
                >
                  <p className={`text-lg font-bold transition-colors duration-200 
                    ${selectedPlanKey === '40k' ? 'text-[#FFD700]' : selectedPlanKey === '80k' ? 'text-purple-400' : 'text-neutral-100'}
                  `}>
                    R$ {selectedPlan.price}
                    <span className={`text-sm ml-1 transition-colors duration-200 
                      ${selectedPlanKey === '40k' ? 'text-yellow-300/80' : selectedPlanKey === '80k' ? 'text-purple-300/80' : 'text-neutral-300/80'}
                    `}>
                      ({selectedPlan.duration})
                    </span>
                  </p>
                  <ChevronDown
                     className={`w-5 h-5 transition-colors duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''} 
                       ${selectedPlanKey === '40k' ? 'text-yellow-400' : selectedPlanKey === '80k' ? 'text-purple-400' : 'text-neutral-300'}
                     `}/>
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg z-20 overflow-hidden"
                    >
                      {(Object.keys(premiumPlans) as PremiumPlanKey[]).map((key) => {
                        // Define a cor base e a cor de hover para cada opção
                        let textColorClass = "text-neutral-300 hover:text-neutral-100";
                        let shadowClass = ""; // Classe para o brilho/sombra

                        if (key === '40k') {
                          textColorClass = "text-yellow-400 hover:text-yellow-300";
                          shadowClass = "[text-shadow:0_0_3px_rgba(255,215,0,0.6)] hover:[text-shadow:0_0_5px_rgba(255,215,0,0.8)]";
                        } else if (key === '80k') {
                          textColorClass = "text-purple-400 hover:text-purple-300";
                          shadowClass = "[text-shadow:0_0_3px_rgba(192,132,252,0.6)] hover:[text-shadow:0_0_5px_rgba(192,132,252,0.8)]";
                        } else if (key === '125k') {
                          // Usando cinza mais claro (quase branco) para "preto brilhante"
                          textColorClass = "text-neutral-100 hover:text-white/80"; 
                          // Sem sombra para o 125k
                        }

                        // Verifica se é a opção selecionada
                        const isSelected = selectedPlanKey === key;

                        return (
                          <button
                            key={key}
                            onClick={() => {
                              setSelectedPlanKey(key);
                              setIsDropdownOpen(false);
                            }}
                            // Aplica a cor e o brilho (se não selecionado) e mantém o estilo de seleção/hover
                            className={`w-full text-left px-4 py-2 text-sm transition-all duration-150 
                              ${isSelected
                                ? 'bg-yellow-600/30 text-white font-medium'
                                : `${textColorClass} ${shadowClass} hover:bg-neutral-700/50`}
                            `}
                          >
                            {premiumPlans[key].label} ({premiumPlans[key].duration})
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Fim Dropdown */} 

              <hr className="border-[#FFD700]/20 my-6" />

              <ul className="text-gray-200 space-y-2 text-sm mb-6 flex-grow">
                {/* Features Base */}
                {basePremiumFeatures.map(item => (
                  <li key={item} className="flex items-start transition-transform duration-200 ease-out">
                    <span className="text-[#FFD700] mr-2 mt-1">★</span>
                    <span>{item}</span>
                  </li>
                ))}

                {/* Features Adicionais Animadas */}
                <AnimatePresence>
                  {selectedPlan.features.map((item) => (
                    <motion.li
                      key={`${selectedPlanKey}-${item}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex items-start transition-transform duration-200 ease-out"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
                
                {/* Features Destacadas */}
                <AnimatePresence>
                  {selectedPlan.highlightedFeatures?.map((item) => (
                    <motion.li
                      key={`${selectedPlanKey}-hl-${item}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="flex items-start transition-transform duration-200 ease-out text-yellow-400 font-semibold"
                    >
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>

              <div className="flex justify-center mt-auto">
                <AnimatedButton
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFB800] text-black font-semibold py-3 rounded-lg border border-yellow-600/50 shadow-lg hover:shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 ease-out hover:brightness-110"
                  customWhileHover={{ scale: 1.03, y: -2, transition: { duration: 0.2 } }}
                >
                  Ver detalhes
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Orange accent element */}
      <div className="absolute -bottom-10 right-10 w-36 h-36 bg-ailoop-orange/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-5 right-20 w-20 h-20 bg-ailoop-orange/5 rounded-full blur-xl"></div>
      
      {/* Section transition line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ailoop-orange/20 to-transparent"></div>
    </section>
  );
};

export default ServicesSection;
