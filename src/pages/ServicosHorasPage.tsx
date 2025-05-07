import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, Zap, TrendingUp, Users, Brain, Package, Clock, LayoutDashboard, 
  Handshake, BarChart3, ShoppingCart, Hourglass, Users2, Eye, ShieldCheck, Sparkles, Settings2, 
  Search, Mic, Bot, LineChart, Megaphone, FileText, Filter, Palette, Shield, TrendingDown, 
  LockOpen, CheckSquare, RotateCcw, Lightbulb, MessageSquareText, ThumbsUp, Rocket, 
  BadgePercent, CalendarDays, MessageCircle,
  PackagePlus, MessageSquare, UserCheck, PlayCircle,
  ArrowDown,
  Target, SlidersHorizontal, BrainCircuit // <-- NOVOS ÍCONES PARA USPs
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import HumanProfileCard from '@/components/HumanProfileCard'; // NOVO
import AIProfileCard from '@/components/AIProfileCard'; // NOVO
import { ComparativeAdvantageSection } from '@/components/features/ServicosHorasPage/ComparativeAdvantageSection'; // NOVO IMPORT
import { AiloopAdvantageSection } from '@/components/features/ServicosHorasPage/AiloopAdvantageSection'; // NOVA IMPORTAÇÃO DA SEÇÃO DE VANTAGENS

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const cardFadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const sectionFadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const cardGridVariants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.4, ease: "easeOut" }
};

// Definição da interface para os props do ServiceCard
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  neonColorName: 'cyan' | 'electricblue' | 'magenta' | 'purple' | 'orange' | 'lime' | 'yellow' | 'white' | 'teal';
  index: number;
}

// Lista de serviços atualizada
const allAvailableServices: Omit<ServiceCardProps, 'index'>[] = [
  { title: "Análise de Dados com IA", icon: LineChart, description: "Insights profundos para decisões estratégicas.", neonColorName: 'cyan' },
  { title: "Criação de Copy Persuasiva", icon: FileText, description: "Textos que vendem e engajam seu público.", neonColorName: 'electricblue' },
  { title: "Gestão de Tráfego Avançada", icon: Megaphone, description: "Maximize o ROI de seus anúncios online.", neonColorName: 'magenta' },
  { title: "Desenvolvimento de Funil de Vendas", icon: Filter, description: "Converta leads em clientes de forma otimizada.", neonColorName: 'purple' },
  { title: "Consultoria Estratégica de Marketing", icon: Users, description: "Planejamento e direcionamento para seus objetivos.", neonColorName: 'orange' },
  { title: "Otimização SEO Completa", icon: Search, description: "Melhore seu ranking e visibilidade orgânica.", neonColorName: 'lime' },
  { title: "Design de Landing Pages Otimizadas", icon: Palette, description: "Páginas focadas em conversão e experiência do usuário.", neonColorName: 'yellow' },
  { title: "Automação de Marketing com IA", icon: Bot, description: "com Agentes Assistentes Inteligentes e educados com material da sua empresa.", neonColorName: 'white' },
  { 
    title: "Gestão da Operação", 
    icon: MessageCircle, 
    description: "Metodo OpenAI para conectar todos os fluxos de agentes em tempo real com o time humano. Criando um fluxo de implementação rápido, profissional, que deslumbra atingir o maior nível de qualidade possível.", 
    neonColorName: 'cyan' // Cor conforme imagem mais recente
  },
  {
    title: "Whatsapp Agente Assistente IAL",
    icon: Sparkles, 
    description: "Agente humanizado que entende texto, audio, imagem, contexto em modo geral. Ele é educado com dados da sua empresa e atende de forma personalizada, a ponto de atingir uma semelhança de até 99% com um humano conversando, treinado para gerar vendas e ou agendamentos. Esse serviço de implementação está restrito ao plano de Preços Fixos. Acesse a página de Preços Fixos para contratar.",
    neonColorName: 'cyan' // Cor conforme imagem mais recente (era lime)
  }
];

const standardServices = allAvailableServices.slice(0, 8);
const specialServices = allAvailableServices.slice(8);

// Helper para classes de hover dinâmicas (APENAS BORDA NEON)
const getNeonBorderHoverClasses = (colorName: ServiceCardProps['neonColorName']) => {
  if (colorName === 'white') {
    return "hover:border-white"; // Borda branca sólida no hover
  }
  // return `hover:border-neon-${colorName}`; // DIAGNÓSTICO: Comentado
  return 'hover:border-sky-500'; // DIAGNÓSTICO: Fallback para azul
};

const getNeonIconColorClass = (colorName: ServiceCardProps['neonColorName']) => {
  if (colorName === 'white') return 'text-white';
  // return `text-neon-${colorName}`; // DIAGNÓSTICO: Comentado
  return 'text-sky-500'; // DIAGNÓSTICO: Fallback para azul
};

const getNeonTitleColorClass = (colorName: ServiceCardProps['neonColorName']) => {
  if (colorName === 'white') return 'text-white';
  // return `text-neon-${colorName}`; // DIAGNÓSTICO: Comentado
  return 'text-sky-500'; // DIAGNÓSTICO: Fallback para azul
};

// Componente ServiceCard (para os 8 serviços padrão)
const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, neonColorName, index }) => {
  const borderHoverClass = getNeonBorderHoverClasses(neonColorName);
  const iconColorClass = getNeonIconColorClass(neonColorName);
  const titleColorClass = getNeonTitleColorClass(neonColorName);

  return (
    <motion.div
      className={cn(
        "font-inter group relative flex flex-col p-6 rounded-xl overflow-hidden h-full",
        "bg-neutral-950", // FUNDO MAIS ESCURO, SEM BLUR E SEM TRANSPARÊNCIA SIGNIFICATIVA
        "border-2 border-transparent", // Borda transparente para manter o layout, será colorida no hover
        "transition-colors duration-200 ease-in-out", // Transição apenas para cores (borda)
        borderHoverClass // Aplicando a classe de borda no hover
      )}
      variants={cardVariants}
      whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2, ease: "easeInOut" } }} // Hover mais sutil
    >
      <div className="mb-5">
        <Icon className={cn("w-10 h-10 sm:w-12 sm:h-12", iconColorClass, "transition-colors duration-300 stroke-[1.5]")} />
      </div>
      <h4 className={cn(
          "font-semibold text-lg sm:text-xl mb-2.5",
          titleColorClass,
          "transition-colors duration-300"
      )}>
        {title}
      </h4>
      <p className="text-neutral-400 text-sm sm:text-[0.9rem] leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};

// NOVO Componente SpecialServiceCard
const SpecialServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, neonColorName, index }) => {
  const iconColor = neonColorName === 'white' ? 'text-white' : `text-neon-${neonColorName}`;
  const borderColor = neonColorName === 'white' ? 'border-white' : `border-neon-${neonColorName}`;
  const shadowColor = neonColorName === 'white' ? 'shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]' : `shadow-[0_0_20px_-5px_theme(colors.neon-${neonColorName}/0.4)]`;
  const hoverShadowColor = neonColorName === 'white' ? 'hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)]' : `hover:shadow-[0_0_30px_-5px_theme(colors.neon-${neonColorName}/0.6)]`;
  
  // Usando as classes de fallback azul para diagnóstico visual rápido, ATÉ QUE O PROBLEMA DE SUMIR SEJA RESOLVIDO
  // ASSIM QUE O PROBLEMA ORIGINAL DE SUMIR TUDO FOR RESOLVIDO, REVERTER PARA AS CORES NEON REAIS ABAIXO:
  const diagnosticIconColor = 'text-sky-500'; // getNeonIconColorClass(neonColorName);
  const diagnosticTitleColor = 'text-sky-500'; // getNeonTitleColorClass(neonColorName);
  const diagnosticBorderColor = 'border-sky-500'; // borderColor;
  const diagnosticShadowColor = 'shadow-[0_0_20px_-5px_theme(colors.sky-500/0.4)]'; // shadowColor;
  const diagnosticHoverShadowColor = 'hover:shadow-[0_0_30px_-5px_theme(colors.sky-500/0.6)]'; // hoverShadowColor;


  return (
    <motion.div
      className={cn(
        "font-inter group relative flex flex-col p-8 rounded-xl overflow-hidden h-full w-full max-w-2xl mx-auto", // Centralizado e com largura máxima
        "bg-neutral-900", // Fundo um pouco diferente
        "border-2", // Borda mais espessa
        diagnosticBorderColor, // Borda neon persistente (usando fallback azul por agora)
        diagnosticShadowColor, // Sombra neon persistente (usando fallback azul por agora)
        diagnosticHoverShadowColor, // Sombra mais forte no hover (usando fallback azul por agora)
        "transition-all duration-300 ease-in-out"
      )}
      variants={cardVariants} // Pode ter variantes próprias se necessário
      whileHover={{ scale: 1.03, transition: { duration: 0.2, ease: "easeInOut" } }}
    >
      <div className="mb-6">
        <Icon className={cn("w-12 h-12 sm:w-14 sm:h-14", diagnosticIconColor, "stroke-[1.5]")} />
      </div>
      <h4 className={cn("font-semibold text-xl sm:text-2xl mb-3", diagnosticTitleColor)}>
        {title}
      </h4>
      <p className="text-neutral-300 text-base leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};

const ServicosHorasPage: React.FC = () => {
  const [durationTier, setDurationTier] = useState<'monthly' | 'tri_monthly' | 'annual'>('monthly');

  const plansOriginal = [
    {
      id: "essencial",
      name: "Pacote Essencial",
      badgeText: "Ideal para Iniciar",
      hours: 40,
      basePrice: 3600,
      description: "Para projetos pontuais e experimentar o poder da AILOOP com flexibilidade total.",
      features: [
        "Acumulável por até 6 meses",
        "Acesso à equipe completa (Humanos + IA)",
        "Painel de Gerenciamento Exclusivo",
      ],
      bgColor: "bg-neutral-850 hover:bg-neutral-800/70",
      borderColor: "border-neutral-700",
      buttonGradient: "from-sky-500 to-cyan-500",
      textColor: "text-sky-400",
      highlight: false,
      isCustom: false,
    },
    {
      id: "estrategico",
      name: "Pacote Estratégico",
      badgeText: "MAIS POPULAR",
      hours: 80,
      basePrice: 6800,
      description: "Para estratégias consistentes e resultados robustos com o melhor custo-benefício.",
      features: [
        "Acumulável por até 6 meses",
        "Acesso à equipe completa (Humanos + IA)",
        "Painel de Gerenciamento Exclusivo",
        "Suporte Prioritário",
      ],
      bgColor: "bg-gradient-to-br from-blue-600/80 via-purple-600/70 to-pink-600/60",
      borderColor: "border-transparent",
      buttonGradient: "from-ailoop-blue via-neon-purple to-pink-500",
      textColor: "text-white",
      highlight: true,
      isCustom: false,
    },
    {
      id: "performance",
      name: "Pacote Performance Max",
      badgeText: "Resultados Acelerados",
      hours: 160,
      basePrice: 12800,
      description: "Máximo impacto e volume de horas para projetos ambiciosos e contínuos.",
      features: [
        "Acumulável por até 9 meses (Bônus!)",
        "Acesso à equipe completa (Humanos + IA)",
        "Painel de Gerenciamento Exclusivo",
        "Suporte Prioritário Dedicado",
        "Consultoria Estratégica Mensal (1hr)"
      ],
      bgColor: "bg-neutral-850 hover:bg-neutral-800/70",
      borderColor: "border-neutral-700",
      buttonGradient: "from-purple-600 to-pink-600",
      textColor: "text-purple-400",
      highlight: false,
      isCustom: false,
    },
    {
      id: "custom",
      name: "Plano Sob Medida", // Será usado como badgeText se não houver badgeText explícito
      badgeText: "All Inclusive",
      hours: "Custom",
      basePrice: "R$20K-100K+", // String para price range
      description: "Soluções totalmente personalizadas para demandas e orçamentos específicos de grandes projetos.",
      features: [
          "Todos os benefícios dos outros planos",
          "Consultoria e escopo 100% dedicados",
          "Soluções de IA e equipe sob medida",
          "Contrato e SLA personalizados",
      ],
      bgColor: "bg-neutral-850 hover:bg-neutral-800/70",
      borderColor: "border-neutral-700",
      buttonGradient: "from-yellow-500 to-orange-500",
      textColor: "text-yellow-400",
      highlight: false,
      isCustom: true,
  },
  ];

  const plans = useMemo(() => {
    let discountRate = 0;
    if (durationTier === 'tri_monthly') discountRate = 0.10;
    if (durationTier === 'annual') discountRate = 0.20;

    return plansOriginal.map(plan => {
      if (plan.isCustom || typeof plan.basePrice !== 'number' || typeof plan.hours !== 'number') {
        return plan;
      }

      const discountedPrice = plan.basePrice * (1 - discountRate);
      return {
        ...plan,
        price: discountedPrice,
        originalPrice: discountRate > 0 ? plan.basePrice : undefined,
        hourlyRate: discountedPrice / plan.hours,
      };
    });
  }, [durationTier, plansOriginal]);

  const howItWorksSteps = [
    { icon: ShoppingCart, title: "1. Escolha Seu Pacote de Horas", description: "Selecione o volume de horas que melhor se adapta às suas necessidades e realize o pagamento único. Sem contratos, sem mensalidades.", color: "text-neon-cyan" },
    { icon: Hourglass, title: "2. Horas Ativadas e Acumuladas", description: "Suas horas são creditadas instantaneamente em seu painel e permanecem válidas para uso por até 6 meses. Flexibilidade total para sua estratégia.", color: "text-sky-400" },
    { icon: LayoutDashboard, title: "3. Acesse Seu Painel Exclusivo", description: "Monitore seu saldo de horas, histórico de uso e status de projetos em uma interface intuitiva e poderosa.", color: "text-ailoop-blue" },
    { icon: Users2, title: "4. Solicite Serviços Sob Demanda", description: "Quando precisar, descreva sua necessidade ou projeto. Nossa equipe de especialistas (humanos e IA) entra em ação.", color: "text-neon-purple" },
    { icon: Eye, title: "5. Acompanhe e Colabore", description: "Receba atualizações, aprove entregas e veja suas horas transformando-se em resultados concretos para seu negócio.", color: "text-pink-500" },
  ];

  const humanTeam = {
    ceo: [
      { name: "EDCRED", role: "CEO & Founder", icon: ShieldCheck, color: "text-ailoop-blue", avatar: "/image_team/edcred.png" },
    ],
    directors: [
      { name: "VINICIUS BENI", role: "Estratégista Sênior", icon: Brain, avatar: "/image_team/vinicius-beni.png" },
      { name: "BRUNO PADRIN", role: "Engine MKT", icon: Settings2, avatar: "/image_team/bruno-padrin.png" },
      { name: "RENAN S.", role: "Administração Geral", icon: Users, avatar: "/image_team/renan-s.png" },
    ],
    specialists: [
      { name: "RAFAELA MARLINE", role: "DEV", icon: Zap, avatar: "https://i.pravatar.cc/150?u=rafaelamarline" },
      { name: "RODRIGO BRADESON", role: "Gestor de Tráfego Sênior", icon: TrendingUp, avatar: "https://i.pravatar.cc/150?u=rodrigobradeson" },
      { name: "JADIEL CAMPOS", role: "Copywriter", icon: Mic, avatar: "/image_team/jadiel-c.png" },
      { name: "DANIEL MARTINEZ", role: "Funil All-in-One", icon: Filter, avatar: "https://i.pravatar.cc/150?u=danielmartinez" },
    ]
  };

  const aiTeam = [
    { name: "Fremen", role: "IA Estrategista Líder", image: "/Image_astros/Fremen.png", description: "Orquestra e otimiza as operações de marketing, conectando IAs especializadas e estrategistas humanos para máxima eficiência e resultados.", type: 'ia', id: "Fremen", isOutline: false },
    { name: "Mavelito", role: "IA de Performance e Mídia Paga", image: "/Image_astros/Mavelito.png", description: "Especialista em otimizar campanhas de tráfego pago, identificando oportunidades e ajustando lances em tempo real para maximizar o ROI.", type: 'ia', id: "Mavelito", isOutline: false },
    { name: "Piraq", role: "IA Criativa e de Conteúdo", image: "/Image_astros/Piraq.png", description: "Gera copies persuasivas, roteiros e ideias visuais, adaptando a linguagem e o tom para cada público e plataforma.", type: 'ia', id: "Piraq", isOutline: false },
    { name: "Verlini", role: "IA de Análise de Dados e BI", image: "/Image_astros/Verlini.png", description: "Processa grandes volumes de dados para extrair insights acionáveis, tendências de mercado e comportamento do consumidor.", type: 'ia', id: "Verlini", isOutline: false },
    { name: "Dramontin", role: "IA de SEO e Otimização Orgânica", image: "/ailoop-ges/5astro5.png", description: "Analisa e otimiza o conteúdo e a estrutura do site para melhorar o ranking nos motores de busca e aumentar o tráfego orgânico.", type: 'ia', id: "Dramontin", isOutline: false },
    { name: "Roromiro", role: "IA de Automação e CRM", image: "/ailoop-ges/6astro6.png", description: "Gerencia fluxos de automação de marketing, nutre leads e personaliza a comunicação em escala através do CRM.", type: 'ia', id: "Roromiro", isOutline: true },
    { name: "Cof", role: "IA de Atendimento e Suporte ao Cliente", image: "/ailoop-ges/7astro7.png", description: "Fornece suporte inteligente e contextualizado, resolvendo dúvidas e engajando clientes em tempo real.", type: 'ia', id: "Cof", isOutline: false },
  ];

  // Ajuste para Rororomiro ser o único com outline, conforme interpretação da imagem original
  const teamBlocksLayout = [
    // CEO
    { id: "ceo-block", title: "", members: [{ ...humanTeam.ceo[0], type: 'human', id: humanTeam.ceo[0].name }], type: 'human-block' },
    // Diretores
    { id: "directors-block", title: "Liderança Estratégica", members: humanTeam.directors.map(d => ({ ...d, type: 'human', id: d.name })), type: 'human-block' },
    // IAs Estratégicas
    {
      id: "strategic-ai-block",
      title: "Inteligência Artificial Estratégica",
      members: [
        { ...aiTeam.find(p => p.name === "Fremen"), type: 'ai', id: "Fremen" },
        { ...aiTeam.find(p => p.name === "Mavelito"), type: 'ai', id: "Mavelito" },
        { ...aiTeam.find(p => p.name === "Piraq"), type: 'ai', id: "Piraq" },
        { ...aiTeam.find(p => p.name === "Verlini"), type: 'ai', id: "Verlini" },
      ].filter(member => member && member.name).map(m => ({...m, isOutline: false})),
      type: 'ai-block'
    },
    // Especialistas
    { id: "specialists-block", title: "Especialistas em Ação", members: humanTeam.specialists.map(s => ({ ...s, type: 'human', id: s.name })), type: 'human-block' },
    // IAs Operacionais
    {
      id: "operational-ai-block",
      title: "IA Dedicada à Performance",
      members: [
        { ...aiTeam.find(p => p.name === "Dramontin"), type: 'ai', id: "Dramontin", isOutline: false },
        { ...aiTeam.find(p => p.name === "Roromiro"), type: 'ai', id: "Roromiro", isOutline: true }, // Rororomiro com outline
        { ...aiTeam.find(p => p.name === "Cof"), type: 'ai', id: "Cof", isOutline: false },
      ].filter(member => member && member.name),
      type: 'ai-block'
    }
  ];

  const availableServices = [
    { name: "Análise de Dados com IA", icon: LineChart, description: "Insights profundos para decisões estratégicas.", color: "text-neon-cyan" },
    { name: "Criação de Copy Persuasiva", icon: FileText, description: "Textos que vendem e engajam seu público.", color: "text-sky-400" },
    { name: "Gestão de Tráfego Avançada", icon: Megaphone, description: "Maximize o ROI de seus anúncios online.", color: "text-ailoop-blue" },
    { name: "Desenvolvimento de Funil de Vendas", icon: Filter, description: "Converta leads em clientes de forma otimizada.", color: "text-neon-purple" },
    { name: "Consultoria Estratégica de Marketing", icon: Users, description: "Planejamento e direcionamento para seus objetivos.", color: "text-pink-500" },
    { name: "Otimização SEO Completa", icon: Search, description: "Melhore seu ranking e visibilidade orgânica.", color: "text-green-400" },
    { name: "Design de Landing Pages Otimizadas", icon: Palette, description: "Páginas focadas em conversão e experiência do usuário.", color: "text-orange-400" },
    { name: "Automação de Marketing com IA", icon: Bot, description: "Eficiência e personalização em escala com robôs inteligentes.", color: "text-yellow-400" },
  ];

  const flowItems = [
    { 
      step: "1",
      title: "Adquira Seus Créditos AILOOP", 
      description: "Pacotes de horas que viram créditos flexíveis. Válidos por 6 meses, prontos para ativar.",
      benefit: "Liberdade para usar quando e como precisar.",
      icon: "PackagePlus"
    },
    { 
      step: "2",
      title: "Sua Demanda, Direto no WhatsApp",
      description: "Envie sua necessidade por texto ou áudio. Sem formulários, sem burocracia.",
      benefit: "Comunicação ágil no seu app favorito.",
      icon: "MessageSquare"
    },
    { 
      step: "3",
      title: "IA Fremen Entra em Ação",
      description: "Nossa IA processa seu pedido e monta instantaneamente sua equipe dedicada de especialistas humanos e IAs.",
      benefit: "Análise rápida e time ideal para cada projeto.",
      icon: "Bot"
    },
    { 
      step: "4",
      title: "Validação Humana & Orçamento Ágil",
      description: "Um Estrategista AILOOP revisa, otimiza a proposta da IA e envia o orçamento em horas. (Meta: até 20 min).",
      benefit: "Inteligência Artificial com supervisão expert. Transparência total.",
      icon: "UserCheck"
    },
    { 
      step: "5",
      title: "Sua Aprovação, Nossa Execução",
      description: "Confirme o orçamento. Nossa sinergia Humano-IA inicia o trabalho em tempo recorde. O timer só conta com acionamento humano.",
      benefit: "Controle total e pagamento apenas por tempo produtivo.",
      icon: "PlayCircle"
    },
    { 
      step: "6",
      title: "Entregas de Impacto & Insights IA",
      description: "Receba entregas de alta qualidade e acompanhe o progresso com relatórios e alertas inteligentes gerados por IA.",
      benefit: "Resultados mensuráveis e otimização contínua.",
      icon: "TrendingUp"
    },
  ];
  const totalFlowItems = flowItems.length;

  // >>> INÍCIO DAS DEFINIÇÕES DOS COMPONENTES AUXILIARES REINTRODUZIDOS <<<
  const DurationToggle: React.FC<{
    label: string;
    tier: 'monthly' | 'tri_monthly' | 'annual';
    activeTier: 'monthly' | 'tri_monthly' | 'annual';
    onClick: () => void;
    discount?: string;
  }> = ({ label, tier, activeTier, onClick, discount }) => {
    const isActive = activeTier === tier;
    return (
      <button
        onClick={onClick}
        className={cn(
          "relative px-4 py-2.5 sm:px-5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900",
          isActive
            ? "bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 text-white shadow-md shadow-cyan-500/30 focus-visible:ring-cyan-500"
            : "bg-neutral-700/60 hover:bg-neutral-600/80 text-neutral-300 hover:text-neutral-100 focus-visible:ring-neutral-500"
        )}
      >
        {label}
        {discount && (
          <span className={cn(
            "absolute -top-2 -right-2 px-1.5 py-0.5 text-[0.6rem] font-bold rounded-full shadow",
            isActive ? "bg-yellow-400 text-neutral-800" : "bg-pink-600 text-white"
          )}>
            {discount}
          </span>
        )}
      </button>
    );
  };

  const mapTailwindColorToNeonName = (tailwindColorClass: string | undefined): 'blue' | 'cyan' | 'purple' | 'green' | 'orange' | 'yellow' | 'red' | 'pink' => {
    if (!tailwindColorClass) return 'cyan'; // Default se undefined
    if (tailwindColorClass.includes('cyan')) return 'cyan';
    if (tailwindColorClass.includes('blue') || tailwindColorClass.includes('sky')) return 'blue';
    if (tailwindColorClass.includes('purple') || tailwindColorClass.includes('violet')) return 'purple';
    if (tailwindColorClass.includes('green')) return 'green';
    if (tailwindColorClass.includes('orange')) return 'orange';
    if (tailwindColorClass.includes('yellow')) return 'yellow';
    if (tailwindColorClass.includes('red')) return 'red';
    if (tailwindColorClass.includes('pink') || tailwindColorClass.includes('fuchsia')) return 'pink';
    return 'cyan'; // Default
  };
  
  const ImpactSectionDivider: React.FC<{className?: string}> = ({className}) => {
    return (
      <div className={cn("w-full max-w-5xl mx-auto my-12 md:my-16", className)}>
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-600/70 to-transparent"></div>
      </div>
    );
  };

  const VerticalTeamConnector: React.FC<{className?: string, heightClass?: string}> = ({className, heightClass = "h-16 md:h-20"}) => {
    return (
      <div className={cn("relative flex justify-center items-center w-12", heightClass, className)}>
        <div className="w-px h-full bg-gradient-to-b from-neutral-600/0 via-neutral-600/80 to-neutral-600/0"></div>
        <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-sky-500/70 opacity-75" />
      </div>
    );
  };
  // >>> FIM DAS DEFINIÇÕES DOS COMPONENTES AUXILIARES REINTRODUZIDOS <<<

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-dark text-brand-white flex flex-col items-center pt-10 sm:pt-16 relative overflow-x-hidden">
        {/* Background Animado */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundImage: [
                "radial-gradient(ellipse 80% 50% at 50% -20%, theme(colors.ailoop-blue/0.1), transparent 50%), radial-gradient(ellipse 80% 50% at 50% 120%, theme(colors.neon-purple/0.08), transparent 50%)",
                "radial-gradient(ellipse 80% 50% at 50% -20%, theme(colors.neon-cyan/0.08), transparent 50%), radial-gradient(ellipse 80% 50% at 50% 120%, theme(colors.ailoop-blue/0.1), transparent 50%)",
                "radial-gradient(ellipse 80% 50% at 50% -20%, theme(colors.neon-purple/0.1), transparent 50%), radial-gradient(ellipse 80% 50% at 50% 120%, theme(colors.neon-cyan/0.08), transparent 50%)",
                "radial-gradient(ellipse 80% 50% at 50% -20%, theme(colors.ailoop-blue/0.1), transparent 50%), radial-gradient(ellipse 80% 50% at 50% 120%, theme(colors.neon-purple/0.08), transparent 50%)",
              ],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Hero Section Refinada - INSPIRADA NA NINJAPROMO */}
      <motion.section
          className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl py-16 sm:py-20 px-4"
        initial="initial"
        animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          variants={fadeInUp}
        >
            Planos Flexíveis,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-neon-purple to-purple-600">
              Pagamento Único.
            </span>
        </motion.h1>

        <motion.p
            className="font-sans text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10"
            variants={fadeInUp}
          >
            Adquira as horas que precisa e use como quiser – sem restrições, sem limites mensais. Sem custos ocultos ou taxas surpresa – apenas pura mágica de marketing com IA.
          </motion.p>

          {/* Duration Toggles */}
          <motion.div 
            className="flex items-center justify-center gap-2 sm:gap-3 p-1.5 bg-neutral-800/70 backdrop-blur-sm rounded-xl mb-12 shadow-md border border-neutral-700/50"
            variants={fadeInUp}
          >
            <DurationToggle label="Pacotes Base" tier="monthly" activeTier={durationTier} onClick={() => setDurationTier('monthly')} />
            <DurationToggle label="Volume Trimestral" tier="tri_monthly" activeTier={durationTier} onClick={() => setDurationTier('tri_monthly')} discount="10% OFF" />
            <DurationToggle label="Volume Anual" tier="annual" activeTier={durationTier} onClick={() => setDurationTier('annual')} discount="20% OFF" />
          </motion.div>
        </motion.section>


        {/* Seção 2: Planos de Horas AILOOP - REESTILIZADA */}
        <section id="planos-horas" className="w-full max-w-6xl xl:max-w-7xl mx-auto py-10 sm:py-16 px-4 relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {plans.map((plan, index) => (
            <motion.div
                key={plan.id}
              className={cn(
                  "rounded-2xl p-6 flex flex-col relative overflow-hidden transition-all duration-300 ease-in-out transform-gpu border",
                  plan.highlight 
                    ? "bg-gradient-to-br from-blue-600/80 via-purple-600/70 to-pink-600/60 border-transparent shadow-[0_0_40px_-5px_theme(colors.ailoop-blue/0.4),_0_0_60px_-15px_theme(colors.neon-purple/0.2)] ring-1 ring-purple-500/80 scale-[1.02] lg:scale-105 z-10"
                    : "bg-neutral-850/80 border-neutral-700/70 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-ailoop-blue/10 hover:-translate-y-1.5",
                  plan.isCustom && "border-yellow-500/50"
              )}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                transition={{delay: index * 0.08, duration: 0.5}}
              >
                <div className={cn(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-5 w-fit", // w-fit para ajustar ao conteúdo
                    plan.highlight 
                        ? "bg-white/90 text-purple-700" 
                        : plan.isCustom ? `${plan.textColor} bg-yellow-900/40` : `${plan.textColor} bg-neutral-700/60`
                )}>
                   {plan.isCustom && <Package size={14} />}
                   {plan.highlight && <Zap size={14} />}
                   {plan.badgeText || plan.name}
                </div>

                <div className="mb-auto">
                    <div className="flex items-baseline mb-1">
                        <p className={cn(
                            "text-5xl sm:text-6xl font-bold",
                            plan.highlight ? "text-white" : plan.textColor || "text-white"
                        )}>
                            {plan.isCustom ? "" : plan.hours} 
                        </p>
                        {!plan.isCustom && typeof plan.hours === 'number' && <span className="text-xl font-medium text-neutral-400 ml-1.5">hrs</span>}
                        {plan.isCustom && <p className={cn("text-5xl sm:text-6xl font-bold",plan.textColor || "text-white")}>Custom</p>}
                    </div>

                    {plan.isCustom ? (
                        <p className={cn("font-sans text-2xl font-semibold mb-6", plan.highlight ? "text-white" : "text-neutral-200")}>
                            {plan.basePrice}
                        </p>
                    ) : (
                        <>
                            <div className="flex items-end gap-2 mb-1">
                                {'originalPrice' in plan && typeof plan.originalPrice === 'number' && (
                                    <p className="font-sans text-sm text-neutral-500 line-through">
                                        R$ {plan.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                                    </p>
                                )}
                                <p className={cn(
                                    "font-sans text-2xl font-semibold",
                                    plan.highlight ? "text-white" : "text-neutral-200"
                                )}>
                                    R$ {(plan.basePrice as number).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                                </p>
                            </div>
                            {typeof plan.basePrice === 'number' && typeof plan.hours === 'number' &&
                                <p className={cn("font-sans text-sm mb-6", plan.highlight ? "text-neutral-300" : "text-neutral-400")}>
                                    {(plan.basePrice / plan.hours).toLocaleString('pt-BR', { minimumFractionDigits: 0, style: 'currency', currency: 'BRL' })} / hora
                                </p>
                            }
                        </>
                    )}
                
                    <p className="font-sans text-sm text-neutral-300 mb-6 min-h-[60px] sm:min-h-[80px]">{plan.description}</p>
              
              <ul className="space-y-2.5 mb-8 text-left flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-sm">
                          <CheckCircle className={cn(
                              "w-4 h-4 mr-2.5 flex-shrink-0 mt-0.5", 
                              plan.highlight ? "text-sky-300" : "text-green-500")}
                          />
                          <span className={plan.highlight ? "text-neutral-200" : "text-neutral-300"}>{feature}</span>
                  </li>
                ))}
              </ul>
                </div>

              <motion.button 
                className={cn(
                    "w-full mt-auto font-sans px-6 py-3 text-white font-semibold rounded-lg text-base transition-all duration-300 ease-in-out transform hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark",
                  plan.buttonGradient,
                    plan.highlight 
                      ? "shadow-[0_0_15px_var(--tw-gradient-from)/60,_0_0_25px_var(--tw-gradient-to)/40] focus:ring-[var(--tw-gradient-from)]" 
                      : "bg-opacity-80 hover:bg-opacity-100 shadow-md hover:shadow-lg focus:ring-current"
                )}
                  whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 350, damping: 15 } }}
                  whileTap={{ scale: 0.98 }}
              >
                  {plan.isCustom ? "Fale Conosco" : `Adquirir ${plan.name}`}
              </motion.button>
            </motion.div>
          ))}
        </div>

           <motion.div
            className="mt-16 sm:mt-20 py-10 px-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 rounded-xl shadow-lg"
            variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
            >
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-ailoop-blue">
                    Todos os Pacotes AILOOP Incluem:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 text-sm sm:text-base">
                    {[
                        "Acesso à equipe completa (Humanos + IA)",
                        "Painel de Gerenciamento Exclusivo AILOOP",
                        "Suporte Técnico Ágil e Eficaz",
                        "Relatórios Detalhados de Uso das Horas",
                        "Flexibilidade para escalar projetos",
                        "Inteligência de dados para otimizar estratégias",
                        "Acumulação de horas não utilizadas (conforme pacote)",
                        "Comunicação direta e transparente com gestores",
                        "Segurança e confidencialidade de dados"
                    ].map((feature, idx) => (
                        <motion.div key={idx} className="flex items-start" variants={fadeInUp}>
                            <CheckCircle className="w-5 h-5 mr-2.5 mt-0.5 text-green-400 flex-shrink-0" />
                            <span className="text-neutral-300">{feature}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

      </section>

      {/* Seção 3: Como Funciona */}
        <section id="como-funciona" className="w-full max-w-5xl mx-auto py-16 sm:py-24 px-4 relative z-10">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.2 }} className="text-center mb-12 md:mb-16" >
            <motion.h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple" variants={fadeInUp} > Seu Marketing Sob Comando: Simples Assim </motion.h2>
            <motion.p className="font-sans text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto" variants={fadeInUp} > Em poucos passos, você transforma investimento em resultados tangíveis com o banco de horas AILOOP. </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {howItWorksSteps.map((step, index) => ( <motion.div key={index} className="bg-neutral-800/50 border border-neutral-700/60 rounded-xl p-6 flex flex-col items-start text-left shadow-lg hover:shadow-neon-purple/20 transition-all duration-300 transform hover:-translate-y-1.5" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }} transition={{delay: index * 0.1}} > <div className={cn("mb-5 p-4 bg-gradient-to-br rounded-full shadow-inner shadow-black/50 inline-block", step.color.replace('text-', 'from-').replace('-400', '/70').replace('-500', '/70').replace('-cyan', '-cyan/70').replace('-purple', '-purple/70').replace('-blue', '-blue/70'), step.color.replace('text-','to-').replace('-400','/40').replace('-500','/40').replace('-cyan','-cyan/40').replace('-purple','-purple/40').replace('-blue','-blue/40'))}> <step.icon className={cn("w-8 h-8", step.color, "opacity-90")} /> </div> <h4 className={cn("font-serif text-lg font-semibold mb-2", step.color)}>{step.title}</h4> <p className="font-sans text-sm text-neutral-400 leading-relaxed">{step.description}</p> </motion.div> ))}
          </div>
        </section>

        {/* Textos introdutórios da seção da equipe - REFINADO para Monochromatic Futurism */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20 px-4"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-sans text-lg sm:text-xl text-neutral-300 leading-relaxed mb-6">
            Quando você faz uma solicitação, nossas IAs analisam e propõem a equipe ideal de especialistas (humanos e IAs), a estimativa de horas e a margem de erro para o seu projeto.
          </p>
          <p className="font-serif text-xl sm:text-2xl text-neutral-100 font-semibold p-5 border border-neutral-700 rounded-lg shadow-md bg-neutral-800/30 inline-block">
            E o mais importante: <strong className="block sm:inline mt-1 sm:mt-0 text-white">Se a solução proposta não funcionar, as horas NÃO são contabilizadas em seu pacote. Simples assim.</strong>
          </p>
        </motion.div>

        {/* SEÇÃO DA EQUIPE - Layout com Blocos Distintos e Divisórias Impactantes */}
        <div className="relative flex flex-col items-center w-full px-4 bg-[#0A0A0A] bg-[radial-gradient(ellipse_at_center,rgba(28,28,30,0.3)_0%,rgba(10,10,10,0.7)_70%)] py-20 sm:py-28">
          
          <motion.h2 
            className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wider font-bold text-[#F0F0F0] mb-10 md:mb-12 text-center"
            variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
          >
            Nossa Equipe de <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-400">Especialistas Dedicados</span>
          </motion.h2>

          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
            {teamBlocksLayout.map((block, blockIndex) => (
              <React.Fragment key={block.id}>
                {/* Conector ANTES do bloco de CEO e ANTES de outros títulos de bloco */}
                {(blockIndex === 0 && block.members.length === 1 && !block.title) ? (
                   <VerticalTeamConnector heightClass="h-10 md:h-12" className="mb-8 md:mb-10" /> // Conector menor para o CEO
                ) : block.title && blockIndex > 0 ? (
                  <VerticalTeamConnector className="mb-8 md:mb-10" />
                ) : null}

                {block.title && (
                  <div className={cn(
                    "relative flex justify-center w-full",
                    block.id === "operational-ai-block" ? "mt-4 mb-10 md:mt-6 md:mb-16" : "my-4 md:my-6"
                  )}>
                    <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[calc(50%-7rem)] max-w-xs h-px bg-neutral-600"></div>
                    <motion.h3 
                      className="relative font-serif text-xl sm:text-2xl md:text-3xl tracking-wider font-semibold text-[#E0E0E0] text-center bg-neutral-800/70 px-6 py-3 rounded-lg border border-neutral-600 shadow-lg mx-auto whitespace-nowrap"
                      variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2}}
                    >
                      {block.title}
                    </motion.h3>
                    <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[calc(50%-7rem)] max-w-xs h-px bg-neutral-600"></div>
                  </div>
                )}
                
                <motion.div 
                  className={cn(
                      "flex justify-center items-stretch flex-wrap gap-5 md:gap-8 w-full",
                      block.members.length === 1 && "max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                  )}
                  variants={{ animate: { transition: { staggerChildren: 0.07 } } }}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {block.members.map((member: any) => (
                    <motion.div 
                      key={member.id + "-wrapper"} 
                      variants={cardFadeInUp} 
                      className="flex"
                      initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2}}
                    >
                      {member.type === 'human' ? (
                        <HumanProfileCard 
                          name={member.name}
                          role={member.role}
                          avatarUrl={member.avatar}
                          className="w-44 sm:w-48 md:w-52 h-full"
                        />
                      ) : (
                        (() => {
                          console.log(`DEBUG: Dados para AI Card ${member.name}:`, member);
                          return (
                            <AIProfileCard 
                              name={member.name}
                              role={member.role?.split('&')[0].trim() || 'IA Specialist'}
                              neonColorName={mapTailwindColorToNeonName(member.color || 'text-neon-cyan')}
                              className="w-44 sm:w-48 md:w-52 h-full"
                              isOutline={member.isOutline || false}
                              imageUrl={member.image}
                            />
                          );
                        })()
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Conector APÓS cada bloco, exceto o último */}
                {blockIndex < teamBlocksLayout.length - 1 && (
                  <VerticalTeamConnector 
                    className={cn(
                      blockIndex === 0 ? "mt-4 md:mt-6" : "mt-10 md:mt-12" // Margem superior reduzida após o bloco do CEO
                    )} 
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* FIM DA NOVA ESTRUTURA DA EQUIPE */}

        {/* NOVA SEÇÃO: Arsenal de Marketing & Fluxo AILOOP - SUBSTITUINDO a antiga seção "servicos-disponiveis" */}
        <section id="ailoop-flow-arsenal" className="w-full bg-brand-dark py-20 sm:py-28 px-4 relative z-10 font-inter">
          {/* 1. Gancho: Headline, Tagline e Introdução */}
          <motion.div 
            className="text-center mb-16 md:mb-24"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionFadeInUp} // Reutilizando variante existente para consistência inicial
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Seu Arsenal de Marketing Sob Demanda
            </h2>
            <motion.p 
              className="font-sans text-xl sm:text-2xl text-neutral-100 mb-8 max-w-3xl mx-auto"
              variants={fadeInUp} // Reutilizando variante
            >
              Inteligência Artificial e Expertise Humana, ativadas por você, minuto a minuto.
            </motion.p>
            <motion.p 
              className="font-sans text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto"
              variants={fadeInUp} // Reutilizando variante
            >
              Desbloqueie o arsenal completo da AILOOP: serviços de marketing especializados, prontos para sua estratégia quando você precisar. Adquira pacotes de horas que se convertem em créditos flexíveis por 6 meses. Use como quiser, pague apenas o tempo produtivo. Total liberdade, zero desperdício.
            </motion.p>
          </motion.div>

          {/* 2. Core Concept: The "AILOOP Flow" - Como Funciona */}
          <motion.div
            className="relative mb-20 md:mb-28"
            initial="initial"
            whileInView="animate"
            variants={{ animate: { transition: { staggerChildren: 0.3 } } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Placeholder para a linha/visual de conexão do fluxo - a ser detalhado */}
            {/* <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-700 -translate-y-1/2 z-0"></div> */}

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
              {flowItems.map((item, index) => {
                const IconComponent = {
                  PackagePlus,
                  MessageSquare,
                  Bot,
                  UserCheck,
                  PlayCircle,
                  TrendingUp
                }[item.icon as string] || Package;

                return (
                  <div key={item.step + '-container'} className="relative">
                    <motion.div 
                      key={item.step}
                      className="bg-neutral-900 p-6 rounded-xl border border-neutral-700/70 shadow-xl flex flex-col items-start text-left relative overflow-hidden transition-all duration-300 ease-out hover:border-neon-cyan/80 hover:shadow-[0_0_25px_3px_theme(colors.neon-cyan/20)] hover:scale-[1.03] group h-full"
                      variants={cardFadeInUp} 
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                    >
                      <div className="mb-4 p-3 bg-neutral-800 rounded-lg inline-block transition-colors duration-300 group-hover:bg-neutral-700/80">
                        <IconComponent className="w-8 h-8 text-neon-cyan transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-neon-cyan mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-300 text-sm mb-3 leading-relaxed flex-grow">
                        {item.description}
                      </p>
                      <motion.p 
                        className="text-xs text-sky-400/80 italic"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.4, duration: 0.4 }}
                      >
                        {item.benefit}
                      </motion.p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
          {/* 3. Vantagens Chave / USPs */}
          <motion.div 
            className="my-20 md:my-28 max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            variants={sectionFadeInUp} 
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-pink-500">
              A Diferença AILOOP: Inteligência e Flexibilidade a Seu Favor
            </h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={{ animate: { transition: { staggerChildren: 0.15 } } }} 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                {
                  iconName: "Target",
                  title: "Precisão Milimétrica, Custo-Benefício Imbatível",
                  text: "Invista apenas nas horas que você realmente precisa. Nossa IA otimiza cada etapa, especialistas humanos validam, e seu orçamento rende o máximo. Zero desperdício, impacto total."
                },
                {
                  iconName: "Rocket",
                  title: "Agilidade Exponencial, Qualidade Boutique",
                  text: "Um ecossistema de IAs e especialistas dedicados co-criando em tempo real. Entregas ultra-rápidas com o padrão de excelência AILOOP, sem freelancers."
                },
                {
                  iconName: "SlidersHorizontal",
                  title: "Seu Ritmo, Suas Regras, Total Transparência",
                  text: "Créditos válidos por 6 meses, use como e quando quiser. Solicite reajustes, aprove etapas e acompanhe cada minuto. Sua estratégia adaptada em tempo real."
                },
                {
                  iconName: "BrainCircuit",
                  title: "Inteligência Coletiva: IA Potencializa, Humano Lidera",
                  text: "Nossas IAs não substituem, elas amplificam o talento humano. Um complexo sistema de IA aprende e colabora, sempre sob a supervisão e estratégia de nossos especialistas."
                }
              ].map((usp) => {
                const IconComponent = {
                  Target,
                  Rocket,
                  SlidersHorizontal,
                  BrainCircuit
                }[usp.iconName as string];

                // Garante que sempre retornamos um elemento JSX ou null.
                if (!IconComponent) return null; 

                return (
                  <motion.div 
                    key={usp.title} 
                    className="bg-neutral-900 p-6 sm:p-8 rounded-xl border border-neutral-700/70 shadow-lg flex flex-col items-start text-left transition-all duration-300 ease-out hover:border-neon-purple/80 hover:shadow-[0_0_20px_3px_theme(colors.neon-purple/15)] h-full"
                    // variants={cardFadeInUp} // Removido temporariamente para depuração
                  >
                    <div className="mb-5 p-3 bg-neutral-800 rounded-lg inline-block transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-neon-purple" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-neon-purple mb-3">
                      {usp.title}
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {usp.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* 4. Arsenal em Ação / Serviços - A ser implementado */}

        </section>
        {/* FIM DA NOVA SEÇÃO Arsenal de Marketing & Fluxo AILOOP */}

        {/* Seção 7: USP */}
        <ComparativeAdvantageSection /> {/* NOVA SEÇÃO SUBSTITUINDO A ANTIGA USP */}
        
        {/* Seção 9: CTA Final */}
        <motion.section id="cta-final" className="relative z-10 w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-t from-ailoop-blue/15 via-brand-dark to-brand-dark mt-10" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }} variants={{ animate: { transition: { staggerChildren: 0.2 } } }} > <motion.h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple" variants={fadeInUp} > Pronto Para Ter o Futuro do Marketing ao Seu Alcance? </motion.h2> <motion.p className="font-sans text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-12" variants={fadeInUp} > Escolha seu pacote de horas AILOOP e comece a construir resultados extraordinários com flexibilidade total. Nossa equipe de ponta (humanos + IA) está pronta para impulsionar seu sucesso. </motion.p> <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center" variants={fadeInUp} > <motion.button className="font-sans px-10 py-5 bg-gradient-to-r from-neon-cyan via-sky-500 to-neon-purple text-brand-dark font-semibold rounded-lg text-lg sm:text-xl hover:from-neon-purple hover:via-sky-500 hover:to-neon-cyan transition-all duration-300 ease-in-out shadow-[0_0_20px_theme(colors.neon-cyan/0.5),_0_0_40px_theme(colors.neon-purple/0.3)] hover:shadow-[0_0_30px_theme(colors.neon-cyan/0.7),_0_0_60px_theme(colors.neon-purple/0.5)] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-brand-dark" whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 15 } }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById('planos-horas')?.scrollIntoView({ behavior: 'smooth' })} > Ver Pacotes de Horas </motion.button> <motion.a href="#contact" className="font-sans px-10 py-5 border-2 border-neon-purple text-neon-purple font-semibold rounded-lg text-lg sm:text-xl hover:bg-neon-purple/20 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:ring-offset-2 focus:ring-offset-brand-dark" whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 15 } }} whileTap={{ scale: 0.95 }} > Fale com Fremen </motion.a> </motion.div> </motion.section>

        {/* NOVA SEÇÃO DE VANTAGENS AILOOP INSERIDA AQUI */}
        <AiloopAdvantageSection />

        {/* Seção 4: Sua Equipe AILOOP Dedicada */}
        <section id="equipe-ailoop" className="w-full bg-brand-darker py-20 sm:py-28 px-4 font-inter relative z-10">
          {/* ... conteúdo da equipe ... */}
        </section>
    </div>
      <Footer />
    </>
  );
};

export default ServicosHorasPage; 