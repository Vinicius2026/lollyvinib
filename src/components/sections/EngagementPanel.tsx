import React from 'react';
import { motion } from 'framer-motion';

const EngagementPanel: React.FC = () => {
  // Cores e fontes baseadas no briefing (exemplos, ajustar conforme tailwind.config.js)
  // Base Escura: '#1A1D24' (Cinza Chumbo), '#0B132B' (Azul Petróleo), '#2A1B3D' (Roxo Espacial)
  // Acentos: '#00FFFF' (Ciano), '#FF00FF' (Magenta), '#FF9900' (Laranja), '#ADFF2F' (Verde Limão)
  // Neutros: '#FFFFFF', '#F0F0F5' (Brancos), '#B0B0C0', '#C5C6C7' (Cinzas Claros)

  // Tipografia (exemplos, usar classes Tailwind correspondentes)
  // Títulos: Montserrat, Orbitron, Inter (Bold/SemiBold)
  // Corpo: Inter (Regular, Medium)
  // Botões: Inter (SemiBold, Bold)

  return (
    <div className="content-interaction-area flex flex-col justify-center w-full">
      <motion.div
        className="content-panel bg-[rgba(30,30,45,0.6)] backdrop-blur-xl saturate-150 rounded-xl border border-[rgba(120,120,150,0.2)] p-8 md:p-10 shadow-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-md mx-auto">
          <div className="progress-indicator flex justify-center mb-6">
            <span className="dot w-2.5 h-2.5 rounded-full bg-neon-magenta mx-1.5"></span>
            <span className="dot w-2.5 h-2.5 rounded-full bg-[rgba(120,120,150,0.3)] mx-1.5"></span>
            <span className="dot w-2.5 h-2.5 rounded-full bg-[rgba(120,120,150,0.3)] mx-1.5"></span>
          </div>

          <h2 className="panel-title text-3xl md:text-4xl font-bold text-brand-white text-center mb-4 font-orbitron">
            Podemos Começar?
          </h2>

          <p className="panel-description text-sm md:text-base text-neutral-300 leading-relaxed text-center mb-8 font-inter">
            Complete e receba uma mensagem no WhatsApp com a Caixa Mágica AILOOP. Quer potencializar seu negócio com IA e está apertado(a)? Complete o Quizz.
            <br/><br/>
            Selecione uma das opções, ao clicar você confirma e não poderá alterar sua escolha. Estamos registrando seu IP e será permitido UMA Caixa Mágica por WhatsApp cadastrado.
          </p>

          <div className="action-buttons grid grid-cols-1 gap-4">
            <motion.button
              className="btn btn-primary bg-neon-cyan text-brand-dark-blue py-3 px-6 rounded-lg font-semibold uppercase tracking-wider text-sm shadow-[0_4px_15px_rgba(0,255,255,0.3)] transition-all duration-300 ease-out"
              whileHover={{ transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(0, 255, 255, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              Sim
            </motion.button>
            <motion.button
              className="btn btn-secondary bg-[rgba(120,120,150,0.2)] text-neutral-200 border border-[rgba(120,120,150,0.4)] py-3 px-6 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300 ease-out"
              whileHover={{ backgroundColor: 'rgba(120,120,150,0.3)', borderColor: 'rgba(120,120,150,0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              Não
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EngagementPanel; 