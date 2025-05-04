
import React from 'react';
import { Brain, Cpu, Database, ShieldCheck, Zap, Code, MessageSquare, Globe } from 'lucide-react';

const TechPanel: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-ailoop-dark-blue via-[#0A1630] to-ailoop-blue py-16 relative overflow-hidden">
      {/* Ocean/Beach-inspired background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid-bg"></div>
      </div>
      
      {/* Animated ocean waves */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="ocean-waves">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#4DB4FC" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6236FF" stopOpacity="0.3" />
            </linearGradient>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="#00E1FF" strokeWidth="1" />
              <path d="M20,20 L50,20 L50,50 L20,50 Z" fill="none" stroke="#6236FF" strokeWidth="1" />
              <path d="M50,50 L80,50 L80,80 L50,80 Z" fill="none" stroke="#FF36AB" strokeWidth="1" />
              <circle cx="20" cy="20" r="3" fill="#00E1FF" />
              <circle cx="50" cy="50" r="3" fill="#6236FF" />
              <circle cx="80" cy="80" r="3" fill="#FF36AB" />
              <circle cx="80" cy="20" r="3" fill="#FF8A00" />
              <path d="M20,80 L40,60 L60,70 L80,20" fill="none" stroke="#FF8A00" strokeWidth="1" strokeDasharray="4 2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
          
          {/* Animated waves */}
          <path d="M0,50 Q25,30 50,50 Q75,70 100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50" 
                fill="none" stroke="url(#wave-gradient)" strokeWidth="2" className="animate-wave-slow" />
          <path d="M0,60 Q25,40 50,60 Q75,80 100,60 T150,60 T200,60 T250,60 T300,60 T350,60 T400,60" 
                fill="none" stroke="url(#wave-gradient)" strokeWidth="1.5" className="animate-wave-medium" />
          <path d="M0,70 Q25,50 50,70 Q75,90 100,70 T150,70 T200,70 T250,70 T300,70 T350,70 T400,70" 
                fill="none" stroke="url(#wave-gradient)" strokeWidth="1" className="animate-wave-fast" />
        </svg>
      </div>
      
      {/* Moving data streams */}
      <div className="absolute inset-0 z-0">
        <div className="data-stream top-1/4 left-0 w-full h-px"></div>
        <div className="data-stream top-2/4 left-0 w-full h-px delay-300"></div>
        <div className="data-stream top-3/4 left-0 w-full h-px delay-600"></div>
        
        <div className="data-stream-vertical left-1/4 top-0 h-full w-px"></div>
        <div className="data-stream-vertical left-2/4 top-0 h-full w-px delay-300"></div>
        <div className="data-stream-vertical left-3/4 top-0 h-full w-px delay-600"></div>
      </div>
      
      {/* New WhatsApp AI Lab branding above panel */}
      <div className="absolute left-1/2 top-12 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center justify-center space-x-2 bg-black/40 px-6 py-2 rounded-full backdrop-blur-lg border border-ailoop-neon-blue/30">
          <MessageSquare size={18} className="text-ailoop-neon-blue animate-pulse" />
          <span className="text-white/90 font-light tracking-widest text-sm">WHATSAPP ATENDIMENTO HUMANIZADO</span>
          <Globe size={18} className="text-ailoop-orange animate-pulse" />
          <span className="ml-1 bg-gradient-to-r from-ailoop-neon-blue to-ailoop-purple bg-clip-text text-transparent font-bold">AI∞LAB</span>
        </div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="tech-panel-container relative">
          {/* Digital brain with animated connections */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-ailoop-purple/20 to-ailoop-dark-blue/80 backdrop-blur-md border border-ailoop-neon-blue/20">
            <Brain className="w-14 h-14 text-ailoop-neon-blue surreal-float electric-pulse" />
            
            {/* Neural connections */}
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
          
          {/* Tech Panel Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 p-8 bg-gradient-to-br from-black/50 to-ailoop-blue/30 rounded-2xl backdrop-blur-md border border-ailoop-neon-blue/20 shadow-xl relative">
            {/* Holographic interface elements */}
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
            
            {/* Dashboard Items */}
            <div className="dashboard-item">
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
            </div>
            
            <div className="dashboard-item">
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
            </div>
            
            <div className="dashboard-item">
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
            </div>
            
            <div className="dashboard-item">
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
            </div>
            
            <div className="dashboard-item">
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
            </div>
            
            <div className="dashboard-item col-span-1 md:col-span-3">
              <div className="w-full h-10 bg-black/30 rounded-lg overflow-hidden font-mono text-xs text-ailoop-neon-blue p-2">
                <div className="typing-text">
                  {"{'>'"} Inicializando sistemas avançados de IA... <span className="text-green-400">OK</span><br/>
                  {"{'>'"} Carregando modelos neurais... <span className="text-green-400">100%</span><br/>
                  {"{'>'"} AILOOP: Pronto para revolucionar o seu negócio com IA avançada.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section transition element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-ailoop-blue to-transparent"></div>
    </section>
  );
};

export default TechPanel;
