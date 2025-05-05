import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion/config';
import { CharacterViewer } from '@/components/animations/CharacterViewer'; // Importando de /components/animations

const AIInfoSection: React.FC = () => {
  // Conteúdo corrigido
  const title = "Hoje, são as IAs que escolhem as melhores opções.";
  const description = "Tudo que envolve empresas digitais foi sofisticado com Inteligência Artificial. Atendimento, SAC e vendas, funis para conteúdo e funis para ações estratégicas, tráfego pago... tudo agora também é com IA, tanto no planejamento quanto na execução e atualização diária. Se fôssemos detalhar tudo, seria difícil explicar neste texto. O que queremos dizer é que todas as áreas estão conectadas à Inteligência Artificial. Existem duas escolhas: achar que é demais para o seu negócio ou se adaptar a um novo começo, talvez até mais facilitado e com muito mais qualidade aplicada.";

  return (
    <section 
      className="relative px-4 py-16 md:py-24 overflow-hidden bg-brand-dark" // Fundo escuro, padding vertical
    >
      {/* Container principal com flex */}
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Coluna Esquerda: Modelo 3D */}
        <motion.div
          className="w-full md:w-1/3 h-[280px] md:h-[350px] z-0 flex items-center justify-center"
          initial={{ x: -50, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }} 
        >
          <CharacterViewer 
            modelUrl="/models/cyberpunk_cats.glb"
            modelScale={2.4} 
            modelPosition={[0, -1.2, 0]} 
            canvasHeight="100%"
          />
        </motion.div>

        {/* Coluna Direita: Texto Cyberpunk */}
        <motion.div 
          className="w-full md:w-2/3 flex flex-col space-y-6 p-6 border border-gray-700/40 rounded-lg bg-black/20 backdrop-blur-md shadow-lg shadow-black/30" // Estilo da caixa
          variants={fadeInUp} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white leading-tight font-serif 
                         text-shadow-[0_0_8px_rgba(255,255,255,0.3)] hover:text-shadow-[0_0_12px_rgba(0,255,255,0.5)] transition-all duration-300">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 font-sans font-light">
            {description}
          </p>

          {/* Poderia adicionar um botão aqui se quisesse */}
          
        </motion.div>

      </div>
    </section>
  );
};

export default AIInfoSection; 