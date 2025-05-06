import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Remover import da imagem SVG
// import MockAiloopDons2 from '../assets/illustrations/mock-ailoop-dons-2.svg';

// Remover import Lottie

// Placeholder: URL de uma animação Lottie de cérebro/tecnologia
// Substitua pela URL do JSON da animação escolhida no LottieFiles
// const brainLottieUrl = 'https://assets4.lottiefiles.com/packages/lf20_o1x34y7s.json'; // Exemplo genérico

const AboutSection: React.FC = () => {
  // Hook para parallax
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Animar enquanto a seção está visível
  });
  // Mapeia o progresso do scroll (0 a 1) para um deslocamento Y MAIOR
  const imageY = useTransform(scrollYProgress, [0, 1], ["-60px", "60px"]); // Aumentado de 20px para 60px

  return (
    <section
      id="about"
      ref={sectionRef} // Referência para o useScroll
      className="bg-black text-white py-24 px-4 overflow-hidden" // Mantido overflow-hidden
    >
      <div className="container mx-auto">
        {/* Container principal com flex para layout assimétrico */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

          {/* Coluna da Imagem (Esquerda, ~40% da largura em MD+) */}
          {/* Adicionando motion.div externo para parallax */}
          <motion.div
            className="w-full md:w-2/5 order-1" // Ajuste de largura e ordem
            style={{ y: imageY }} // Aplicando parallax
          >
            <motion.div
              className="w-full max-w-md mx-auto md:max-w-none md:mx-0"
              initial={{ opacity: 0, scale: 0.9 }} // Animação: Fade + Scale
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              {/* Container para a imagem - SEM brilho pulsante */}
              <div
                className="relative rounded-3xl flex items-center justify-center overflow-hidden"
                // Removida animação de boxShadow
              >
                {/* Imagem com object-contain, sem interação, e na frente (z-10) */}
                <motion.img
                  src="/image_grande/Ialoop_ia_dev_developement.jpg" // Mantendo a imagem
                  alt="Sobre a AILOOP - Tecnologia e IA"
                  className="w-full h-auto max-h-[450px] object-contain relative z-10 rounded-2xl" // Adicionado rounded
                  // Removidas animações de motion.img que estavam aqui
                />
                {/* Opcional: Adicionar brilho sutil estático ou animado lentamente aqui se desejado */}
                {/* Exemplo brilho sutil azul/ciano estático:
                <div className="absolute inset-0 rounded-3xl box-shadow-[0_0_40px_10px_rgba(0,180,255,0.15)] pointer-events-none"></div>
                */}
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna de texto (Direita, ~60% da largura em MD+) */}
          <motion.div
            className="w-full md:w-3/5 max-w-3xl mx-auto text-center md:text-left md:mx-0 order-2" // Ajuste de largura e ordem
            initial={{ opacity: 0, y: 50 }} // Animação: Fade + Slide Up
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Título com fonte Orbitron, AILOOP em branco ou com gradiente */}
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-brand-white mb-6">
              Sobre a{' '}
              {/* Opção 1: AILOOP em branco */}
              {/* <span className="text-brand-white">AILOOP</span> */}

              {/* Opção 2: AILOOP com gradiente sutil (descomentar se preferir) */}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AILOOP
              </span>
            </h2>

            {/* Descrição com fonte sans-serif e cor ajustada */}
            <p className="text-lg md:text-xl text-neutral-200 mb-4 leading-relaxed font-sans">
              Somos uma empresa brasileira de tecnologia e marketing digital, com foco em IA aplicada à conversão, atendimento e performance.
            </p>
            <p className="text-lg md:text-xl text-neutral-200 leading-relaxed font-sans">
              Criamos agentes que vendem, atendem e encantam. Não somos uma agência comum. A AILOOP é uma estrutura pensada para acelerar negócios com IA de verdade.
            </p>
          </motion.div>

        </div>
        {/* Fim do Flex container principal */}

      </div>
    </section>
  );
};

export default AboutSection;