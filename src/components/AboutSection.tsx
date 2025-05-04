import React from 'react';
// Importar o SVG como componente
import AiAgentIllustration from '@/assets/illustrations/undraw_ai-agent_pdkp.svg?react'; 

// Placeholder removido
/*
const AiAgentIllustrationPlaceholder = () => (
  <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center text-gray-500 border border-white/10">
    [Ilustração "AI Agent" - Cor Principal: #00E1FF]
  </div>
);
*/

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-ailoop-dark-blue py-24 px-4">
      {/* Alterado para grid layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Coluna da Ilustração (aparece primeiro em telas menores devido à ordem no código) */}
        <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 order-1 md:order-2">
          {/* Usar o componente SVG importado */}
          <AiAgentIllustration className="w-full h-auto" />
        </div>
        
        {/* Coluna do Texto (mantém centralização em telas menores, alinha à esquerda em maiores) */}
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Sobre a <span className="text-ailoop-neon-blue">AILOOP</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Somos uma empresa brasileira de tecnologia e marketing digital, com foco em IA aplicada à conversão, atendimento e performance.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Criamos agentes que vendem, atendem e encantam. Não somos uma agência comum. A AILOOP é uma estrutura pensada para acelerar negócios com IA de verdade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
