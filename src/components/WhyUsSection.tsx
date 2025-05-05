import React from 'react';
import { Brain, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion/config';

// Definir variantes do container para stagger (pode ser a mesma de ServicesSection ou customizada)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Variante para o item (reutilizando a existente)
const itemVariants = fadeInUp;

const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-24 px-4 relative overflow-hidden min-h-[70vh]">
      {/* Decorative elements - lines and shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-32 h-32 border-2 border-ailoop-neon-blue/10 rounded-full"></div>
        <div className="absolute top-3/4 right-1/5 w-64 h-64 border border-ailoop-purple/5 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 border border-ailoop-pink/5 -rotate-12 rounded-3xl"></div>
        
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-ailoop-neon-blue/10 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-ailoop-purple/10 to-transparent"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-ailoop-pink/10 to-transparent"></div>
        
        <div className="absolute top-24 right-24 w-20 h-1 bg-ailoop-neon-blue/20 rotate-45"></div>
        <div className="absolute bottom-36 left-12 w-32 h-1 bg-ailoop-purple/20 -rotate-12"></div>
        <div className="absolute top-32 left-1/2 w-16 h-16 bg-ailoop-pink/5 rounded-full blur-xl"></div>
      </div>

      {/* Nova Barra Flutuante estilo TechPanel */}
      <div className="absolute left-1/2 top-20 transform -translate-x-1/2 -translate-y-1/2 z-10 w-auto max-w-[90%]">
        <div className="pointed-bar flex items-center justify-center flex-wrap gap-x-4 gap-y-2 bg-black/40 px-6 py-3 sm:px-8 sm:py-4 backdrop-blur-lg border border-white/20 shadow-lg">
          {/* Ícone Brain comentado temporariamente para resolver linter error */}
          {/* <Brain size={20} className="text-ailoop-neon-blue flex-shrink-0" /> */}
          <h2 className="text-md sm:text-lg font-semibold text-white text-center whitespace-nowrap">
            Por que escolher a <span className="text-gradient">AILOOP</span>?
          </h2>
          <div className="hidden sm:block h-4 w-px bg-white/30 flex-shrink-0"></div>
          <p className="text-xs sm:text-sm text-gray-300 text-center flex-shrink min-w-0">
            Entenda os diferenciais que nos colocam à frente.
          </p>
        </div>
      </div>

      {/* Container Principal */}
      <div className="container mx-auto relative z-10 mt-40">
        {/* Aplicar motion.div ao container do grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Animar quando 10% visível
        >
          {/* Feature 1 - IA de verdade */}
          <motion.div variants={itemVariants} className="relative group p-6 bg-black/50 border border-gray-800 rounded-2xl transition-all duration-300 hover:border-gray-600 hover:bg-black/70 overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4 inline-block p-3 bg-gray-900 border border-gray-700 rounded-xl shadow-md group-hover:border-yellow-400/50 transition-colors duration-300">
                <Sparkles className="w-6 h-6 text-[#FFD700] transition-colors duration-300 group-hover:text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-yellow-300">IA de verdade</h3>
              <p className="text-gray-400">
                Sem robozinho travado. Nossa IA entende contexto, conversa naturalmente e toma decisões inteligentes.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </motion.div>
          
          {/* Feature 2 - Atendimento personalizado */}
          <motion.div variants={itemVariants} className="relative group p-6 bg-black/50 border border-gray-800 rounded-2xl transition-all duration-300 hover:border-gray-600 hover:bg-black/70 overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4 inline-block p-3 bg-gray-900 border border-gray-700 rounded-xl shadow-md group-hover:border-yellow-400/50 transition-colors duration-300">
                <Sparkles className="w-6 h-6 text-[#FFD700] transition-colors duration-300 group-hover:text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-yellow-300">Atendimento personalizado</h3>
              <p className="text-gray-400">
                Cada negócio é único. Criamos soluções sob medida para suas necessidades específicas.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </motion.div>
          
          {/* Feature 3 - Equipe com experiência real */}
          <motion.div variants={itemVariants} className="relative group p-6 bg-black/50 border border-gray-800 rounded-2xl transition-all duration-300 hover:border-gray-600 hover:bg-black/70 overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4 inline-block p-3 bg-gray-900 border border-gray-700 rounded-xl shadow-md group-hover:border-yellow-400/50 transition-colors duration-300">
                <Sparkles className="w-6 h-6 text-[#FFD700] transition-colors duration-300 group-hover:text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-yellow-300">Equipe com experiência real</h3>
              <p className="text-gray-400">
                Profissionais que já gerenciaram milhões em investimentos e sabem como entregar resultados.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </motion.div>
          
          {/* Feature 4 - Resultados rápidos e escaláveis */}
          <motion.div variants={itemVariants} className="relative group p-6 bg-black/50 border border-gray-800 rounded-2xl transition-all duration-300 hover:border-gray-600 hover:bg-black/70 overflow-hidden md:translate-x-1/2 lg:translate-x-0">
            <div className="relative z-10">
              <div className="mb-4 inline-block p-3 bg-gray-900 border border-gray-700 rounded-xl shadow-md group-hover:border-yellow-400/50 transition-colors duration-300">
                <Sparkles className="w-6 h-6 text-[#FFD700] transition-colors duration-300 group-hover:text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-yellow-300">Resultados rápidos e escaláveis</h3>
              <p className="text-gray-400">
                Nossa metodologia permite implementar soluções rapidamente e escalar conforme seu negócio cresce.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </motion.div>
          
          {/* Feature 5 - Transparência e estrutura própria */}
          <motion.div variants={itemVariants} className="relative group p-6 bg-black/50 border border-gray-800 rounded-2xl transition-all duration-300 hover:border-gray-600 hover:bg-black/70 overflow-hidden md:translate-x-1/2 lg:translate-x-0">
            <div className="relative z-10">
              <div className="mb-4 inline-block p-3 bg-gray-900 border border-gray-700 rounded-xl shadow-md group-hover:border-yellow-400/50 transition-colors duration-300">
                <Sparkles className="w-6 h-6 text-[#FFD700] transition-colors duration-300 group-hover:text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-yellow-300">Transparência e estrutura própria</h3>
              <p className="text-gray-400">
                Acesso transparente às métricas e resultados. Tecnologia proprietária para máximo desempenho.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Stylized brain SVG component
const BrainIllustration = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M50 10C43 10 38 15 38 22C38 29 43 34 50 34C57 34 62 29 62 22C62 15 57 10 50 10Z" fill="url(#paint0_linear)" />
    <path d="M75 30C69 30 65 34 65 40C65 46 69 50 75 50C81 50 85 46 85 40C85 34 81 30 75 30Z" fill="url(#paint1_linear)" />
    <path d="M25 30C19 30 15 34 15 40C15 46 19 50 25 50C31 50 35 46 35 40C35 34 31 30 25 30Z" fill="url(#paint2_linear)" />
    <path d="M60 45C55 45 51 49 51 54C51 59 55 63 60 63C65 63 69 59 69 54C69 49 65 45 60 45Z" fill="url(#paint3_linear)" />
    <path d="M40 45C35 45 31 49 31 54C31 59 35 63 40 63C45 63 49 59 49 54C49 49 45 45 40 45Z" fill="url(#paint4_linear)" />
    <path d="M65 70C60 70 56 74 56 79C56 84 60 88 65 88C70 88 74 84 74 79C74 74 70 70 65 70Z" fill="url(#paint5_linear)" />
    <path d="M35 70C30 70 26 74 26 79C26 84 30 88 35 88C40 88 44 84 44 79C44 74 40 70 35 70Z" fill="url(#paint6_linear)" />
    <path d="M50 80C46 80 43 83 43 87C43 91 46 94 50 94C54 94 57 91 57 87C57 83 54 80 50 80Z" fill="url(#paint7_linear)" />
    <path d="M38 22C38 22 25 25 25 40" stroke="url(#paint8_linear)" strokeWidth="1.5" />
    <path d="M62 22C62 22 75 25 75 40" stroke="url(#paint9_linear)" strokeWidth="1.5" />
    <path d="M35 40C35 40 40 45 40 54" stroke="url(#paint10_linear)" strokeWidth="1.5" />
    <path d="M65 40C65 40 60 45 60 54" stroke="url(#paint11_linear)" strokeWidth="1.5" />
    <path d="M40 63C40 63 35 70 35 79" stroke="url(#paint12_linear)" strokeWidth="1.5" />
    <path d="M60 63C60 63 65 70 65 79" stroke="url(#paint13_linear)" strokeWidth="1.5" />
    <path d="M35 88C35 88 43 87 50 87" stroke="url(#paint14_linear)" strokeWidth="1.5" />
    <path d="M65 88C65 88 57 87 50 87" stroke="url(#paint15_linear)" strokeWidth="1.5" />
    <defs>
      <linearGradient id="paint0_linear" x1="38" y1="22" x2="62" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="paint1_linear" x1="65" y1="40" x2="85" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6236FF" />
        <stop offset="1" stopColor="#FF36AB" />
      </linearGradient>
      <linearGradient id="paint2_linear" x1="15" y1="40" x2="35" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="paint3_linear" x1="51" y1="54" x2="69" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6236FF" />
        <stop offset="1" stopColor="#FF36AB" />
      </linearGradient>
      <linearGradient id="paint4_linear" x1="31" y1="54" x2="49" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="paint5_linear" x1="56" y1="79" x2="74" y2="79" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6236FF" />
        <stop offset="1" stopColor="#FF36AB" />
      </linearGradient>
      <linearGradient id="paint6_linear" x1="26" y1="79" x2="44" y2="79" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="paint7_linear" x1="43" y1="87" x2="57" y2="87" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6236FF" />
        <stop offset="1" stopColor="#FF36AB" />
      </linearGradient>
      <linearGradient id="paint8_linear" x1="38" y1="22" x2="25" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="paint9_linear" x1="62" y1="22" x2="75" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6236FF" />
        <stop offset="1" stopColor="#FF36AB" />
      </linearGradient>
      <linearGradient id="paint10_linear" x1="35" y1="40" x2="40" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="paint11_linear" x1="65" y1="40" x2="60" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6236FF" />
        <stop offset="1" stopColor="#FF36AB" />
      </linearGradient>
      <linearGradient id="paint12_linear" x1="40" y1="63" x2="35" y2="79" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="paint13_linear" x1="60" y1="63" x2="65" y2="79" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6236FF" />
        <stop offset="1" stopColor="#FF36AB" />
      </linearGradient>
      <linearGradient id="paint14_linear" x1="35" y1="87.5" x2="50" y2="87.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="paint15_linear" x1="65" y1="87.5" x2="50" y2="87.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF36AB" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default WhyUsSection;
