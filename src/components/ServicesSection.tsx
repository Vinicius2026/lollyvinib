import React from 'react';
import { AnimatedButton } from '@/components/animated/AnimatedButton';
import { MessageSquare, Users, FileText, Cpu, Database, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion/config';

// Definir variantes do container para stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Atraso entre cada card
      delayChildren: 0.1 // Atraso antes do primeiro card começar
    }
  }
};

// Variante para o item (reutilizando a existente)
const itemVariants = fadeInUp;

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-transition bg-gradient-to-b from-ailoop-blue to-ailoop-dark-blue py-24 px-4 relative overflow-hidden">
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
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 relative">
          Serviços <span className="text-gradient">Principais</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-ailoop-neon-blue via-ailoop-purple to-ailoop-pink"></div>
        </h2>
        
        {/* Aplicar motion.div ao container do grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Animar quando 10% visível
        >
          {/* Mapear serviços e aplicar motion.div a cada card */}
          {/* Card 1 - IA Agente */}
          <motion.div variants={itemVariants} className="service-card group relative">
            <div className="mb-6">
              <div className="w-14 h-14 bg-ailoop-neon-blue/20 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <MessageSquare className="w-7 h-7 text-ailoop-neon-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">IA Agente Assistente WhatsApp</h3>
            </div>
            
            <ul className="text-gray-300 mb-6 space-y-1">
              <li className="flex items-start">
                <span className="text-ailoop-neon-blue mr-2">•</span>
                <span>Agente Humanizado</span>
              </li>
              <li className="flex items-start">
                <span className="text-ailoop-neon-blue mr-2">•</span>
                <span>Faz atendimento</span>
              </li>
              <li className="flex items-start">
                <span className="text-ailoop-neon-blue mr-2">•</span>
                <span>Envia informações com links</span>
              </li>
              <li className="flex items-start">
                <span className="text-ailoop-neon-blue mr-2">•</span>
                <span>Faz cálculos informando</span>
              </li>
              <li className="flex items-start">
                <span className="text-ailoop-neon-blue mr-2">•</span>
                <span>Compara produtos</span>
              </li>
              <li className="flex items-start">
                <span className="text-ailoop-neon-blue mr-2">•</span>
                <span>Sugestiona produtos</span>
              </li>
              <li className="flex items-start">
                <span className="text-ailoop-neon-blue mr-2">•</span>
                <span>Faz agendamentos</span>
              </li>
              <li className="flex items-start">
                <span className="text-ailoop-neon-blue mr-2">•</span>
                <span>Realiza a venda</span>
              </li>
              <li className="flex items-start">
                <span className="text-ailoop-neon-blue mr-2">•</span>
                <span>Lembra da conversa realizada</span>
              </li>
              <li className="flex items-start">
                <span className="text-ailoop-neon-blue mr-2">•</span>
                <span>Entende texto, voz e imagem</span>
              </li>
              <li className="flex items-start">
                <span className="text-ailoop-neon-blue mr-2">•</span>
                <span>Limite mensal de 10 mil mensagens</span>
              </li>
            </ul>
            
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="pricing-box group">
                <p className="text-sm text-gray-400 relative z-10">Implementação</p>
                <p className="price-highlight text-xl text-ailoop-neon-blue relative z-10">R$1.500</p>
              </div>
              <div className="pricing-box group">
                <p className="text-sm text-gray-400 relative z-10">Mensalidade</p>
                <p className="price-highlight text-xl text-ailoop-neon-blue relative z-10">R$99</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <AnimatedButton 
                className="bg-ailoop-purple text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 ease-out hover:bg-purple-600 hover:shadow-[0_0_15px_4px] hover:shadow-purple-500/40"
                customWhileHover={{ scale: 1.03 }}
              >
                Testar Agente
              </AnimatedButton>
            </div>
            
            {/* Fractured corner decoration */}
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t border-r border-ailoop-neon-blue/30 rounded-tr-lg"></div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b border-l border-ailoop-neon-blue/30 rounded-bl-lg"></div>
          </motion.div>
          
          {/* Card 2 - Gestão de Tráfego */}
          <motion.div variants={itemVariants} className="service-card group">
            <div className="mb-6">
              <div className="w-14 h-14 bg-ailoop-purple/20 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <Users className="w-7 h-7 text-ailoop-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Gestão de Tráfego com IA</h3>
            </div>
            
            <div className="mb-6 space-y-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden group-hover:border-ailoop-purple/30">
                <div className="absolute inset-0 bg-gradient-to-br from-ailoop-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="text-lg font-semibold text-white mb-2">Pacote até R$ 5.000/mês em anúncios</h4>
                <p className="text-xl font-bold text-ailoop-neon-blue mb-2 price-highlight">R$ 4.000/mês</p>
                <ul className="text-gray-300 space-y-1">
                  <li className="flex items-start">
                    <span className="text-ailoop-neon-blue mr-2">•</span>
                    <span>2 perfis próprios com BMs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ailoop-neon-blue mr-2">•</span>
                    <span>Páginas com possível reposição</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ailoop-neon-blue mr-2">•</span>
                    <span>Funil MVP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ailoop-neon-blue mr-2">•</span>
                    <span>Criativos inclusos (até R$ 500)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ailoop-neon-blue mr-2">•</span>
                    <span>Indicado para: white, dropshipping, negócios locais, etc.</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden group-hover:border-ailoop-purple/30">
                <div className="absolute inset-0 bg-gradient-to-br from-ailoop-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="text-lg font-semibold text-white mb-2">Pacote até R$ 20.000/mês em anúncios</h4>
                <p className="text-xl font-bold text-ailoop-purple mb-2 price-highlight">R$ 8.000/mês</p>
                <ul className="text-gray-300 space-y-1">
                  <li className="flex items-start">
                    <span className="text-ailoop-purple mr-2">•</span>
                    <span>3 perfis próprios com BMs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ailoop-purple mr-2">•</span>
                    <span>Supervisor de tráfego incluso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ailoop-purple mr-2">•</span>
                    <span>Criativos inclusos (até R$ 2.500)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ailoop-purple mr-2">•</span>
                    <span>Suporte a nichos black e white</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ailoop-purple mr-2">•</span>
                    <span>Funil adaptado ou desenvolvido</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <AnimatedButton 
              className="w-full bg-ailoop-purple text-white font-medium py-3 rounded-lg transition-all duration-300 ease-out hover:bg-purple-600 hover:shadow-[0_0_15px_4px] hover:shadow-purple-500/40"
              customWhileHover={{ scale: 1.03 }}
            >
              Ver detalhes
            </AnimatedButton>
            
            {/* Fractured corner decoration */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t border-l border-ailoop-purple/30 rounded-tl-lg"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-ailoop-purple/30 rounded-br-lg"></div>
          </motion.div>
          
          {/* Card 3 - Gestão One Stack */}
          <motion.div variants={itemVariants} className="service-card group premium-card relative overflow-hidden">
            {/* Premium background effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-[#060C26] opacity-70 z-0"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHptMCAyaDR2MWgtNHptMCAyaDR2MWgtNHptMCAyaDR2MmgtNHptLTIwLTJoNHYxaC00em0wIDJoNHYxaC00em0wIDJoNHYxaC00em0wIDJoNHYyaC00em0tMi0yaDF2MWgtMXptMCAyaDF2MWgtMXptMC0xNmgxdjFoLTF6bTAgMmgxdjFoLTF6TTIgNGgxdjFoLTF6bTAgMmgxdjFoLTF6bTAtNGgxdjFoLTF6IiBvcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0zNCAyMGg0djFoLTR6bTAgMmg0djFoLTR6bTAgMmg0djFoLTR6bTAgMmg0djFoLTR6bS0xNi04aDR2MWgtNHptMCAyaDR2MWgtNHptMCAyaDR2MWgtNHptMCAyaDR2MWgtNHptLTE2LThoNHYxaC00em0wIDJoNHYxaC00em0wIDJoNHYxaC00em0wIDJoNHYxaC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 z-0"></div>
            
            {/* Content with higher z-index */}
            <div className="relative z-10">
              <div className="mb-6 flex justify-between items-center">
                <div className="w-14 h-14 bg-[#FFD700]/20 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <FileText className="w-7 h-7 text-[#FFD700]" />
                </div>
                <div className="absolute top-0 right-0 bg-[#FFD700] text-black text-xs font-bold py-1 px-3 rounded-bl-lg">
                  PREMIUM
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Gestão One Stack</span>
                <span className="ml-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" />
                  </svg>
                </span>
              </h3>
              
              <p className="text-[#FFD700] text-xl font-bold mb-4 premium-price relative">
                R$ 40.000 
                <span className="text-sm ml-1">(2 meses)</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFD700]/80 to-[#FFA500]/50"></span>
              </p>
              
              <ul className="text-gray-200 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-2">★</span>
                  <span>Diagnóstico completo do negócio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-2">★</span>
                  <span>Copywriting, automações, funil, posicionamento digital, tráfego pago (até R$ 20.000/mês)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-2">★</span>
                  <span>Inclui gestor de projeto, gestor de tráfego, gerente de contas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-2">★</span>
                  <span>Execução com metodologia AIDA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-2">★</span>
                  <span>Desenvolvimento MVP incluso</span>
                </li>
              </ul>
              
              <AnimatedButton 
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-medium py-3 rounded-lg border border-[#FFD700]/30 shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-300 ease-out hover:shadow-[0_0_25px_8px] hover:shadow-yellow-400/50 hover:brightness-110"
                customWhileHover={{ scale: 1.03, y: -3, transition: { duration: 0.2 } }}
              >
                Ver detalhes
              </AnimatedButton>
              
              {/* Premium corner decorations */}
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t border-r border-[#FFD700]/30 rounded-tr-lg"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b border-l border-[#FFD700]/30 rounded-bl-lg"></div>
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
