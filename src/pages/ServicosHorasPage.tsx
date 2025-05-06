import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, Zap, TrendingUp, Users, Brain, Package, Clock, LayoutDashboard, 
  Handshake, BarChart3, ShoppingCart, Hourglass, Users2, Eye, ShieldCheck, Sparkles, Settings2, 
  Search, Mic, Bot, LineChart, Megaphone, FileText, Filter, Palette, Shield, TrendingDown, 
  LockOpen, CheckSquare, RotateCcw, Lightbulb, MessageSquareText, ThumbsUp, Rocket, 
  BadgePercent, CalendarDays 
} from 'lucide-react';
import { cn } from '@/lib/utils'; // Assumindo que está em src/lib/utils.ts
import Navbar from '@/components/Navbar'; // Assumindo que está em src/components/Navbar.tsx
import Footer from '@/components/Footer'; // Assumindo que está em src/components/Footer.tsx

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
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
      { name: "EDCRED", role: "CEO & Founder", icon: ShieldCheck, color: "text-ailoop-blue", avatar: "https://i.pravatar.cc/150?u=edcred" },
    ],
    directors: [
      { name: "VINICIUS BENI", role: "Estratégista Sênior", icon: Brain, avatar: "https://i.pravatar.cc/150?u=viniciusbeni" },
      { name: "BRUNO PADRIN", role: "Engine MKT", icon: Settings2, avatar: "https://i.pravatar.cc/150?u=brunopadrin" },
      { name: "RENAN S.", role: "Administração Geral", icon: Users, avatar: "https://i.pravatar.cc/150?u=renans" },
    ],
    specialists: [
      { name: "RAFAELA MARLINE", role: "DEV", icon: Zap, avatar: "https://i.pravatar.cc/150?u=rafaelamarline" },
      { name: "RODRIGO BRADESON", role: "Gestor de Tráfego Sênior", icon: TrendingUp, avatar: "https://i.pravatar.cc/150?u=rodrigobradeson" },
      { name: "JADIEL CAMPOS", role: "Copywriter", icon: Mic, avatar: "https://i.pravatar.cc/150?u=jadielcampos" },
      { name: "DANIEL MARTINEZ", role: "Funil All-in-One", icon: Filter, avatar: "https://i.pravatar.cc/150?u=danielmartinez" },
    ]
  };

  const aiTeam = [
    {
      name: "Fremen",
      role: "Conector Admin-Cliente & Onboarding AI Specialist",
      description: "Ele ajuda o contato do administrador junto do time com o cliente. Ele gera onboard ou seja o primeiro contato entre time ativo e cliente. Eleuda nas solicitações do cliente, e o cliente pode se comunicar com ele dentro do Whatsapp por texto e voz. Ele anota as novas demandas, atualiza quando o profissional iniciou em conjunto com a IAs iniciou a tarefa e quantas horas prevista seria aquela tarefa, para o cliente confirmar ou não. Ele faz isso em todas as etapas. Após receber a demanda do cliente ele analisa por 30 alguns minutos em horario comercial em conjunto com equipe humana. Define quantas horas ou minutos serão utilizados e aguarda resposta. Tudo isso feito em menos de 1h das 08h as 22h sendo em horario comercial a revisão da solicitação é feita em 10 a 15 minutos.",
      color: "text-yellow-400", 
      icon: MessageSquareText 
    },
    {
      name: "Mavelito",
      role: "Estrategista de IA Rabugento & Profissional",
      description: "Um personagem meio rabugento mais muito profissional. Ele é uma IAs que intensifica a estratégia do projeto. Ele não revê somente uma vez logo no inicio. Ele cria a estratégia do zero ou adapta em conjunto com variáveis existentes na empresa. Ele faz 5 versões completas, limpas e de altas chances de conversão, realiza as 5 e gera 1 opção para o Estratégista analisar. Não é nem perto de pegar o texto e aplicar em uma inteligência artificial de texto normal. Após analisarmos profundamente, e em etapas humanas talvez migrando para partes mais complexas como revisão e atribuição de novos cargos do time para essa parte. Isso tudo a IA Mavelito coordena, sugestiona, revisa e aplica sempre em conjunto com uma manipulação humana.",
      color: "text-red-500", 
      icon: Brain 
    },
    {
      name: "Dramontin",
      role: "Gestor de Tráfego Cybernético Focado em Resultados",
      description: "Gestor de tráfego cybernético que não liga muito para traqueamento. A diversão de Dramontin é ver as vendas entrando no dashboard final. Dramontin antes de ser Gestor de Tráfego Senior Cybernético, ele era um grande estrategista e com especializações em neuromarketing. Ele adapta na Gestão de Tráfego suas expertises de personas de comprar e estratégias de hierarquias de campanhas que aumentam as chances de até no inicio já converter. Ele pode ser melhor até mesmo que 10 gestores seniors juntos. Quem realiza a aplicação final é um humano gestor de tráfego senior também.",
      color: "text-orange-400", 
      icon: TrendingUp 
    },
    {
      name: "Piraq",
      role: "Gestor de Funis Estratégico e Vigilante",
      description: "Um gestor de funis estratégico. Ele cuida de todas as etapas dos funis sinalizando com alertas de dispositivos dos envolvidos nos projetos, humanos e IAs, são alertas de oportunidade, ajustes de rota, designer e redesigner, ele avisa que iniciou uma nova simulação de funil de acordo com o que já está ativo que foi ele quem criou também, e solicita aprovação para editar variáveis que podem ser aprovadas pelos Estratégistas Humanos diretamente sem consentimento do cliente ou pode ser condicionado ao cliente aprovar também.",
      color: "text-teal-400", 
      icon: Filter 
    },
    {
      name: "Verlini",
      role: "Copywriter Sênior com Alma de Escritor Clássico",
      description: "Copy acima da media com a cabeça de escritor antigo. Ele tem paciência em revisar e gerar cenários disruptivos de copy utilizando AIDA com IA. Ele é bem engraçado. É senior e interage com todos os setores para entender complexidades. Ele também gera cenários para tentar a melhor aplicação possível. Tem treinamento de máquina contínua, fica estudando melhorias e atualizações de links.",
      color: "text-indigo-400", 
      icon: Mic 
    },
    {
      name: "Rororomiro",
      role: "Super Administrador e Orquestrador de IAs",
      description: "Administrador que controla todos as IAs, todos alertas, todos controles de notificações. Ele revisa estratégias em conjunto com o Estratégista e gera um documento MASTER que serve como guia para todos humanos e inteligencias artificias em anexo no time. Ele controla tudo e reforça a inteligencia de todas ações em 2x. Diminuindo drasticamente a margem de erro. É uma das estrelas do nosso time. Ele simula tudo que está acontecendo no negocio do cliente, como funis, campanhas, copy, e fica treinando em modo de aprendizagem, quando ele passa da fase de aprendizagem, ele simula a operação em background sem ser aplicado ao negocio do cliente e verifica as oportunidades, upgrades etc...",
      color: "text-green-400", 
      icon: ShieldCheck 
    },
    {
      name: "Cof",
      role: "Programador IA Multi-Frequência Premiado",
      description: "Ele é um programador IA que utiliza 5 frequências de contextos. As maiores e mais bem aplicadas do mundo. OpenAI, Claude, Gemini, TourB e IALoop. Desenvolve websites, soluções web e desktop, apps, saas e muitas outras aplicações. Já recebeu prêmios de tecnologia IA para desenvolvimento code.",
      color: "text-purple-400", 
      icon: Zap 
    }
  ];

  const aiTeamDataForLayout = {
    left: aiTeam.slice(0, 3), // As primeiras 3 IAs à esquerda
    right: aiTeam.slice(3, 6), // As próximas 3 IAs à direita
    centerBottom: aiTeam.slice(6) // A última IA (Cof) centralizada abaixo, ou pode ser ajustado
  };

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

  const benefits = [
    { 
      icon: RotateCcw,
      title: "Zero Desperdício: Use Cada Minuto", 
      description: "Suas horas AILOOP acumulam por até 6 meses (ou mais, dependendo do pacote), garantindo que seu investimento seja totalmente aproveitado.",
      color: "text-green-400"
    },
    { 
      icon: LockOpen, 
      title: "Sem Contratos Mensais: Total Liberdade", 
      description: "Diga adeus às mensalidades fixas. Com AILOOP, você tem controle total do seu investimento, ativando serviços conforme sua real necessidade.",
      color: "text-sky-400"
    },
    { 
      icon: Zap,
      title: "Acesso On-Demand à Expertise Total", 
      description: "A equipe certa (humanos + IA), na hora certa. Acesso direto a especialistas para cada demanda específica do seu projeto.",
      color: "text-neon-purple"
    },
    { 
      icon: CheckSquare,
      title: "Resultados Mensuráveis e Transparência", 
      description: "Acompanhe o uso de cada hora e o progresso dos projetos através do seu painel. Foco total em performance e ROI com clareza absoluta.",
      color: "text-ailoop-blue"
    },
  ];

  const testimonials = [
    {
      quote: "A flexibilidade dos pacotes de horas da AILOOP transformou nossa forma de gerenciar o marketing. Finalmente temos controle e resultados!",
      name: "Júlia Santos",
      company: "InovaTech Soluções",
      avatar: "https://i.pravatar.cc/100?u=julia"
    },
    {
      quote: "O acesso à equipe de especialistas e às IAs é um diferencial incrível. Nossos projetos nunca avançaram tão rápido e com tanta assertividade.",
      name: "Carlos Andrade",
      company: "Startup Visionária",
      avatar: "https://i.pravatar.cc/100?u=carlos"
    },
    {
      quote: "Poder acionar a AILOOP sob demanda, sem a pressão de um contrato mensal, foi decisivo para nós. A qualidade da entrega é sempre impecável.",
      name: "Fernanda Lima",
      company: "E-commerce Crescer",
      avatar: "https://i.pravatar.cc/100?u=fernanda"
    },
  ];
  
  // Duration Toggle Component (Estilo NinjaPromo)
  const DurationToggle: React.FC<{
    label: string;
    tier: 'monthly' | 'tri_monthly' | 'annual';
    activeTier: 'monthly' | 'tri_monthly' | 'annual';
    onClick: () => void;
    discount?: string;
  }> = ({ label, tier, activeTier, onClick, discount }) => (
    <motion.button
      onClick={onClick}
      className={cn(
        "px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ease-out relative overflow-hidden transform",
        activeTier === tier
          ? "bg-white text-brand-dark shadow-md scale-105" // Estilo Ativo da NinjaPromo
          : "bg-neutral-700/60 text-neutral-300 hover:bg-neutral-600/80 hover:text-white"
      )}
      whileHover={{ y: activeTier !== tier ? -2 : 0 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
      {discount && ( // Exibe o desconto sempre, mas com estilo diferente para o ativo
         <span className={cn(
             "ml-1.5 text-xs font-semibold",
             activeTier === tier ? "text-green-700" : "text-green-400"
         )}>
             {discount}
         </span>
      )}
       {activeTier === tier && ( // Indicador de aba ativa (barra inferior)
          <motion.div 
            className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-neon-cyan via-ailoop-blue to-neon-purple"
            layoutId="activeToggleIndicatorServicos" // layoutId único para este grupo de toggles
          />
        )}
    </motion.button>
  );


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
            {howItWorksSteps.map((step, index) => ( <motion.div key={index} className="bg-neutral-800/50 border border-neutral-700/60 rounded-xl p-6 text-center flex flex-col items-center shadow-lg hover:shadow-neon-purple/20 transition-all duration-300 transform hover:-translate-y-1.5" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }} transition={{delay: index * 0.1}} > <div className={cn("mb-5 p-4 bg-gradient-to-br rounded-full shadow-inner shadow-black/50 inline-block", step.color.replace('text-', 'from-').replace('-400', '/70').replace('-500', '/70').replace('-cyan', '-cyan/70').replace('-purple', '-purple/70').replace('-blue', '-blue/70'), step.color.replace('text-', 'to-').replace('-400', '/40').replace('-500', '/40').replace('-cyan', '-cyan/40').replace('-purple', '-purple/40').replace('-blue', '-blue/40'))}> <step.icon className={cn("w-8 h-8", step.color, "opacity-90")} /> </div> <h4 className={cn("font-serif text-lg font-semibold mb-2", step.color)}>{step.title}</h4> <p className="font-sans text-sm text-neutral-400 leading-relaxed">{step.description}</p> </motion.div> ))}
          </div>
        </section>

        {/* Texto Explicativo do Processo e Garantia */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16 px-4"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-sans text-lg sm:text-xl text-neutral-200 leading-relaxed mb-6">
            Quando você faz uma solicitação, nossas IAs analisam e propõem a equipe ideal de especialistas (humanos e IAs), a estimativa de horas e a margem de erro para o seu projeto.
          </p>
          <p className="font-serif text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-green-400 font-semibold p-4 border-2 border-neon-cyan/50 rounded-lg shadow-lg shadow-neon-cyan/20 inline-block">
            E o mais importante: <strong className="block sm:inline mt-1 sm:mt-0">Se a solução proposta não funcionar, as horas NÃO são contabilizadas em seu pacote. Simples assim.</strong>
          </p>
        </motion.div>

        {/* NOVA ESTRUTURA DA EQUIPE - COM IAs NAS LATERAIS */}
        <div className="relative flex flex-col items-center w-full px-4">
          {/* Container Principal da Equipe: Humanos no Centro, IAs nas Laterais */}
          <div className="relative w-full max-w-7xl mx-auto flex justify-center items-start">
            {/* Coluna para IAs da Esquerda (Apenas em telas maiores) */}
            <div className="hidden lg:flex flex-col items-center space-y-10 mr-8 xl:mr-16 mt-24 sticky top-24 self-start">
              {aiTeamDataForLayout.left.map((robot, index) => (
                <motion.div
                  key={robot.name + "-side-left"}
                  className="flex flex-col items-center text-center group w-32"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 + 0.5 }} // Atraso para aparecerem depois dos humanos
                >
                  <div className={cn(
                    "relative w-24 h-24 rounded-full flex items-center justify-center border-2 shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out transform group-hover:scale-110",
                    robot.color.replace('text-', 'border-'),
                    robot.color.replace('text-', 'shadow-').replace('-400', '-500/20').replace('-500', '-600/20')
                  )}>
                    <div className={cn("absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300", robot.color.replace('text-', 'bg-'))}></div>
                    <robot.icon className={cn("w-12 h-12 relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300", robot.color)} />
                  </div>
                  <h5 className={cn("font-serif text-xs font-bold mt-2", robot.color)}>{robot.name}</h5>
                  <p className="text-xs text-neutral-400 leading-tight">{robot.role.split('&')[0].trim()}</p> {/* Mostra apenas a primeira parte do role para economizar espaço */}
                </motion.div>
              ))}
            </div>

            {/* Centro: Estrutura Hierárquica dos Humanos */}
            <div className="flex-grow max-w-3xl">
              {/* CEO */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-10 md:mb-12 flex flex-col items-center w-full"
              >
                {humanTeam.ceo.map(member => (
                  <div key={member.name} className="flex flex-col items-center text-center">
                    <div className="relative p-1 bg-gradient-to-br from-ailoop-blue via-sky-500 to-cyan-400 rounded-full shadow-xl shadow-ailoop-blue/40">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-brand-dark object-cover"
                      />
                    </div>
                    <h4 className={cn("font-serif text-xl sm:text-2xl font-bold mt-4", member.color)}>{member.name}</h4>
                    <p className="font-sans text-sm sm:text-base text-neutral-300">{member.role}</p>
                  </div>
                ))}
              </motion.div>

              {/* Linha de Conexão Simples (Vertical) */}
              <motion.div 
                className="h-12 md:h-16 w-1 bg-neutral-700/70 mx-auto rounded-full"
                variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}
              ></motion.div>

              {/* Diretores */}
              <motion.div
                initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                className="mb-10 md:mb-12 w-full max-w-4xl mx-auto"
                variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
                  {humanTeam.directors.map((member, index) => (
                    <motion.div 
                      key={member.name} 
                      className="flex flex-col items-center text-center group"
                      variants={fadeInUp}
                    >
                      <div className="relative p-0.5 bg-neutral-700/80 rounded-full group-hover:bg-gradient-to-br group-hover:from-neon-cyan/80 group-hover:via-sky-500/80 group-hover:to-ailoop-blue/80 transition-all duration-300 shadow-lg group-hover:shadow-neon-cyan/30">
                        <img 
                          src={member.avatar} alt={member.name} 
                          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-brand-dark object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h5 className="font-sans text-lg sm:text-xl font-semibold mt-3 mb-0.5 text-neutral-100 group-hover:text-neon-cyan transition-colors duration-300">{member.name}</h5>
                      <p className="font-sans text-xs sm:text-sm text-neutral-400">{member.role}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Linha de Conexão Simples */}
              <motion.div 
                className="h-10 md:h-12 w-px bg-neutral-700/50 mx-auto mb-6 md:mb-8"
                variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}
              ></motion.div>
              
              {/* Especialistas */}
              <motion.div 
                viewport={{ once: true, amount: 0.1 }} className="w-full"
                initial="initial" whileInView="animate" variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
              >
                <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-6 md:mb-8 text-center text-sky-400/80 group-hover:text-sky-400 transition-colors duration-300">
                  Nossa Equipe de Especialistas Dedicados
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 max-w-5xl mx-auto">
                  {humanTeam.specialists.map((member, index) => (
                    <motion.div 
                      key={member.name} 
                      className="flex flex-col items-center text-center group"
                      variants={fadeInUp}
                    >
                      <div className="relative p-0.5 bg-neutral-800/90 rounded-full group-hover:bg-gradient-to-br group-hover:from-sky-600/70 group-hover:to-teal-500/70 transition-all duration-300 shadow-md group-hover:shadow-sky-500/30">
                        <img 
                          src={member.avatar} alt={member.name} 
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-brand-dark object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h5 className="font-sans text-md sm:text-lg font-semibold mt-3 mb-0.5 text-neutral-200 group-hover:text-sky-400 transition-colors duration-300">{member.name}</h5>
                      <p className="font-sans text-xs sm:text-sm text-neutral-400">{member.role}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div> {/* Fim do Centro: Humanos */}

            {/* Coluna para IAs da Direita (Apenas em telas maiores) */}
            <div className="hidden lg:flex flex-col items-center space-y-10 ml-8 xl:ml-16 mt-24 sticky top-24 self-start">
              {aiTeamDataForLayout.right.map((robot, index) => (
                 <motion.div
                  key={robot.name + "-side-right"}
                  className="flex flex-col items-center text-center group w-32"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 + 0.5 }} // Atraso para aparecerem depois dos humanos
                >
                  <div className={cn(
                    "relative w-24 h-24 rounded-full flex items-center justify-center border-2 shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out transform group-hover:scale-110",
                    robot.color.replace('text-', 'border-'),
                    robot.color.replace('text-', 'shadow-').replace('-400', '-500/20').replace('-500', '-600/20')
                  )}>
                    <div className={cn("absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300", robot.color.replace('text-', 'bg-'))}></div>
                    <robot.icon className={cn("w-12 h-12 relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300", robot.color)} />
                  </div>
                  <h5 className={cn("font-serif text-xs font-bold mt-2", robot.color)}>{robot.name}</h5>
                  <p className="text-xs text-neutral-400 leading-tight">{robot.role.split('&')[0].trim()}</p> {/* Mostra apenas a primeira parte do role */}
                </motion.div>
              ))}
            </div>

          </div> {/* Fim do Container Principal da Equipe */}
           
          {/* IA Centralizada Abaixo (Opcional, para Cof ou outras) - Apenas em telas maiores para não sobrecarregar */}
          <div className="hidden lg:flex flex-col items-center mt-10 md:mt-12 w-full">
            {aiTeamDataForLayout.centerBottom.map((robot, index) => (
              <motion.div
                  key={robot.name + "-side-center-bottom"}
                  className="flex flex-col items-center text-center group w-32"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 + 0.7 }} 
                >
                  <div className={cn(
                    "relative w-24 h-24 rounded-full flex items-center justify-center border-2 shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out transform group-hover:scale-110",
                    robot.color.replace('text-', 'border-'),
                    robot.color.replace('text-', 'shadow-').replace('-400', '-500/20').replace('-500', '-600/20')
                  )}>
                    <div className={cn("absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300", robot.color.replace('text-', 'bg-'))}></div>
                    <robot.icon className={cn("w-12 h-12 relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300", robot.color)} />
                  </div>
                  <h5 className={cn("font-serif text-xs font-bold mt-2", robot.color)}>{robot.name}</h5>
                  <p className="text-xs text-neutral-400 leading-tight">{robot.role.split('&')[0].trim()}</p>
                </motion.div>
            ))}
          </div>
        </div>
        {/* FIM DA NOVA ESTRUTURA DA EQUIPE */}

        {/* SEÇÃO DE DESCRIÇÃO DETALHADA DAS IAs - CARDS DE VIDRO */}
        <motion.div
          className="w-full max-w-6xl mx-auto mt-16 md:mt-24 py-10 px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h3 
            className="font-serif text-2xl sm:text-3xl font-semibold mb-10 md:mb-12 text-center text-neutral-100"
            variants={fadeInUp}
          >
            Conheça em Detalhe Nossos Agentes de IA
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {aiTeam.map((robot, index) => (
              <motion.div
                key={robot.name + "-description-card"}
                className="bg-black/30 backdrop-blur-md border border-neutral-700/80 rounded-xl p-6 shadow-xl hover:border-neutral-500/80 transition-colors duration-300 min-h-[250px] flex flex-col"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center mb-4">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border-2 mr-3", robot.color.replace('text-', 'border-'))}>
                    <robot.icon className={cn("w-5 h-5", robot.color)} />
                  </div>
                  <h5 className={cn("font-serif text-xl font-bold", robot.color)}>{robot.name}</h5>
                </div>
                {/* <p className={cn("font-sans text-xs uppercase tracking-wider mb-3 font-medium", robot.color, "opacity-70")}>{robot.role}</p> */}
                <p className="font-sans text-sm text-neutral-300 leading-relaxed flex-grow">
                  {robot.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* FIM DA SEÇÃO DE DESCRIÇÃO DAS IAs */}

        {/* Força-Tarefa de IA (Robôs) - DESCRIÇÕES DETALHADAS EM CARDS DE VIDRO (Próxima Etapa) */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-10 md:mt-12 pt-6 w-full"
        >
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-ailoop-blue"
            variants={fadeInUp}
          >
            IAs AILOOP Manager: Nossa Força-Tarefa Inteligente
          </motion.h2>
          
          {/* Textos explicativos sobre IAs - Mantidos como antes */}
          <motion.div 
            className="max-w-3xl mx-auto space-y-5 mb-10 md:mb-12 text-center px-4"
            variants={fadeInUp}
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="font-sans text-md sm:text-lg text-neutral-200 leading-relaxed bg-neutral-800/40 p-4 rounded-lg border border-neutral-700/60 shadow-md">
              Todas as ações de todas as IAs são <strong className={cn(aiTeam[0]?.color || 'text-neon-cyan', "font-semibold")}>manipuladas e supervisionadas por humanos</strong>. Não existe aplicação totalmente automática, garantindo assim um nível superior de qualidade e personalização em cada entrega.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed border border-neutral-700/80 bg-neutral-800/30 p-4 rounded-lg shadow-inner">
              <strong className={cn(aiTeam[1]?.color || 'text-sky-400', "font-semibold block mb-1")}>Nota de Transparência:</strong> Você não utiliza manualmente esses Agentes IA. Eles são <strong className={cn(aiTeam[1]?.color || 'text-sky-400', "font-semibold")}>componentes integrais da equipe AILOOP</strong> e contribuem para o ecossistema de aplicação e solução de marketing digital, automação e implementações de inteligência artificial, tanto nos Planos Fixos como em Planos de Horas. Sua configuração de preferências de aprovação, definida no onboarding, dita como e quando nossa equipe (incluindo a atuação das IAs) interage para validações.
            </p>
          </motion.div>

          {/* Grid de Círculos para IAs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-8 md:gap-x-5 md:gap-y-10 max-w-6xl mx-auto justify-items-center">
            {aiTeam.map((robot, index) => (
              <motion.div 
                key={robot.name} 
                className="flex flex-col items-center text-center group w-32 sm:w-36 md:w-40"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }} 
                transition={{delay: index * 0.05}}
              >
                <div 
                  className={cn(
                    "relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center border-2 shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out transform group-hover:scale-110",
                    robot.color.replace('text-', 'border-'),
                    robot.color.replace('text-', 'shadow-').replace('-400', '-500/70').replace('-500', '-600/70'), // Border color from text color
                    robot.color.replace('text-', 'shadow-').replace('-400', '-500/30').replace('-500', '-600/30') // Shadow color from text color
                  )}
                >
                  <div className={cn("absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300", robot.color.replace('text-', 'bg-'))}></div> {/* Inner glow */}
                  <robot.icon className={cn("w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300", robot.color)} />
                </div>
                <h5 className={cn("font-serif text-sm sm:text-md font-bold mt-3", robot.color)}>{robot.name}</h5>
                 {/* A descrição detalhada pode ser um tooltip ou modal no futuro. Por agora, o foco é no visual da "equipe". */}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Seção 5: Serviços Disponíveis */}
        <section id="servicos-disponiveis" className="w-full max-w-6xl mx-auto py-16 sm:py-24 px-4 relative z-10">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.2 }} className="text-center mb-12 md:mb-16" >
            <motion.h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple" variants={fadeInUp} > Ative Sua Estratégia: Serviços AILOOP ao Seu Comando </motion.h2>
            <motion.p className="font-sans text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto" variants={fadeInUp} > Com suas horas AILOOP, você pode solicitar um arsenal de soluções de marketing. Ative o que precisar, quando precisar. </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8"> {availableServices.map((service, index) => ( <motion.div key={index} className="bg-neutral-800/40 border border-neutral-700/60 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:border-transparent hover:shadow-2xl transition-all duration-300 ease-out group hover:bg-gradient-to-br hover:from-neutral-800/60 hover:via-neutral-900/70 hover:to-brand-dark transform hover:-translate-y-1.5" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }} transition={{delay: index * 0.05}} > <div className={cn("p-3.5 mb-4 rounded-full bg-gradient-to-br from-neutral-700/60 to-neutral-800/40 border border-neutral-600/70 group-hover:scale-110 group-hover:border-current transition-all duration-300", service.color.replace("text-","group-hover:border-"))}> <service.icon className={cn("w-7 h-7", service.color, "transition-colors duration-300 group-hover:opacity-100 opacity-80")} /> </div> <h4 className={cn("font-serif text-lg font-semibold mb-2", service.color, "group-hover:text-white transition-colors duration-300")}>{service.name}</h4> <p className="font-sans text-sm text-neutral-400 leading-relaxed flex-grow">{service.description}</p> </motion.div> ))} </div>
        </section>

        {/* Seção 6: Benefícios */}
        <section id="beneficios-ailoop" className="w-full bg-neutral-900/40 py-16 sm:py-24 relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.2 }} className="text-center mb-12 md:mb-16" >
              <motion.h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple" variants={fadeInUp} > A Vantagem AILOOP: Marketing Inteligente, Sem Amarras </motion.h2>
              <motion.p className="font-sans text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto" variants={fadeInUp} > Descubra por que nosso modelo de banco de horas é a evolução que seu negócio precisa. </motion.p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits.map((benefit, index) => ( <motion.div key={index} className="bg-brand-dark border border-neutral-700/80 rounded-xl p-6 flex flex-col items-start text-left shadow-xl hover:shadow-ailoop-blue/25 transition-all duration-300 transform hover:scale-[1.02] hover:border-ailoop-blue/70" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }} transition={{delay: index * 0.1}} > <div className={cn("p-3.5 mb-5 rounded-lg bg-gradient-to-br inline-block shadow-md", benefit.color.replace("text-","from-").replace("-400","/70").replace("-500","/70").replace("-cyan","-cyan/70").replace("-purple","-purple/70").replace("-blue","-blue/70"), benefit.color.replace("text-","to-").replace("-400","/40").replace("-500","/40").replace("-cyan","-cyan/40").replace("-purple","-purple/40").replace("-blue","-blue/40"))}> <benefit.icon className={cn("w-7 h-7", benefit.color)} /> </div> <h4 className={cn("font-serif text-xl font-semibold mb-2", benefit.color)}>{benefit.title}</h4> <p className="font-sans text-sm text-neutral-300 leading-relaxed">{benefit.description}</p> </motion.div> ))} </div>
          </div>
        </section>
        
        {/* Seção 7: USP */}
        <motion.section id="usp" className="relative z-10 w-full max-w-6xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={{ animate: { transition: { staggerChildren: 0.2 } } }} > <motion.h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-pink-500" variants={fadeInUp} > Agências Tradicionais e Contratos Engessados? </motion.h2> <motion.p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-neutral-100" variants={fadeInUp} > Com AILOOP, <span className="text-neon-cyan">Você Dita o Ritmo</span> e o Investimento. </motion.p> <motion.div className="grid md:grid-cols-2 gap-8 sm:gap-12 text-left max-w-4xl mx-auto" variants={fadeInUp} > <div className="bg-neutral-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-neutral-700/70 shadow-xl hover:border-neon-cyan/80 transition-all duration-300"> <h3 className="font-sans text-xl sm:text-2xl font-semibold text-neon-cyan mb-3">Modelo Tradicional Inflexível</h3> <ul className="space-y-2 text-neutral-300 font-sans text-sm sm:text-base"> <li className="flex items-start"><TrendingDown className="w-5 h-5 mr-3 mt-1 text-red-500 flex-shrink-0" /><span>Contratos de longo prazo e mensalidades fixas, mesmo sem demanda total.</span></li> <li className="flex items-start"><TrendingDown className="w-5 h-5 mr-3 mt-1 text-red-500 flex-shrink-0" /><span>Escopo limitado e dificuldade para escalar ou reduzir serviços rapidamente.</span></li> <li className="flex items-start"><TrendingDown className="w-5 h-5 mr-3 mt-1 text-red-500 flex-shrink-0" /><span>Equipes generalistas com possível desalinhamento estratégico específico.</span></li> <li className="flex items-start"><TrendingDown className="w-5 h-5 mr-3 mt-1 text-red-500 flex-shrink-0" /><span>Menor transparência no uso efetivo do investimento.</span></li> </ul> </div> <div className="bg-neutral-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-neutral-700/70 shadow-xl hover:border-neon-purple/80 transition-all duration-300"> <h3 className="font-sans text-xl sm:text-2xl font-semibold text-neon-purple mb-3">AILOOP: Flexibilidade Inteligente</h3> <ul className="space-y-2 text-neutral-300 font-sans text-sm sm:text-base"> <li className="flex items-start"><Rocket className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" /><span>Pagamento único por pacotes de horas, use quando e como precisar.</span></li> <li className="flex items-start"><Rocket className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" /><span>Acesso sob demanda a uma equipe completa (Humanos + IA) altamente especializada.</span></li> <li className="flex items-start"><Rocket className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" /><span>Total controle e transparência sobre o investimento e a alocação de horas.</span></li> <li className="flex items-start"><Rocket className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" /><span>Escalabilidade dinâmica para atender picos de demanda ou projetos específicos.</span></li> </ul> </div> </motion.div> </motion.section>
        
        {/* Seção 8: Prova Social */}
        <motion.section id="prova-social" className="relative z-10 w-full max-w-6xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={{ animate: { transition: { staggerChildren: 0.2 } } }} > <motion.h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-ailoop-blue" variants={fadeInUp} > Quem Confia na AILOOP, <span className="block sm:inline mt-2 sm:mt-0">Transforma Resultados.</span> </motion.h2> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {testimonials.map((testimonial, index) => ( <motion.div key={index} className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-neutral-700/60 flex flex-col items-center text-center hover:shadow-ailoop-blue/25 hover:border-ailoop-blue/70 transition-all duration-300 transform hover:scale-105" variants={fadeInUp} > <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-2 border-neon-cyan shadow-md" /> <p className="font-sans text-neutral-300 italic mb-4 text-sm sm:text-base leading-relaxed">"{testimonial.quote}"</p> <h3 className="font-sans text-lg font-semibold text-neon-cyan">{testimonial.name}</h3> <p className="font-sans text-sm text-neutral-400">{testimonial.company}</p> </motion.div> ))} </div> <motion.div className="mt-16 sm:mt-24 text-center" variants={fadeInUp}> <h3 className="font-sans text-xl sm:text-2xl font-semibold text-neutral-400 mb-8">Empresas que já aceleram com AILOOP:</h3> <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"> <Lightbulb className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-500 hover:text-neon-cyan transition-colors" aria-label="Logo Empresa 1" /> <MessageSquareText className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-500 hover:text-neon-purple transition-colors" aria-label="Logo Empresa 2" /> <ThumbsUp className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-500 hover:text-sky-400 transition-colors" aria-label="Logo Empresa 3" /> <Shield className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-500 hover:text-pink-500 transition-colors" aria-label="Logo Empresa 4" /> </div> </motion.div> </motion.section>
        
        {/* Seção 9: CTA Final */}
        <motion.section id="cta-final" className="relative z-10 w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-t from-ailoop-blue/15 via-brand-dark to-brand-dark mt-10" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }} variants={{ animate: { transition: { staggerChildren: 0.2 } } }} > <motion.h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple" variants={fadeInUp} > Pronto Para Ter o Futuro do Marketing ao Seu Alcance? </motion.h2> <motion.p className="font-sans text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-12" variants={fadeInUp} > Escolha seu pacote de horas AILOOP e comece a construir resultados extraordinários com flexibilidade total. Nossa equipe de ponta (humanos + IA) está pronta para impulsionar seu sucesso. </motion.p> <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center" variants={fadeInUp} > <motion.button className="font-sans px-10 py-5 bg-gradient-to-r from-neon-cyan via-sky-500 to-neon-purple text-brand-dark font-semibold rounded-lg text-lg sm:text-xl hover:from-neon-purple hover:via-sky-500 hover:to-neon-cyan transition-all duration-300 ease-in-out shadow-[0_0_20px_theme(colors.neon-cyan/0.5),_0_0_40px_theme(colors.neon-purple/0.3)] hover:shadow-[0_0_30px_theme(colors.neon-cyan/0.7),_0_0_60px_theme(colors.neon-purple/0.5)] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-brand-dark" whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 15 } }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById('planos-horas')?.scrollIntoView({ behavior: 'smooth' })} > Ver Pacotes de Horas </motion.button> <motion.a href="#contact" className="font-sans px-10 py-5 border-2 border-neon-purple text-neon-purple font-semibold rounded-lg text-lg sm:text-xl hover:bg-neon-purple/20 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:ring-offset-2 focus:ring-offset-brand-dark" whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 15 } }} whileTap={{ scale: 0.95 }} > Fale com um Estrategista </motion.a> </motion.div> </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default ServicosHorasPage;