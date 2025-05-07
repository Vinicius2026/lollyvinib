import React, { useState } from 'react';
import { AnimatedButton } from '@/components/animated/AnimatedButton'; // Certifique-se que este componente existe
import { MessageSquare, FileText, CheckCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- START: Variantes de Animação ---
// Para a nova introdução da seção
const introContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    }
  }
};

const introElementVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.1, 0.75, 0.5, 1] }
  }
};

const placeholderVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay:0.1, ease: "easeOut" }
  }
};

// Para os cards de serviço
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};
// --- END: Variantes de Animação ---


// --- START: Estilos dos Cards ---
const cardBaseClasses = "relative rounded-xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 ease-out border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const normalCardClasses = `
  ${cardBaseClasses}
  bg-neutral-900/70 backdrop-blur-md
  border-neutral-700/60 hover:border-neutral-600/80
  focus-visible:ring-cyan-500
  shadow-xl hover:shadow-2xl hover:shadow-black/30
`;

const getPremiumCardClasses = (planKey: PremiumPlanKey): string => {
  let dynamicGradientAndBorder = "";
  let dynamicHoverShadow = "hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.05)]";

  if (planKey === '40k') {
    dynamicGradientAndBorder = `bg-gradient-to-br from-neutral-900/80 via-[#2c2513]/70 to-[#0f122e]/80 border-yellow-500/50 hover:border-yellow-500/80 focus-visible:ring-yellow-400`;
    dynamicHoverShadow = "hover:shadow-[0_20px_50px_-12px_rgba(255,215,0,0.25)]";
  } else if (planKey === '80k') {
    dynamicGradientAndBorder = "bg-gradient-to-br from-neutral-900/80 via-purple-900/20 to-neutral-950/90 border-purple-600/40 hover:border-purple-600/70 focus-visible:ring-purple-500";
    dynamicHoverShadow = "hover:shadow-[0_20px_50px_-12px_rgba(192,132,252,0.2)]";
  } else if (planKey === '125k') {
    dynamicGradientAndBorder = "bg-gradient-to-br from-neutral-950/90 via-black/80 to-neutral-900/90 border-neutral-600/50 hover:border-neutral-500/80 focus-visible:ring-neutral-400";
    dynamicHoverShadow = "hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.1)]";
  }
  return `${cardBaseClasses} backdrop-blur-lg ${dynamicGradientAndBorder} shadow-2xl ${dynamicHoverShadow}`;
};
// --- END: Estilos dos Cards ---


// --- START: Tipos e Dados dos Planos ---
type PremiumPlanKey = '40k' | '80k' | '125k';
interface PremiumPlan { label: string; price: string; duration: string; features: string[]; highlightedFeatures?: string[]; }

const premiumPlans: Record<PremiumPlanKey, PremiumPlan> = {
  '40k': { label: 'R$ 40.000', price: '40.000', duration: '2 meses', features: [] },
  '80k': {
    label: 'R$ 80.000', price: '80.000', duration: '4 meses',
    features: ['Desenvolvimento web 5x mais', 'Desenvolvimento de 03 VSL IAScale 10 a 50m', 'Contingência Conteiner 10 BMs Scale AILOOP']
  },
  '125k': {
    label: 'R$ 125.000', price: '125.000', duration: '8 meses',
    features: ['Desenvolvimento web 7x mais', 'Desenvolvimento de 03 VSL IAScale 10 a 50m', 'Contingência Conteiner 15 BMs Scale AILOOP', 'Branding IA Future (Rebranding) (opcional)'],
    highlightedFeatures: ['Treinamento Tecnico da sua equipe', 'Diretor de Brainstorming fixo no time.']
  }
};
const basePremiumFeatures = [
  "Diagnóstico completo do negócio", "Copywriting, automações, funil, posicionamento digital, tráfego pago (até R$ 20.000/mês)",
  "Inclui gestor de projeto, gestor de tráfego, gerente de contas", "Execução com metodologia AIDA", "Desenvolvimento MVP incluso"
];
// --- END: Tipos e Dados dos Planos ---


const ServicesSection: React.FC = () => {
  const [selectedPlanKey, setSelectedPlanKey] = useState<PremiumPlanKey>('40k');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectedPlan = premiumPlans[selectedPlanKey];
  const cardHoverAnimation = { y: -5, transition: { duration: 0.2 } };

  const getDropdownDynamicColors = (plan: PremiumPlanKey) => {
    if (plan === '40k') return { text: 'text-yellow-400', subtext: 'text-yellow-300/80', chevron: 'text-yellow-400' };
    if (plan === '80k') return { text: 'text-purple-400', subtext: 'text-purple-300/80', chevron: 'text-purple-400' };
    return { text: 'text-neutral-100', subtext: 'text-neutral-300/80', chevron: 'text-neutral-300' }; // Default 125k
  };


  return (
    // O `id` foi mantido como `services` para não quebrar a navegação existente, 
    // mas pode ser ajustado se esta seção é específica para "Serviços Preço Fixo".
    <section id="services" className="bg-[#08080A] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* FUNDO SUTIL E ANIMADO */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(50,50,80,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(50,50,80,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{ 
             backgroundImage: `
              linear-gradient(rgba(50,50,80,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(50,50,80,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 bg-gradient-radial from-purple-700/10 via-transparent to-transparent blur-3xl opacity-40 animate-pulse-slow" />
        <div className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-radial from-cyan-700/10 via-transparent to-transparent blur-3xl opacity-40 animate-pulse-slower" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* NOVA SEÇÃO DE INTRODUÇÃO CENTRALIZADA */}
        <motion.div
          className="mb-24 md:mb-32 text-center"
          variants={introContainerVariants}
          initial="hidden"
          whileInView="visible" // Use whileInView para animar quando a seção entra na viewport
          viewport={{ once: true, amount: 0.05 }} // Ajuste amount conforme necessário
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-2 md:mb-3 leading-tight tracking-tight"
            style={{ textShadow: '0px 3px 20px rgba(0, 220, 255, 0.2), 0px 0px 5px rgba(255, 255, 255, 0.3)'}}
            variants={introElementVariants}
          >
            SERVIÇOS PREÇO FIXO 
            {/* Texto original "SERVIÇO POR PACOTE (SEM ON DEMAND)" abaixo é mais adequado para o tipo de produto
                Considerar qual título é o correto para esta página. Se for "SERVIÇOS PREÇO FIXO", o subtítulo
                abaixo e a copy principal podem precisar de ajustes para refletir isso.
                Se o título correto é "Serviço por Pacote", o placeholder AILOOP faz mais sentido.
                Mantendo "SERVIÇOS PREÇO FIXO" como na imagem, mas adaptando a estrutura.
            */}
          </motion.h1>
          <motion.p 
            className="text-sm font-light text-purple-700 bg-purple-300 rounded-sm mb-10 md:mb-12"
            variants={introElementVariants} // Reutilizando variantes para consistência na animação
          >
            (não são planos on demand)
          </motion.p>

          <motion.div 
            className="flex justify-center items-center mb-12 md:mb-16"
            variants={placeholderVariants} // Variante do placeholder, antes era introElementVariants
          >
            <div className="relative w-full max-w-xl lg:max-w-2xl aspect-square group transition-all duration-500 ease-out hover:scale-[1.02]">
               {/* Círculo Visual como na Imagem Original */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 via-orange-500/50 to-pink-600/50 rounded-full blur opacity-50 group-hover:opacity-75 group-hover:blur-md transition-all duration-500 animate-pulse-border" />
              <div className="relative bg-neutral-900/80 backdrop-blur-xl rounded-full shadow-2xl overflow-hidden h-full flex items-center justify-center">
                <div 
                  className="w-3/4 h-3/4 bg-gradient-to-br from-purple-600 via-red-500 to-orange-500 rounded-full shadow-inner opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  // Adicione uma leve animação interna ao gradiente se desejar
                  style={{ animation: 'gradientShift 10s ease infinite alternate' }} 
                />
                 {/* Opcional: Pequeno elemento central ou ícone aqui se desejado */}
              </div>
            </div>
          </motion.div>

          <motion.div variants={introElementVariants}>
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-neutral-100 mb-6 tracking-tight"
              // Removido variants={introElementVariants} pois já herda do pai
            >
              Serviços Principais
            </motion.h2>
            <motion.div 
              className="max-w-prose text-base md:text-lg text-neutral-300 leading-relaxed mx-auto"
              // Removido variants={introElementVariants}
            >
              <p>
                Nossos Agentes Assistentes para WhatsApp <span className="text-neutral-100 font-semibold">redefinem a humanização</span>. Com IA avançada, entregamos <span className="text-neutral-100 font-semibold">99% de semelhança vocal</span> e respostas com <span className="text-neutral-100 font-semibold">latência natural (~100ms)</span>, fazendo com que seus clientes sintam que estão interagindo com sua equipe. Detalhes como a simulação precisa do tempo de gravação de áudio tornam a <span className="text-neutral-100 font-semibold">experiência indistinguível</span>. <span className="text-neutral-100 font-semibold">Funcionalmente completo</span>, ele agenda, vende, envia informações, processa áudios e mais. Esse <span className="text-neutral-100 font-semibold">equilíbrio único entre realismo e performance</span> é fruto de um desenvolvimento focado intensamente nos <span className="text-neutral-100 font-semibold">mínimos detalhes da comunicação humana</span>, garantindo conversas eficazes e naturais.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* FIM DA NOVA INTRODUÇÃO DA SEÇÃO */}

        {/* SEÇÃO DE CARDS DE SERVIÇO */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-0 items-stretch"
          variants={cardContainerVariants} // Mudado para cardContainerVariants
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1 - IA Agente */}
          <motion.div
            variants={cardItemVariants} // Mudado para cardItemVariants
            className={`group ${normalCardClasses}`}
            whileHover={cardHoverAnimation}
          >
             <div className="mb-5">
              <div className="w-12 h-12 bg-cyan-500/15 rounded-lg flex items-center justify-center mb-3 border border-cyan-500/30 group-hover:bg-cyan-500/25 group-hover:border-cyan-500/50 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">IA Agente Assistente WhatsApp</h3>
            </div>
            <ul className="text-gray-300 mb-5 space-y-1.5 text-sm flex-grow">
              {[
                "Agente Humanizado", "Faz atendimento", "Envia informações com links",
                "Faz cálculos informando", "Compara produtos", "Sugestiona produtos",
                "Faz agendamentos", "Realiza a venda", "Lembra da conversa realizada",
                "Entende texto, voz e imagem", "Limite mensal de 10 mil mensagens"
              ].map((item) => ( <li key={item} className="flex items-start"> <span className="text-cyan-400 mr-2 mt-0.5">•</span> <span>{item}</span> </li> ))}
            </ul>
            <motion.p className="text-xs font-normal text-cyan-300/80 my-4 leading-normal text-center px-1" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }}>
              Seu Whatsapp dando uma atenção 24h 7/7 com semelhança de 99% a interação e posicionamento humano.
            </motion.p>
            <hr className="border-neutral-700/70 my-5" />
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-5">
              <div className="text-center p-3 bg-neutral-800/60 rounded-lg border border-neutral-700/80 hover:bg-neutral-700/70 transition-colors"> <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Implementação</p> <p className="text-base md:text-lg font-semibold text-cyan-400">R$1.500</p> </div>
              <div className="text-center p-3 bg-neutral-800/60 rounded-lg border border-neutral-700/80 hover:bg-neutral-700/70 transition-colors"> <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Mensalidade</p> <p className="text-base md:text-lg font-semibold text-cyan-400">R$99</p> </div>
            </div>
            <div className="flex flex-col gap-2.5 md:gap-3 mt-auto">
              <AnimatedButton className="w-full bg-gradient-to-br from-cyan-600/15 via-transparent to-green-600/15 backdrop-blur-sm border border-white/15 hover:border-cyan-300/60 hover:from-cyan-500/25 hover:to-green-500/25 text-cyan-200 hover:text-white font-medium px-6 py-2.5 md:py-3 rounded-lg transition-all duration-300 ease-out shadow-sm hover:shadow-lg hover:shadow-cyan-700/25" customWhileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}> Testar Agente </AnimatedButton>
              <AnimatedButton className="w-full bg-gradient-to-br from-blue-600/15 via-transparent to-teal-600/15 backdrop-blur-sm border border-white/15 hover:border-blue-300/60 hover:from-blue-500/25 hover:to-teal-500/25 text-blue-200 hover:text-white font-medium px-6 py-2.5 md:py-3 rounded-lg transition-all duration-300 ease-out shadow-sm hover:shadow-lg hover:shadow-blue-700/25" customWhileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}> Comprar Agora </AnimatedButton>
            </div>
          </motion.div>
          
          {/* Divisor Animado Central */}
          <div className="hidden md:flex flex-col items-center justify-center relative py-6">
            <div className="w-px h-full bg-neutral-800/70 relative overflow-hidden rounded-full">
              <motion.div className="absolute left-0 w-full h-20" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0, 220, 255, 0.4), transparent)', filter: 'blur(3px)' }} initial={{ y: '-80px' }} animate={{ y: '100%' }} transition={{ duration: 3.0, repeat: Infinity, ease: 'linear' }} />
              <motion.div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0, 191, 255, 0.1) 50%, transparent)'}} initial={{ opacity: 0.4 }} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />
            </div>
          </div>

          {/* Card 3 - Gestão One Stack (Premium) */}
          <motion.div
            variants={cardItemVariants} // Mudado para cardItemVariants
            className={`group ${getPremiumCardClasses(selectedPlanKey)}`}
            whileHover={cardHoverAnimation}
          >
             <div className="relative z-10 flex flex-col h-full">
              <div className="mb-5 flex justify-between items-start">
                <div className="w-12 h-12 bg-yellow-500/15 rounded-lg flex items-center justify-center mb-3 border border-yellow-500/30 group-hover:bg-yellow-500/25 group-hover:border-yellow-500/50 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-yellow-500/20 transition-all duration-300">
                  <FileText className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="bg-yellow-400 text-black text-xs font-bold py-1 px-3 rounded-bl-md rounded-tr-md shadow-md animate-subtle-pulse"> PREMIUM </div>
              </div>
              <motion.div className="mb-1 flex items-center text-xl md:text-2xl tracking-wider" initial={{ opacity: 0.8 }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.0, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}>
                <motion.span className="text-yellow-400" initial={{ filter: 'drop-shadow(0 0 3px rgba(255, 215, 0, 0.5))' }} animate={{ filter: [ 'drop-shadow(0 0 3px rgba(255, 215, 0, 0.5))', 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))', 'drop-shadow(0 0 3px rgba(255, 215, 0, 0.5))']}} transition={{ duration: 2.0, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}> ★★★★★ </motion.span>
                <AnimatePresence> { (selectedPlanKey === '80k' || selectedPlanKey === '125k') && ( <motion.span className="ml-1.5 flex items-center text-green-400" initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -5 }} transition={{ duration: 0.3, delay: 0.1 }}> <CheckCircle className="w-[0.9em] h-[0.9em] mx-px" /> <CheckCircle className="w-[0.9em] h-[0.9em] mx-px" /> <CheckCircle className="w-[0.9em] h-[0.9em] mx-px" /> </motion.span> )} </AnimatePresence>
                <AnimatePresence> { selectedPlanKey === '125k' && ( <motion.span className="ml-1 flex items-center text-yellow-400" initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -5 }} transition={{ duration: 0.3, delay: 0.2 }}> <CheckCircle className="w-[0.9em] h-[0.9em] mx-px" /> <CheckCircle className="w-[0.9em] h-[0.9em] mx-px" /> </motion.span> )} </AnimatePresence>
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2.5"> <span className={`bg-clip-text text-transparent transition-all duration-300 ${selectedPlanKey === '40k' ? 'bg-gradient-to-r from-yellow-300 to-amber-500' : selectedPlanKey === '80k' ? 'bg-gradient-to-r from-purple-300 to-purple-500' : 'bg-gradient-to-r from-neutral-200 to-neutral-400'}`}> Gestão One Stack </span> </h3>
              <div className="relative mb-3">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`w-full text-left p-2.5 rounded-md bg-neutral-800/70 border hover:bg-neutral-700/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-black transition-all duration-200 flex justify-between items-center ${selectedPlanKey === '40k' ? 'border-yellow-500/60 focus-visible:ring-yellow-500' : selectedPlanKey === '80k' ? 'border-purple-500/60 focus-visible:ring-purple-500' : 'border-neutral-600/60 focus-visible:ring-neutral-400'} `}>
                  <p className={`text-base md:text-lg font-semibold transition-colors duration-200 ${getDropdownDynamicColors(selectedPlanKey).text}`}> R$ {selectedPlan.price} <span className={`text-xs md:text-sm ml-1.5 transition-colors duration-200 ${getDropdownDynamicColors(selectedPlanKey).subtext}`}> ({selectedPlan.duration}) </span> </p>
                  <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''} ${getDropdownDynamicColors(selectedPlanKey).chevron}`}/>
                </button>
                <AnimatePresence> {isDropdownOpen && ( <motion.div initial={{ opacity: 0, y: -5, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }} exit={{ opacity: 0, y: -5, height: 0 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 right-0 mt-1 bg-neutral-800/95 backdrop-blur-sm border border-neutral-700 rounded-md shadow-xl z-20 overflow-hidden"> {(Object.keys(premiumPlans) as PremiumPlanKey[]).map((key) => { let tc = "text-neutral-300 hover:text-neutral-100"; let sc = ""; if (key === '40k') { tc = "text-yellow-400 hover:text-yellow-300"; sc = "hover:[text-shadow:0_0_5px_rgba(255,215,0,0.4)]"; } else if (key === '80k') { tc = "text-purple-400 hover:text-purple-300"; sc = "hover:[text-shadow:0_0_5px_rgba(192,132,252,0.4)]"; } else if (key === '125k') { tc = "text-neutral-100 hover:text-white/90"; } const isSel = selectedPlanKey === key; return ( <button key={key} onClick={() => { setSelectedPlanKey(key); setIsDropdownOpen(false); }} className={`w-full text-left px-3.5 py-2 text-xs md:text-sm transition-all duration-150 ${isSel ? 'bg-yellow-600/40 text-white font-semibold' : `${tc} ${sc} hover:bg-neutral-700/60`}`}> {premiumPlans[key].label} ({premiumPlans[key].duration}) </button> ); })} </motion.div> )} </AnimatePresence>
              </div>
              <hr className={`my-5 transition-colors duration-300 ${selectedPlanKey === '40k' ? 'border-yellow-500/30' : selectedPlanKey === '80k' ? 'border-purple-500/30' : 'border-neutral-700/70'}`} />
              <ul className="text-gray-200 space-y-1.5 text-sm mb-5 flex-grow">
                {basePremiumFeatures.map(item => ( <li key={item} className="flex items-start"> <span className={`mr-2 mt-0.5 transition-colors duration-300 ${selectedPlanKey === '40k' ? 'text-yellow-400' : selectedPlanKey === '80k' ? 'text-purple-400' : 'text-neutral-300'}`}>★</span> <span>{item}</span> </li> ))}
                <AnimatePresence> {selectedPlan.features.map((item) => ( <motion.li key={`${selectedPlanKey}-${item}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3, delay: 0.1 }} className="flex items-start"> <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> <span>{item}</span> </motion.li> ))} </AnimatePresence>
                <AnimatePresence> {selectedPlan.highlightedFeatures?.map((item) => ( <motion.li key={`${selectedPlanKey}-hl-${item}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3, delay: 0.2 }} className="flex items-start text-yellow-300 font-semibold"> <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /> <span>{item}</span> </motion.li> ))} </AnimatePresence>
              </ul>
              <div className="flex justify-center mt-auto"> <AnimatedButton className={`w-full font-semibold py-2.5 md:py-3 rounded-lg border shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:brightness-110 ${selectedPlanKey === '40k' ? 'bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400 text-black border-yellow-600/70 hover:shadow-yellow-400/40' : selectedPlanKey === '80k' ? 'bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-500 text-white border-purple-700/70 hover:shadow-purple-500/30' : 'bg-gradient-to-r from-neutral-500 to-neutral-700 hover:from-neutral-700 hover:to-neutral-500 text-white border-neutral-700/70 hover:shadow-neutral-500/30' }`} customWhileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}> Ver detalhes </AnimatedButton> </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute -bottom-12 right-0 w-40 h-40 bg-ailoop-orange/03 rounded-full blur-3xl opacity-80"></div>
      <div className="absolute -bottom-8 right-16 w-24 h-24 bg-ailoop-orange/02 rounded-full blur-2xl opacity-70"></div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ailoop-orange/10 to-transparent"></div>
    </section>
  );
};

export default ServicesSection;