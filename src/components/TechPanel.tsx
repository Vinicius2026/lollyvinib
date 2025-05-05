import React from 'react';
import { Brain, Cpu, Database, ShieldCheck, Zap, Code, MessageSquare, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion/config';
import DarkCloudParticles from './animations/DarkCloudParticles';
import PlexusAnimation from './animations/PlexusAnimation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};
const itemVariants = fadeInUp;

const TechPanel: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-ailoop-dark-blue via-[#0A1630] to-ailoop-blue pt-40 pb-24 relative overflow-hidden">
      <DarkCloudParticles />
      <PlexusAnimation />
      
      <div className="absolute left-1/2 top-16 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center justify-center space-x-2 bg-black/40 px-6 py-2 rounded-full backdrop-blur-lg border border-ailoop-neon-blue/30">
          <MessageSquare size={18} className="text-ailoop-neon-blue animate-pulse" />
          <span className="text-white/90 font-light tracking-widest text-sm">WHATSAPP ATENDIMENTO HUMANIZADO</span>
          <Globe size={18} className="text-ailoop-orange animate-pulse" />
          <span className="ml-1 text-ailoop-neon-blue font-bold">AI∞LAB</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="tech-panel-container relative mt-20">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-ailoop-purple/20 to-ailoop-dark-blue/80 backdrop-blur-md border border-ailoop-neon-blue/20">
            <Brain className="w-14 h-14 text-ailoop-neon-blue surreal-float electric-pulse" />
            
            <div className="absolute inset-0 z-0">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-px neural-connection"
                  style={{
                    height: `${Math.random() * 50 + 100}px`, 
                    background: `linear-gradient(to bottom, #00E1FF, transparent)`,
                    left: `${Math.random() * 80 + 10}%`,
                    top: '100%',
                    transformOrigin: 'top',
                    transform: `rotate(${Math.random() * 360}deg)`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 p-8 bg-gradient-to-br from-black/50 to-ailoop-blue/30 backdrop-blur-md border border-ailoop-neon-blue/20 shadow-xl relative shadow-ailoop-neon-blue/30"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="absolute -top-6 left-12 p-2 bg-black/50 border border-ailoop-neon-blue/30 rounded text-ailoop-neon-blue text-xs font-mono">
              <div className="flex items-center space-x-1">
                <span className="inline-block w-2 h-2 bg-ailoop-neon-blue rounded-full animate-pulse"></span>
                <span className="loading-text">SYSTEM.ACTIVE</span>
              </div>
            </div>
            
            <div className="absolute top-8 right-8 p-2 bg-black/30 border border-ailoop-purple/20 rounded text-xs text-ailoop-purple font-mono">
              <div className="flex items-center space-x-1">
                <span className="loading-text">QUANTUM.SECURE</span>
                <span className="inline-block w-2 h-2 bg-ailoop-purple rounded-full animate-pulse"></span>
              </div>
            </div>
            
            <motion.div variants={itemVariants} className="dashboard-item">
              <div className="icon-container">
                <Cpu className="dashboard-icon" />
              </div>
              <h3 className="dashboard-title">Processamento Neural</h3>
              <p className="text-gray-300">Inteligência artificial treinada em modelos avançados de linguagem com capacidade GPT-4.</p>
              <div className="dashboard-stat">
                <span>Capacidade</span>
                <div className="stat-bar">
                  <div className="stat-value" style={{width: '92%'}}></div>
                </div>
                <span>92%</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="dashboard-item">
              <div className="icon-container">
                <Database className="dashboard-icon" />
              </div>
              <h3 className="dashboard-title">Big Data Analytics</h3>
              <p className="text-gray-300">Processamento e análise de grandes volumes de dados para extrair insights valiosos.</p>
              <div className="dashboard-stat">
                <span>Eficiência</span>
                <div className="stat-bar">
                  <div className="stat-value bg-ailoop-purple" style={{width: '87%'}}></div>
                </div>
                <span>87%</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="dashboard-item">
              <div className="icon-container">
                <ShieldCheck className="dashboard-icon" />
              </div>
              <h3 className="dashboard-title">Segurança Quântica</h3>
              <p className="text-gray-300">Proteção avançada de dados com criptografia de última geração contra invasões.</p>
              <div className="dashboard-stat">
                <span>Proteção</span>
                <div className="stat-bar">
                  <div className="stat-value bg-ailoop-pink" style={{width: '99%'}}></div>
                </div>
                <span>99%</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="dashboard-item">
              <div className="icon-container">
                <Code className="dashboard-icon" />
              </div>
              <h3 className="dashboard-title">Auto-Programação</h3>
              <p className="text-gray-300">Sistemas capazes de escrever e otimizar seu próprio código, evoluindo constantemente.</p>
              <div className="dashboard-stat">
                <span>Otimização</span>
                <div className="stat-bar">
                  <div className="stat-value bg-ailoop-orange" style={{width: '84%'}}></div>
                </div>
                <span>84%</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="dashboard-item">
              <div className="icon-container">
                <Zap className="dashboard-icon" />
              </div>
              <h3 className="dashboard-title">Performance Acelerada</h3>
              <p className="text-gray-300">Tempo de resposta ultra-rápido através de processamento paralelo distribúido.</p>
              <div className="dashboard-stat">
                <span>Velocidade</span>
                <div className="stat-bar">
                  <div className="stat-value" style={{width: '96%'}}></div>
                </div>
                <span>96%</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="dashboard-item col-span-1 md:col-span-3">
              <div className="w-full h-10 bg-black/30 rounded-lg overflow-hidden font-mono text-xs text-ailoop-neon-blue p-2">
                <div className="typing-text">
                  {"{'>'"} Inicializando sistemas avançados de IA... <span className="text-green-400">OK</span><br/>
                  {"{'>'"} Carregando modelos neurais... <span className="text-green-400">100%</span><br/>
                  {"{'>'"} AILOOP: Pronto para revolucionar o seu negócio com IA avançada.
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
              <div title="OpenAI / AI" className="h-8 w-auto text-gray-400 opacity-70 hover:opacity-100 transition-opacity duration-300">
              </div>

              <div title="Cloud Technology" className="h-8 w-auto text-gray-400 opacity-70 hover:opacity-100 transition-opacity duration-300">
              </div>

              <div title="Google Gemini / AI" className="h-8 w-auto text-gray-400 opacity-70 hover:opacity-100 transition-opacity duration-300">
              </div>

              <div title="Node.js" className="h-8 w-auto text-gray-400 opacity-70 hover:opacity-100 transition-opacity duration-300">
              </div>

              <div title="Next.js" className="h-8 w-auto text-gray-400 opacity-70 hover:opacity-100 transition-opacity duration-300">
              </div>
              
              <div title="React" className="h-8 w-auto text-gray-400 opacity-70 hover:opacity-100 transition-opacity duration-300">
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechPanel;
