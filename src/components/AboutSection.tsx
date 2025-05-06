import React from 'react';
import { motion } from 'framer-motion';
// Remover import da imagem SVG
// import MockAiloopDons2 from '../assets/illustrations/mock-ailoop-dons-2.svg';

// Remover import Lottie

// Placeholder: URL de uma animação Lottie de cérebro/tecnologia
// Substitua pela URL do JSON da animação escolhida no LottieFiles
const brainLottieUrl = 'https://assets4.lottiefiles.com/packages/lf20_o1x34y7s.json'; // Exemplo genérico

const AboutSection: React.FC = () => {
  // Remover useState e useEffect

  return (
    <section id="about" className="bg-black text-white py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        {/* Remover título superior antigo */}

        {/* Grid principal com ordem invertida */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* Coluna da Animação (Esquerda) */}
          {/* Adicionada ordem explícita para clareza */}
          <motion.div
            className="w-full max-w-md mx-auto md:max-w-none md:mx-0 order-1"
            initial={{ opacity: 0, x: -50 }} // Animação da esquerda
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Container para a imagem - REMOVIDO aspect-square e overflow-hidden */}
            <div className="relative rounded-2xl flex items-center justify-center">
              {/* Elemento para o brilho animado roxo ATRÁS da imagem */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                animate={{
                  boxShadow: [
                    // Usando apenas o brilho roxo com spread maior
                    '0 0 40px 15px rgba(160, 32, 240, 0.5)',
                    '0 0 60px 25px rgba(160, 32, 240, 0.7)',
                    '0 0 40px 15px rgba(160, 32, 240, 0.5)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              />
              {/* Imagem com object-contain, sem interação, e na frente (z-10) */}
              <motion.img
                src="/image_grande/Leonardo_Phoenix_10_Wide_horizontal_banner_illustration_aspect_3 (1).jpg"
                alt="Ilustração AILOOP Sobre"
                className="w-full h-full object-contain relative z-10" // Adicionado relative z-10
                initial={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Coluna de texto (Direita) */}
          {/* Adicionada ordem explícita */}
          <motion.div
            className="max-w-3xl mx-auto text-center md:text-left md:mx-0 order-2"
            initial={{ opacity: 0, x: 50 }} // Animação da direita
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Título com fonte mono e cor neon */}
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6">
              Sobre a <span className="text-neon-cyan">AILOOP</span>
            </h2>

            {/* Descrição com fonte sans-serif */}
            <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed font-sans">
              Somos uma empresa brasileira de tecnologia e marketing digital, com foco em IA aplicada à conversão, atendimento e performance.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans">
              Criamos agentes que vendem, atendem e encantam. Não somos uma agência comum. A AILOOP é uma estrutura pensada para acelerar negócios com IA de verdade.
            </p>
          </motion.div>

        </div>
        {/* Fim do Grid principal */}

      </div>
    </section>
  );
};

export default AboutSection;