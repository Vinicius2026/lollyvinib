import React from 'react';
import { motion } from 'framer-motion';
import { Shapes } from 'lucide-react'; // Re-adicionar importação de ícone
// import { Brain, Sparkles } from 'lucide-react'; // Removido - não mais usado
// import { fadeInUp } from '@/lib/motion/config'; // Removido - lógica de animação será diferente

// Dados dos diferenciais em Português
const differentials = [
  {
    id: 'ia-verdade',
    icon: 'ICON_PLACEHOLDER_1', // Placeholder para o futuro ícone redesenhado
    title: 'IA de verdade',
    description: 'Sem robozinho travado. Nossa IA entende contexto, conversa naturalmente e toma decisões inteligentes.',
  },
  {
    id: 'atendimento-personalizado',
    icon: 'ICON_PLACEHOLDER_2',
    title: 'Atendimento personalizado',
    description: 'Cada negócio é único. Criamos soluções sob medida para suas necessidades específicas.',
  },
  {
    id: 'equipe-experiente',
    icon: 'ICON_PLACEHOLDER_3',
    title: 'Equipe com experiência real',
    description: 'Profissionais que já gerenciaram milhões em investimentos e sabem como entregar resultados.',
  },
  {
    id: 'resultados-rapidos',
    icon: 'ICON_PLACEHOLDER_4',
    title: 'Resultados rápidos e escaláveis',
    description: 'Nossa metodologia permite implementar soluções rapidamente e escalar conforme seu negócio cresce.',
  },
  {
    id: 'transparencia-estrutura',
    icon: 'ICON_PLACEHOLDER_5',
    title: 'Transparência e estrutura própria',
    description: 'Acesso transparente às métricas e resultados. Tecnologia proprietária para máximo desempenho.',
  },
];

const WhyUsSection: React.FC = () => {
  // Lógica de scroll e estado ativo virá aqui depois

  return (
    // Container principal da seção com altura significativa para permitir rolagem
    <section 
      id="why-us" 
      className="relative py-24 px-4 bg-[#05050A] text-white overflow-hidden" // Fundo escuro
      style={{ minHeight: '300vh' }} // Garante espaço para a rolagem da narrativa
    >
      {/* Placeholder Fixo para a Sinapse AILOOP */}
      <motion.div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-ailoop-blue to-ailoop-neon-blue rounded-full z-10 flex items-center justify-center text-black shadow-xl"
        // Animações de entrada e reações virão aqui depois
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-sm font-bold">Sinapse (Placeholder)</span>
      </motion.div>

      {/* Container para o conteúdo sequencial dos diferenciais */}
      <div className="relative z-0 max-w-2xl mx-auto flex flex-col items-center pt-96"> {/* pt alto para dar espaço inicial */}
        {differentials.map((item, index) => (
          <motion.div
            key={item.id}
            className="differential-item text-center mb-[80vh] last:mb-0" // Espaçamento vertical grande entre itens
            // Animações de entrada/saída e estado ativo/inativo virão aqui
            initial={{ opacity: 0.3, y: 50 }} // Inicia semi-transparente e deslocado
            whileInView={{ opacity: 1, y: 0 }} // Fica opaco e na posição ao entrar na viewport
            viewport={{ margin: "-40% 0px -40% 0px" }} // Define a área de ativação (centro da tela)
            transition={{ duration: 0.6 }}
          >
            {/* Ícone (Placeholder) - Agora usando Lucide Icon */}
            <div className="mb-6 inline-flex items-center justify-center p-4 border border-ailoop-blue/30 rounded-full bg-black/30">
              {/* Futuro componente de ícone animado aqui */}
              {/* <span className="text-xs text-ailoop-neon-blue">{item.icon}</span> */}
              <Shapes size={24} className="text-ailoop-neon-blue" />
            </div>
            
            {/* Título */}
            <h3 className="text-3xl font-semibold mb-4 text-brand-white">
              {item.title}
            </h3>
            
            {/* Descrição */}
            <p className="text-lg text-gray-300 max-w-md mx-auto">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Remover elementos antigos */}
      {/* 
        // ... Código antigo da barra flutuante, grid, imagem e decorativos foi removido ...
      */}

    </section>
  );
};

export default WhyUsSection; // Garantir que a exportação default está presente
